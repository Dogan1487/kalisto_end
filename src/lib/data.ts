export interface TokenData {
  id: string;
  name: string;
  symbol: string;
  image: string;
  price?: number;
  change?: number;
  marketCap?: string;
  volume?: string;
  emoji?: string;
  ca?: string; // Contract Address
  isVerified?: boolean;
  verified?: boolean;
  isNew?: boolean;
  isStarter?: boolean;
  category?: string;
  age?: string;
  supply?: string;
  liquidity?: string;
  description?: string;
  tags?: string[];
  network?: string;
  listedAt?: number;
  socialLinks?: {
    website?: string;
    twitter?: string;
    telegram?: string;
    discord?: string;
  };
}

export const FEATURED_COINS: TokenData[] = [];

export const TRENDING_COINS: TokenData[] = [];