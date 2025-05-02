
import { getSocket } from "./socketService";

export const SendMessageClient = ({ message }: { message: string }): void => {
    const socket = getSocket();
    if (socket) {
        // Send Message
        socket.emit("user-message", {
            clientId: "123",
            text: message,

        }, (response: { status: string; message: string }) => {
            console.log("sent messages", response);
        });

    }
};

export const SendMessageAgent = ({ message, clientId }: { message: string, clientId: string }): void => {
    const socket = getSocket();
    if (socket) {
        // Send Message
        socket.emit("agent-message", {
            clientId: clientId,
            text: message,

        }, (response: { status: string; message: string }) => {
            console.log("sent messages", response);
        });

    }
};


