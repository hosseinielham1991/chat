import TextBox from "./TextBox";
import { Avatar } from "../../../components/Avatar";
import { CardMessage } from "../../../components/CardMessage";
import useGetSpecificConversation from "../../../hooks/useGetSpecificConversation";
import { registerClient } from "../../../services/registerService";
import useGetNewMessage from "../../../hooks/useGetNewMessage";
import { useEffect, useRef } from "react";
const BoxChatFlow = () => {

    return <div className="w-[366px] absolute h-[528px] left-[20px] bottom-[20px] bg-box rounded-xl border border-seprator max-h-[calc(100%-40px)]">
        <div className="flex flex-col h-full">
            <BoxChatFlow.header ></BoxChatFlow.header >
            <BoxChatFlow.conversation ></BoxChatFlow.conversation >
            <BoxChatFlow.footer ></BoxChatFlow.footer >
        </div>
    </div>
}

BoxChatFlow.header = () => {
    return <div className="h-16 bg-primary rounded-t-xl p-2 flex flex-row justify-enter items-center gap-2">
        <Avatar className="bg-primary-light border-primary-foreground border"></Avatar>
        <div className="flex-1 flex flex-col items-start items-center text-sm">
            <label className="text-primary-foreground">پشتیبانی آنلاین</label>
            <label className="text-primary-foreground/80">پاسخگوی سوالات شما هستیم</label>
        </div>
    </div>
}


BoxChatFlow.conversation = () => {
    registerClient({ clientId: "123", name: "Elham" });
    const { conversation, pushConversation } = useGetSpecificConversation({ selectedClient: "123" })

    const { message } = useGetNewMessage();

    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setTimeout(() => {
            bottomRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 500);
    
    }, [conversation?.messages,message]);

    useEffect(() => {
        pushConversation(message);
    }, [message])

    return conversation && conversation.messages && <div className="flex-1 overflow-y-auto px-2 py-3 gap-2 flex flex-col">
        {conversation?.messages.map((item, index) => {
            return <CardMessage  avatar={true} time={item.timestamp} key={item.id + index} variant={item.isFromAgent ? "agent" : "client"} message={item.text} ></CardMessage>
        })}
        <div ref={bottomRef} />
    </div>
}


BoxChatFlow.footer = () => {
    return <div className="h-14 w-full px-4">
        <TextBox />
    </div>
}


export default BoxChatFlow