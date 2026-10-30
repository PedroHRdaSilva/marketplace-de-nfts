export type NftRarity = "common" | "rare" | "epic" | "legendary";

export type NftSort = "recent" | "price-asc" | "price-desc" | "name-asc" | "name-desc";

export interface NftCollection {
  id: string;
  name: string;
}

export interface NftCreator {
  id: string;
  name: string;
  avatarUrl: string | null;
}

export interface Nft {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  collection: NftCollection;
  creator: NftCreator;
  priceEth: string;
  editionsTotal: number;
  editionsAvailable: number;
  rarity: NftRarity;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  version: number;
}

export interface NftListQuery {
  search?: string;
  collectionId?: string;
  rarity?: NftRarity[];
  minPriceEth?: string;
  maxPriceEth?: string;
  sort?: NftSort;
  page: number;
  pageSize: number;
}
