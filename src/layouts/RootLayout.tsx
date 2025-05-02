
const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return <div className="flex flex-col h-screen w-screen bg-gray-100 dir-rtl">
        {children}
    </div>;
}

export default RootLayout