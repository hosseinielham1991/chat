import { useEffect, useState } from "react";
import { getSocket } from "../services/socketService";
import { getSpecificConversation } from "../services/getSpecificConversationService";
import { ConversationType, MessageType } from "./useGetConversations";


const useGetSpecificConversation = ({ selectedClient }: { selectedClient: string | null }) => {
    const [conversation, setConversation] = useState<ConversationType[0] | null>(null);

    const socket = getSocket();

    useEffect(() => {
        if (!socket) return;
        if (selectedClient && selectedClient !== "")
            getSpecificConversation({ clientId: selectedClient }).then((data) => {
                if (data.success) {
                    setConversation(data.data!);
                } else {
                    console.error("Error fetching conversation: ", data.error);
                }
            }
            ).catch((error) => {
                console.error("Error fetching conversation: ", error);
            }
            );


    }, [socket, selectedClient]);

    const pushConversation = (message: MessageType) => {

        setConversation((prevValue) => {
            if (!prevValue) return null;
            return {
                ...prevValue,
                messages: [...prevValue.messages, message],
            };
        })
    }

    return { conversation ,pushConversation};
};

export default useGetSpecificConversation;
