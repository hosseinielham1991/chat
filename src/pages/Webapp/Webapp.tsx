
import useSocket from "../../hooks/useSocket"
import Layout from "./Layout"
import useGetConversations from "../../hooks/useGetConversations"
import { createContext, useEffect, useState } from "react"
import { ClientsType, ConversationType } from "../../hooks/useGetConversations"
type WebappContextType = {
    selectedClient: string | null;
    setSelectedClient: React.Dispatch<React.SetStateAction<string>>
    clients:ClientsType,
    conversations:ConversationType
} 
export const WebappContext = createContext({} as WebappContextType);


const Webapp = () => {

    const { } = useSocket({ type: "AGENT" });
    const [selectedClient, setSelectedClient] = useState<string>("")
    const { conversations, clients } = useGetConversations();

    useEffect(() => {
        console.log("Conversations: ", conversations);
        console.log("clients: ", clients);
    }
        , [conversations, clients])

    return <WebappContext.Provider value={{ conversations, clients, selectedClient, setSelectedClient }}>
        <Layout ></Layout>
    </WebappContext.Provider>


}

export default Webapp