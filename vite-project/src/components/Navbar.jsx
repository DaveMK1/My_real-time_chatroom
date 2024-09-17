import { UserAuth } from "../context/Auth_Context"

const Navbar = () => {
  const { currentUser, logout } = UserAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <div className="navbar bg-primary text-primary-content">
<div className="containerWrap flex justify-between">
  <a className="btn btn-ghost text-xl">My Real-Time Chatroom</a>
  {currentUser ? <button onClick={handleLogout}>Logout</button> : ""}
</div>
    </div>
  )
}

export default Navbar
