
import { getSocket } from "./socketService";

export const registerAgent = (): void => {
    const socket = getSocket();
    if (socket) {
        socket.emit("register-agent", {});

    }
};



export const registerClient = ({ clientId, name }: { clientId: string, name: string }): void => {
    const socket = getSocket();
    if (socket) {
        socket.emit("register-user", {
            clientId: clientId,
            name: name,
        });
    }
};
