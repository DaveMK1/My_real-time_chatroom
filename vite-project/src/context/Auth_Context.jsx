import { createContext, useState, useContext } from "react"


// create
const Auth_Context = createContext();
// Provider
export const AuthProvider = ({ children }) => {
const [currentUser, setCurrentUser] = useState("dave");

const value = {
currentUser,
setCurrentUser
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
