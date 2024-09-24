// Import Navigate from react-router-dom for redirecting users
import { Navigate } from "react-router-dom";
// Import the UserAuth context to check if the user is authenticated
import { UserAuth } from "../context/Auth_Context";

// PrivateRoute component to protect routes that require authentication
export const PrivateRoute = ({ children }) => {
  // Get the current authenticated user from the Auth context
  const { currentUser } = UserAuth();

  // If there is no logged-in user, redirect to the login page ("/")
  if (!currentUser) {
    return <Navigate to="/" replace={true} />; // Redirect to login and replace history entry
  }

  // If the user is logged in, render the child components (protected content)
  return children;
};
