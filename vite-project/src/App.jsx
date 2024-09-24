// Import necessary modules from 'react-router-dom' for routing
import { Route, Routes } from "react-router-dom";
// Import components: Navbar, ChatRoom, Login, PrivateRoute, and AuthProvider for the app's main functionality
import Navbar from "./components/Navbar";
import ChatRoom from "./pages/ChatRoom";
import Login from "./pages/Login";
import { PrivateRoute } from "./routes/PrivateRoute";
import { AuthProvider } from "./context/Auth_Context";

function App() {
  // The main App component renders the Navbar and handles routing using 'Routes'.
  // The AuthProvider wraps the app to provide authentication context to the entire app.
  return (
    <AuthProvider>
      {/* Navbar component displayed on all pages */}
      <Navbar />
      {/* Define application routes */}
      <Routes>
        {/* Route for Login page, accessible at '/' */}
        <Route path="/" element={<Login />} />
        {/* PrivateRoute is used to protect the chat route, rendering ChatRoom only for authenticated users */}
        <Route path="/chat" element={<PrivateRoute><ChatRoom /></PrivateRoute>} />
      </Routes>
    </AuthProvider>
  )
}

export default App
