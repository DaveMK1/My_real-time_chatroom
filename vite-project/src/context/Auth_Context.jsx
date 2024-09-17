import { createContext, useState, useContext, useEffect } from "react";
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const Auth_Context = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // Google sign-in
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);  // Use signInWithPopup instead of signInWithRedirect
    } catch (error) {
      console.log(error);
    }
  };

  const value = {
    currentUser,
    setCurrentUser,
    handleGoogleLogin,  // Update to new method name
  };

  // Set currentUser when authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);  // Update the current user state
      } else {
        setCurrentUser(null);  // Clear the current user when logged out
      }
    });

    return unsubscribe;
  }, []);

  return (
    <Auth_Context.Provider value={value}>
      {children}
    </Auth_Context.Provider>
  );
};

export const UserAuth = () => {
  return useContext(Auth_Context);
};
