// Import necessary modules and hooks from React and Firebase
import { createContext, useState, useContext, useEffect } from "react";
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase"; // Import the Firebase Auth instance

// Create a new context to manage authentication state across the app
const Auth_Context = createContext();

// AuthProvider component to wrap around the app and provide authentication context
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null); // State to hold the current logged-in user
  const [loading, setLoading] = useState(true); // State to manage loading while checking auth state

  // Function to handle Google sign-in using Firebase Authentication
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider(); // Initialize Google auth provider
    try {
      await signInWithPopup(auth, provider); // Open Google sign-in popup
    } catch (error) {
      console.log(error); // Log any errors that occur during sign-in
    }
  };

  // Function to handle user sign-out using Firebase Authentication
  const logout = () => signOut(auth); // Firebase method to sign out the current user

  // Values provided by the AuthProvider, accessible in any component through context
  const value = {
    currentUser, // Currently logged-in user
    setCurrentUser, // Setter for current user
    handleGoogleLogin, // Function to log in with Google
    logout // Function to log out
  };

  // useEffect to monitor authentication state changes (login/logout)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user); // Set user in state when logged in
      } else {
        setCurrentUser(null); // Clear user from state when logged out
      }
      setLoading(false); // Set loading to false once auth state is determined
    });

    // Cleanup function to unsubscribe from the listener when the component unmounts
    return unsubscribe;
  }, []);

  return (
    // Provide the authentication context to the entire app, once loading is finished
    <Auth_Context.Provider value={value}>
      {!loading && children} {/* Render children only when loading is complete */}
    </Auth_Context.Provider>
  );
};

// Custom hook to access the Auth context in any component
export const UserAuth = () => {
  return useContext(Auth_Context);
};
