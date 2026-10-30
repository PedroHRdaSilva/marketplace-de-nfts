export type WalletNetwork = "ethereum" | "polygon" | "base";

export interface Wallet {
  id: string;
  label: string;
  address: string;
  network: WalletNetwork;
  isPrimary: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface WalletInput {
  label: string;
  address: string;
  network: WalletNetwork;
  isPrimary?: boolean;
}
