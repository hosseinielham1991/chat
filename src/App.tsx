
import RootLayout from './layouts/RootLayout'
import './App.css'
import { Route, Routes } from "react-router-dom";
import Webapp from './pages/Webapp/Webapp';
import Client from './pages/Client/Client';
import { Toaster } from 'react-hot-toast';
function App() {

  return <>
    <Toaster />
    <RootLayout>
      <Routes>
        {/* <Route path="/" element={<Navigate to={"/webapp"}></Navigate>} /> */}
        <Route path="/client" element={<Client />} />
        <Route path="/webapp" element={<Webapp />} />
      </Routes>
    </RootLayout></>
}

export default App
