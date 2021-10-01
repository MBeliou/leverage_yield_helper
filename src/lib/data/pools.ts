import type { Pool } from "../models/pool.interface";

export const POLYGON_POOLS: Pool[] = [
  {
    assets: ["WUSD", "USDC"],
    borrows: ["USDC"],
  },
  {
    assets: ["IS3USD"],
    borrows: ["USDC"],
  },
  {
    assets: ["USDT", "USDC"],
    borrows: ["USDC"],
  },
  {
    assets: ["UST", "USDT"],
    borrows: ["USDC"],
  },
  {
    assets: ["WBTC", "USDC"],
    borrows: ["USDC", "WBTC"],
  },
  {
    assets: ["ETH", "USDC"],
    borrows: ["USDC", "ETH"],
  },
  {
    assets: ["WBTC", "ETH"],
    borrows: ["ETH", "WBTC"],
  },
  {
    assets: ["MATIC", "USDC"],
    borrows: ["USDC", "WBTC"],
  },
];

export const AVALANCHE_POOLS: Pool[] = [
  {
    assets: ["USDT", "DAI"],
    borrows: ["USDT"],
  },
  {
    assets: ["WAVAX", "USDT"],
    borrows: ["USDT", "WAVAX"],
  },
  {
    assets: ["USDT", "WBTC"],
    borrows: ["USDT", "WBTC"],
  },
  {
    assets: ["WETH", "USDT"],
    borrows: ["USDT", "WETH"],
  },
];

// TODO: add remaining one-sided ftm pools
export const FANTOM_POOLS: Pool[] = [
  {
    assets: ["IS3USD"],
    borrows: ["USDC"],
  },
  {
    assets: ["WFTM", "WBTC"],
    borrows: ["WBTC", "WFTM"],
  },
  {
    assets: ["WFTM", "ETH"],
    borrows: ["ETH", "WFTM"],
  },
  {
    assets: ["WFTM", "USDC"],
    borrows: ["USDC", "WFTM"],
  },
];

export const ALL_TWO_SIDED_POOLS: Pool[] = [
  ...POLYGON_POOLS,
  ...AVALANCHE_POOLS,
  ...FANTOM_POOLS,
].filter((p) => p.assets.length > 1 && p.borrows.length > 1);
