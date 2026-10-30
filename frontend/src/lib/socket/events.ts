export interface RealtimeEnvelope<TPayload> {
  id: string;
  type: string;
  version: number;
  occurredAt: string;
  payload: TPayload;
}

export interface NftUpdatedPayload {
  nftId: string;
  priceEth?: string;
  editionsAvailable?: number;
  updatedAt: string;
}

export interface OrderUpdatedPayload {
  orderId: string;
  status: "pending" | "confirmed" | "declined" | "failed";
  updatedAt: string;
}

export const SOCKET_EVENTS = {
  nftUpdated: "nft.updated",
  orderUpdated: "order.updated",
} as const;

export type SocketEventName = (typeof SOCKET_EVENTS)[keyof typeof SOCKET_EVENTS];
