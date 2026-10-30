import type { WalletNetwork } from "./wallet";

export interface QuoteItem {
  nftId: string;
  name: string;
  quantity: number;
  unitPriceEth: string;
  lineTotalEth: string;
}

export interface QuoteCoupon {
  code: string;
  discountEth: string;
}

export interface Quote {
  id: string;
  items: QuoteItem[];
  subtotalEth: string;
  discountEth: string;
  networkFeeEth: string;
  totalEth: string;
  coupon: QuoteCoupon | null;
  walletId: string | null;
  network: WalletNetwork | null;
  issuedAt: string;
  expiresAt: string;
  priceVersion: number;
}

export interface QuoteInput {
  items: Array<{ nftId: string; quantity: number }>;
  couponCode?: string | null;
  walletId?: string | null;
  network?: WalletNetwork | null;
}
