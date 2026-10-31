import type { LucideIcon } from "lucide-react";

export type CatalogTab = "todos" | "em-alta" | "recentes";

export type CatalogSort = "populares" | "recentes" | "preco-asc" | "preco-desc";

export interface CatalogNft {
  id: string;
  name: string;
  collection: string;
  priceEth: string;
  categoryId: string;
  networkId: string;
  createdAt: string;
  trendingScore: number;
}

export interface JournalEntry {
  id: string;
  nftId: string;
  publishedAt: string;
  readingTime: number;
  title: string;
  excerpt: string;
}

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface PromoCard {
  id: string;
  title: string;
  description: string;
  ctaLabel: string;
  nftId: string;
}
