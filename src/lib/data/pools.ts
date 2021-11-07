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
    borrows: ["USDC", "MATIC"],
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

export const BINANCE_POOLS: Pool[] = [
  {
    assets: ["CAKE", "WBNB"],
    borrows: ["WBNB"],
  },
  {
    assets: ["WBNB", "BUSD"],
    borrows: ["WBNB", "BUSD"],
  },
  {
    assets: ["WBNB", "ADA"],
    borrows: ["WBNB"],
  },
  {
    assets: ["WBNB", "DOT"],
    borrows: ["WBNB"],
  },
  {
    assets: ["WBNB", "LINK"],
    borrows: ["WBNB"],
  },
  {
    assets: ["BUSD", "USDT"],
    borrows: ["BUSD"],
  },
  {
    assets: ["WBNB", "RAMP"],
    borrows: ["WBNB"],
  },
  {
    assets: ["WBNB", "AXS"],
    borrows: ["WBNB"],
  },
  {
    assets: ["WBNB", "XVS"],
    borrows: ["WBNB"],
  },
  {
    assets: ["WBNB", "ETH"],
    borrows: ["WBNB", "ETH"],
  },
  {
    assets: ["WBNB", "BTCB"],
    borrows: ["WBNB", "BTCB"],
  },
  {
    assets: ["WBNB", "USDT"],
    borrows: ["WBNB"],
  },
  {
    assets: ["WBNB", "XRP"],
    borrows: ["WBNB"],
  },
  {
    assets: ["WBNB", "UNI"],
    borrows: ["WBNB"],
  },
  {
    assets: ["WBNB", "INJ"],
    borrows: ["WBNB"],
  },
  {
    assets: ["WBNB", "SXP"],
    borrows: ["WBNB"],
  },
  {
    assets: ["WBNB", "LINA"],
    borrows: ["WBNB"],
  },
  {
    assets: ["WBNB", "DODO"],
    borrows: ["WBNB"],
  },
  {
    assets: ["ETH", "SUSHI"],
    borrows: ["ETH"],
  },
  {
    assets: ["WBNB", "BIFI"],
    borrows: ["WBNB"],
  },
  {
    assets: ["ALPACA", "BUSD"],
    borrows: ["BUSD"],
  },
  {
    assets: ["BTCB", "BUSD"],
    borrows: ["BTCB", "BUSD"],
  },
  {
    assets: ["DOGE", "WBNB"],
    borrows: ["WBNB"],
  },
  {
    assets: ["CAKE", "BUSD"],
    borrows: ["BUSD"],
  },
  {
    assets: ["ETH", "BTCB"],
    borrows: ["BTCB", "ETH"],
  },
  {
    assets: ["ETH", "USDC"],
    borrows: ["ETH"],
  },
  {
    assets: ["MASK", "WBNB"],
    borrows: ["WBNB"],
  },
  {
    assets: ["TRX", "BUSD"],
    borrows: ["BUSD"],
  },
];

export const ALL_TWO_SIDED_POOLS: Pool[] = [
  ...POLYGON_POOLS,
  ...AVALANCHE_POOLS,
  ...FANTOM_POOLS,
  ...BINANCE_POOLS,
].filter((p) => p.assets.length > 1 && p.borrows.length > 1);
