import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ChatRoom from "./pages/ChatRoom";
import Login from "./pages/Login";

function App() {

  return (
    <>
     <Navbar />
     <Routes>
       <Route path="/" element={<Login />} />
       <Route path="/chat" element={<ChatRoom />} />
     </Routes>
    </>
  )
}

export default App
