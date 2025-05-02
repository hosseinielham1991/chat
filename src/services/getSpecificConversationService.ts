

import { getSocket } from "./socketService";
import { MessageType } from "../hooks/useGetConversations";
type Response = {
    success: boolean;
    data?: {
        clientId: string;
        messages: MessageType[];
        unread: number;
    };
    error?: string;
}

export const getSpecificConversation = ({ clientId }: { clientId: string }): Promise<Response> => {
    const socket = getSocket();


    return new Promise((resolve, reject) => {
        if (socket) {
            // Send Message
            socket.emit('get-client-conversations',
                {
                    clientId: clientId
                },
                (response: Response) => {
                    resolve(response);
                }
            );

        }
    });


};
