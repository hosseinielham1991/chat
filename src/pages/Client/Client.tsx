
import useSocket from "../../hooks/useSocket"
import Layout from "./Layout"
import BoxChatFlow from "./components/BoxChatFlow";

const Client = () => {
    const { } = useSocket({ type: "CLIENT" });


    return <Layout boxChat={<BoxChatFlow></BoxChatFlow>}></Layout>
}

export default Client