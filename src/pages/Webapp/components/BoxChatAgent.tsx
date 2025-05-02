import TextBox from "./TextBox";
import { CardMessage } from "../../../components/CardMessage";
import { WebappContext } from "../Webapp";
import { useContext, useEffect, useRef } from "react";
import useGetSpecificConversation from "../../../hooks/useGetSpecificConversation";

const BoxChatAgent = () => {

    return <div className="w-full h-full ">
        <div className="flex flex-col h-full">
            <BoxChatAgent.conversation ></BoxChatAgent.conversation >
            <BoxChatAgent.footer ></BoxChatAgent.footer >
        </div>
    </div>
}


BoxChatAgent.conversation = () => {

    const { selectedClient } = useContext(WebappContext);

    const { conversation } = useGetSpecificConversation({ selectedClient: selectedClient })

    const bottomRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [conversation?.messages]);

    return <div className="flex-1 overflow-y-auto px-8 py-3 gap-2 flex flex-col">
        {selectedClient !== "" ? conversation?.messages.map((item, index) => {
            return <CardMessage key={item.id + index} variant={item.isFromAgent ? "agent" : "client"} message={item.text} ></CardMessage>
        }) :
            <div className="flex w-full h-full flex-row items-center justify-center"><label>گفتگویی انتخاب نشده است</label></div>}
        <div ref={bottomRef} />
    </div>

}


BoxChatAgent.footer = () => {
    return <div className=" w-full px-4 py-4">
        <TextBox />
    </div>
}


export default BoxChatAgent