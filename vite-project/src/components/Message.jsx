// Import the authentication context to access the current user
import { UserAuth } from "../context/Auth_Context";

const Message = ({ message }) => {
  const { currentUser } = UserAuth(); // Get the current logged-in user

  return (
    <div>
      {/* Conditional class for message alignment (right for sender, left for others) */}
      <div className={`chat ${message.uid === currentUser.uid ? "chat-end" : "chat-start"}`}>
        <div className="chat-image avatar">
          {/* Display the user's avatar image */}
          <div className="w-10 rounded-full">
            <img src={message.avatar} alt={message.name} /> {/* Added alt attribute for accessibility */}
          </div>
        </div>
        <div className="chat-header">
          {/* Display the name of the message sender */}
          {message.name}
        </div>
        <div className="chat-bubble">
          {/* Display the message text */}
          {message.text}
        </div>
      </div>
    </div>
  );
};

export default Message;
