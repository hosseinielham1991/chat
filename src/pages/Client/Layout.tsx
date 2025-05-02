
const Layout = ({ boxChat }: { boxChat: React.ReactNode }) => {
    return <div className="bg-backend  flex flex-row h-screen w-screen">
        <Layout.BoxChat>{boxChat}</Layout.BoxChat>
    </div >

}

Layout.BoxChat = ({ children }: { children: React.ReactNode }) => {
    return <div className="flex-1 overflow-y-auto">
        {children}
    </div>
}

export default Layout