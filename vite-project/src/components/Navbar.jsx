// Import the authentication context to access the current user and logout functionality
import { UserAuth } from "../context/Auth_Context";

const Navbar = () => {
  const { currentUser, logout } = UserAuth(); // Get current user info and logout function

  // Handle logout process
  const handleLogout = async () => {
    try {
      await logout(); // Trigger Firebase logout
    } catch (error) {
      console.log(error); // Log any errors during logout
    }
  };

  return (
    <div className="navbar fixed z-10 bg-primary text-primary-content">
      <div className="containerWrap flex justify-between">
        {/* Application title */}
        <a className="btn btn-ghost normal-case text-xl">My Real-Time Chatroom</a>
        {/* Show logout button if the user is logged in */}
        {currentUser ? <button onClick={handleLogout}>Logout</button> : ""}
      </div>
    </div>
  );
};

export default Navbar
