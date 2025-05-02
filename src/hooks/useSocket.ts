import { useEffect, useState } from "react";
import { connectSocket } from "../services/socketService";
import { registerAgent, registerClient } from "../services/registerService";
import { Socket } from "socket.io-client";

const useSocket = ({ type }: { type: "AGENT" | "CLIENT" }) => {

  const [socketInstance, setSocketInstance] = useState<Socket | null>(null);

  useEffect(() => {
    const socket = connectSocket();

    if (socket.connected) {
      console.log("Already connected. Skipping setup.");
      return;
    }

    setSocketInstance(socket)

    const handleConnect = () => {
      console.log("Socket connected");

      if (type === "AGENT"){
        registerAgent();
      }
      else
        registerClient({ clientId: "123", name: "Elham" });
    };

    const handleReconnect = () => {
      if (!socket.connected) {
        socket.connect();
      }
    };

    const handleError = (err: unknown) => {
      console.error("Socket error:", err);
      handleReconnect();
    };

    const handleDisconnect = () => {
      console.warn("Socket disconnected, retrying...");

      handleReconnect();
    };

    socket.on("connect", handleConnect);
    socket.on("error", handleError);
    socket.on("disconnect", handleDisconnect);

    return () => {
      socket.off("connect", handleConnect);
      socket.off("error", handleError);
      socket.off("disconnect", handleDisconnect);
    };
  }, []);

  return { socketInstance };

};

export default useSocket;
