import BoxChatAgent from "./components/BoxChatAgent"
import { ClientsType } from "../../hooks/useGetConversations"
import { WebappContext } from "./Webapp"
import { useContext } from "react"
const Layout = () => {
    return <div className="bg-backend  flex flex-row h-screen w-screen">
        <Layout.List ></Layout.List>
        <Layout.BoxChat></Layout.BoxChat>
    </div >

}

Layout.List = () => {

    const { clients, setSelectedClient } = useContext(WebappContext);

    const onSelectClient = (id: string) => {
        setSelectedClient(id);
    }

    return <div className="bg-white w-[236px] overflow-y-auto border-l border-l-seprator">
        <div className="h-[47px] flex flex-col border-b border-b-seprator item-center justify-center">
            <label className="d-block flex item-center justify-center flex-row">لیست کاربران</label>
        </div>
        <div>
            {
                clients.map((item: ClientsType[0]) => <div onClick={() => { onSelectClient(item.id) }} key={item.name + item.id} className="flex flex-row h-12 border-b border-seprator items-center px-4 cursor-pointer">
                    <div> <label>{item.name}</label></div>
                    <div> <label>:{item.id}</label></div>
                </div>)
            }
        </div>
    </div>
}

Layout.BoxChat = () => {
    return <div className="flex-1 overflow-y-auto">
        <BoxChatAgent></BoxChatAgent>
    </div>
}

export default Layout