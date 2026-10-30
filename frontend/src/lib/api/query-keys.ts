import type { NftListQuery } from "@/contracts";
import type { QuoteInput } from "@/contracts";

export const queryKeys = {
  session: ["session"] as const,
  system: {
    health: ["system", "health"] as const,
  },
  nfts: {
    all: ["nfts"] as const,
    list: (query: NftListQuery) => ["nfts", "list", query] as const,
    detail: (nftId: string) => ["nfts", "detail", nftId] as const,
  },
  favorites: (userId: string) => ["favorites", userId] as const,
  cart: (userId: string) => ["cart", userId] as const,
  quote: (input: QuoteInput) => ["quote", input] as const,
  orders: {
    all: ["orders"] as const,
    detail: (orderId: string) => ["orders", "detail", orderId] as const,
  },
  profile: (userId: string) => ["profile", userId] as const,
  wallets: (userId: string) => ["wallets", userId] as const,
};
