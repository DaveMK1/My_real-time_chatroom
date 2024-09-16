import { UserAuth } from "../context/Auth_Context";

const Login = () => {
  const { currentUser, signinWithGoogle } = UserAuth();
  console.log(currentUser)

  const handleLogin = async () => {
    try {
      await signinWithGoogle();
    } catch(error) {
      console.log(error)
    }
  }

  return (
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Welcome aboard! 🚀</h1>
      <p className="py-6">
        Connect, chat, and share experiences with a vibrant community—all in one space!
      </p>
      <button onClick={handleLogin} className="btn btn-primary">Login With Google</button>
    </div>
  </div>
</div>
  );
};

export default Login;
