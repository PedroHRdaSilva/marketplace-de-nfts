export interface CartItemNft {
  id: string;
  name: string;
  imageUrl: string;
  collectionName: string;
  priceEth: string;
  editionsAvailable: number;
  version: number;
}

export interface CartItem {
  id: string;
  nftId: string;
  quantity: number;
  unitPriceEth: string;
  nft: CartItemNft;
  addedAt: string;
  updatedAt: string;
}

export interface Cart {
  items: CartItem[];
  updatedAt: string;
}

export interface AddCartItemInput {
  nftId: string;
  quantity: number;
}

export interface UpdateCartItemInput {
  quantity: number;
}
