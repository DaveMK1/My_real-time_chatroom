// Import necessary hooks and context for authentication and navigation
import { useEffect } from "react";
import { UserAuth } from "../context/Auth_Context";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // Get the current user and Google login function from the Auth context
  const { currentUser, handleGoogleLogin } = UserAuth();
  const navigate = useNavigate();

  // Redirect the user to the chat room if they are already logged in
  useEffect(() => {
    if (currentUser) {
      navigate("/chat");  // Automatically navigate to the chat page
    }
  }, [currentUser, navigate]);  // Dependency array: triggers when currentUser or navigate changes

  // Handle login with Google when the button is clicked
  const handleLogin = async () => {
    try {
      await handleGoogleLogin();  // Trigger Google login
    } catch (error) {
      console.log(error);  // Log any errors during login
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      {/* Centered content area with a welcoming message */}
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Welcome aboard! 🚀</h1>
          <p className="py-6">
            Connect, chat, and share experiences with a vibrant community—all in one space!
          </p>
          
          {/* Button to initiate Google login */}
          <button onClick={handleLogin} className="btn btn-primary">
            Login With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
