import { useEffect, useState } from "react";
import { getSocket } from "../services/socketService";
import { MessageType } from "./useGetConversations";
const useGetNewMessage = () => {

    const socket = getSocket();
    const [message, setMessage] = useState<MessageType>({} as MessageType);


    useEffect(() => {
        if (!socket) return;


        socket.on('message', (message: MessageType) => {
            setMessage(message)
        });



    }, [socket]);

    return { message };
};

export default useGetNewMessage;
