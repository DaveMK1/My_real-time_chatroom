import { createContext, useState, useContext, useEffect } from "react";
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

const Auth_Context = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Google sign-in
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
    }
  };
  
  // signout
  const logout = () => signOut(auth);

  const value = {
    currentUser,
    setCurrentUser,
    handleGoogleLogin,
    logout
  };

  // Set currentUser when authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);  // Clear the current user when logged out
      }
      setLoading(false)
    });

    return unsubscribe;
  }, []);

  return (
    <Auth_Context.Provider value={value}>
      {!loading && children}
    </Auth_Context.Provider>
  );
};

export const UserAuth = () => {
  return useContext(Auth_Context);
};
