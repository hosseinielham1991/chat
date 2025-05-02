import { useEffect, useState } from "react";
import { getSocket } from "../services/socketService";
export type MessageType = {
    id: string;
    text: string;
    clientId: string;
    timestamp: string;
    isFromAgent: boolean;
};

export type ConversationType = {
    clientId: string;
    messages: MessageType[];
    unread: number;
}[];

export type ClientsType = {
    id: string;
    name: string;
}[];

const useGetConversations = () => {
    const [conversations, setConversations] = useState<ConversationType>([]);
    const [clients, setClients] = useState<ClientsType>([]);
    const socket = getSocket();


    useEffect(() => {
        if (!socket) return;

        socket.on("existing-conversations", ({ conversations, clients }: { conversations: ConversationType, clients: ClientsType }) => {
            setConversations(conversations);
            setClients(clients);
        });

    }, [socket]);

    return { conversations, clients };
};

export default useGetConversations;
