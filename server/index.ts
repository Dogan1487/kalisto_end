import express from 'express';
import cors from 'cors';
import { Connection, ConnectionConfig } from '@solana/web3.js';
import { PrivyClient } from '@privy-io/server-auth';
import { executeJupiterSwap } from './jupiter.js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

if (!process.env.QUICKNODE_RPC_URL) {
  throw new Error('Missing QuickNode RPC URL in environment variables');
}

if (!process.env.PRIVY_APP_ID || !process.env.PRIVY_APP_SECRET) {
  throw new Error('Missing Privy credentials in environment variables');
}

// Configure connection
const config: ConnectionConfig = {
  commitment: 'confirmed',
};

// Create the connection
const connection = new Connection(process.env.QUICKNODE_RPC_URL, config);

// Initialize Privy client with appId and appSecret as separate arguments
const privyClient = new PrivyClient(
  process.env.PRIVY_APP_ID,
  process.env.PRIVY_APP_SECRET
);

// Enable CORS for frontend
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Parse JSON bodies
app.use(express.json());

// Add logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`, {
    body: req.body,
    headers: req.headers
  });
  next();
});

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Error:', err);
  res.status(500).json({ error: err.message || 'Internal server error' });
});

app.post('/api/swap', async (req, res) => {
  try {
    console.log('Received swap request');
    const { quoteResponse } = req.body;
    const authToken = req.headers.authorization?.replace('Bearer ', '');

    console.log('Request details:', {
      quoteResponse,
      authToken: authToken ? `${authToken.substring(0, 10)}...` : 'none'
    });

    if (!authToken) {
      console.log('No auth token provided');
      return res.status(401).json({ error: 'No authorization token provided' });
    }

    if (!quoteResponse) {
      console.log('No quote response provided');
      return res.status(400).json({ error: 'No quote response provided' });
    }

    console.log('Processing swap with quote:', quoteResponse);

    const txid = await executeJupiterSwap(
      connection,
      privyClient,
      authToken,
      quoteResponse
    );

    console.log('Swap successful:', { txid });
    res.json({ txid });
  } catch (error: any) {
    console.error('Swap error details:', {
      error,
      message: error.message,
      stack: error.stack
    });
    res.status(500).json({ error: error.message || 'Swap failed' });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log('Available routes:');
  console.log('- POST /api/swap');
  console.log('- GET /health');
});
