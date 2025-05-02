// src/services/socketService.ts
import { io, Socket } from "socket.io-client";

const SERVER_URL = "http://localhost:2000";  

let socket: Socket | null = null;

export const connectSocket = (): Socket => {
  if (!socket) {
    socket = io(SERVER_URL, { autoConnect: true });
  }
  return socket;
};

export const disconnectSocket = (): void => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};

export const getSocket = (): Socket | null => socket;


