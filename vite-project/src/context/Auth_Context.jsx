import { createContext, useState, useContext } from "react"
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../firebase";


// create
const Auth_Context = createContext();
// Provider
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // signin
  const signinWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider)
  }


  const value = {
    currentUser,
    setCurrentUser,
    signinWithGoogle
  }

  return (
    <Auth_Context.Provider value={value}>
      {children}
    </Auth_Context.Provider>
  )
}

export const UserAuth = () => {
  return useContext(Auth_Context);
}
