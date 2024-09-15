import { createContext, useState, useContext } from "react"


// create
const Auth_Context = createContext();
// Provider
export const AuthProvider = ({ children }) => {
const [currentUser, setCurrentUser] = useState(null);

const value = {
currentUser,
setCurrentUser
}

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  (
}

export const UserAuth = () => {
  return useContext(AuthContext);
}
