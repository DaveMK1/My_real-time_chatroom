// Import the Chatbox and Send_message components
import Chatbox from "../components/Chatbox"
import Send_message from "../components/Send_message"

// The ChatRoom component is the main chat interface, displaying both the chatbox and the send message input
const ChatRoom = () => {
  return (
    <div>
      {/* Chatbox displays all chat messages */}
      <Chatbox />
      
      {/* Send_message allows the user to type and send new messages */}
      <Send_message />
    </div>
  )
}

export default ChatRoom
