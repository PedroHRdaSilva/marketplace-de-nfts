import { io, type Socket } from "socket.io-client";

import { getAccessToken } from "@/lib/api/token-storage";
import { env } from "@/lib/env";

let socket: Socket | null = null;

export function getSocket(): Socket {
  if (socket) return socket;

  const url = env.socketUrl || window.location.origin;

  socket = io(url, {
    path: env.socketPath,
    autoConnect: false,
    transports: env.mswEnabled ? ["websocket"] : ["websocket", "polling"],
    reconnection: true,
    reconnectionDelay: 500,
    reconnectionDelayMax: 5_000,
    auth: (callback) => callback({ token: getAccessToken() }),
  });

  return socket;
}

export function resetSocket(): void {
  if (!socket) return;
  socket.removeAllListeners();
  socket.disconnect();
  socket = null;
}
