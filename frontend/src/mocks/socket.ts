import { toSocketIo } from "@mswjs/socket.io-binding";
import { ws } from "msw";

import { SOCKET_EVENTS } from "@/lib/socket/events";

export const socketMock = ws.link("*/socket.io/*");

export const socketHandlers = [
  socketMock.addEventListener("connection", (connection) => {
    const io = toSocketIo(connection);

    io.client.on(SOCKET_EVENTS.nftUpdated, () => undefined);

    io.client.on(SOCKET_EVENTS.orderUpdated, () => undefined);
  }),
];
