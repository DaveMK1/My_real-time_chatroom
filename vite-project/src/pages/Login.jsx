import { useEffect } from "react";
import { UserAuth } from "../context/Auth_Context";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { currentUser, handleGoogleLogin } = UserAuth();  // Use handleGoogleLogin instead of signinWithGoogle
  const navigate = useNavigate();

  // Redirect to chat if user is already logged in
  useEffect(() => {
    if (currentUser) {
      navigate("/chat");  // Redirect to chat page
    }
  }, [currentUser, navigate]);

  const handleLogin = async () => {
    try {
      await handleGoogleLogin();  // Call the new login method
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Welcome aboard! 🚀</h1>
          <p className="py-6">
            Connect, chat, and share experiences with a vibrant community—all in one space!
          </p>
          <button onClick={handleLogin} className="btn btn-primary">
            Login With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
