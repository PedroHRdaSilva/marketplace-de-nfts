import type { QuoteCoupon, QuoteItem } from "./quote";
import type { WalletNetwork } from "./wallet";

export type OrderStatus = "pending" | "confirmed" | "declined" | "failed";

export interface OrderTotals {
  subtotalEth: string;
  discountEth: string;
  networkFeeEth: string;
  totalEth: string;
}

export interface OrderWallet {
  id: string;
  label: string;
  address: string;
  network: WalletNetwork;
}

export interface OrderTransaction {
  hash: string;
  network: WalletNetwork;
  explorerUrl: string;
}

export interface Order {
  id: string;
  status: OrderStatus;
  items: QuoteItem[];
  totals: OrderTotals;
  coupon: QuoteCoupon | null;
  wallet: OrderWallet | null;
  transaction: OrderTransaction | null;
  createdAt: string;
  updatedAt: string;
  version: number;
}

export interface CreateOrderInput {
  quoteId: string;
  walletId: string;
  network: WalletNetwork;
}
