import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { TOKEN_TAGS } from '@/lib/constants';

export interface Token {
  id: string;
  symbol: string;
  name: string;
  image: string;
  emoji: string;
  age: string;
  ca?: string;
  twitter?: string;
  telegram?: string;
  website?: string;
  description?: string;
  tags?: string[];
  isVerified?: boolean;
  isNew?: boolean;
  listedAt?: number;
  decimals?: number;
  socialLinks?: {
    twitter?: string;
    telegram?: string;
    website?: string;
  };
}

interface TokensState {
  tokens: Token[];
  addToken: (token: Omit<Token, 'id'>) => void;
  removeToken: (id: string) => void;
  updateToken: (id: string, updates: Partial<Token>) => void;
  getToken: (id: string) => Token | undefined;
  getFeaturedTokens: () => Token[];
  getTrendingTokens: () => Token[];
  getAllTokensSortedByDate: () => Token[];
}

export const useTokensStore = create<TokensState>()(
  persist(
    (set, get) => ({
      tokens: [],
      
      addToken: (token) =>
        set((state) => ({
          tokens: [
            ...state.tokens,
            {
              ...token,
              id: token.symbol.replace('$', ''),
              tags: [...(token.tags || []), TOKEN_TAGS.GENERAL], 
              isVerified: false,
              isNew: true,
              listedAt: Date.now(),
              decimals: token.decimals || 9,
            },
          ],
        })),

      removeToken: (id) =>
        set((state) => ({
          tokens: state.tokens.filter((t) => t.id !== id),
        })),

      updateToken: (id, updates) =>
        set((state) => ({
          tokens: state.tokens.map((token) =>
            token.id === id 
              ? { 
                  ...token, 
                  ...updates,
                  tags: [...new Set([...(updates.tags || []), TOKEN_TAGS.GENERAL])] 
                } 
              : token
          ),
        })),

      getToken: (id) => {
        const state = get();
        return state.tokens.find(t => {
          const tokenId = t.id?.toLowerCase();
          const tokenSymbol = t.symbol?.replace?.('$', '')?.toLowerCase();
          const tokenCA = t.ca?.toLowerCase();
          const searchId = id?.toLowerCase();
          
          return tokenId === searchId || tokenSymbol === searchId || tokenCA === searchId;
        });
      },

      getFeaturedTokens: () => {
        const state = get();
        return state.tokens.filter(token =>
          token.tags?.includes(TOKEN_TAGS.FEATURED)
        );
      },

      getTrendingTokens: () => {
        const state = get();
        return state.tokens.filter(token => 
          token.tags?.includes(TOKEN_TAGS.TRENDING)
        );
      },

      getAllTokensSortedByDate: () => {
        const state = get();
        return [...state.tokens].sort((a, b) => {
          const aTime = a.listedAt || 0;
          const bTime = b.listedAt || 0;
          return bTime - aTime; 
        });
      },
    }),
    {
      name: 'tokens-storage',
    }
  )
);
