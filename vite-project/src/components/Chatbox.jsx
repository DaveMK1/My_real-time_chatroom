import Message from "./Message";
import { collection, query, onSnapshot, orderBy, limit } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { db } from "../firebase";

const ChatBox = () => {
  const messagesEndRef = useRef();
  const [messages, setMessages] = useState([]);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt"),
      limit(50)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });

    return () => unsubscribe();
  }, []);

  // Function to clear messages locally
  const clearMessages = () => {
    setMessages([]); // Clear messages locally
  };

  return (
    <div>
      <button onClick={clearMessages} className="bg-red-500 text-white px-3 py-1 rounded-lg mb-4">
        Clear Chatbox
      </button>

      <div className="pb-44 pt-20 containerWrap overflow-y-auto max-h-[calc(100vh-120px)]">
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef}></div>
      </div>
    </div>
  );
};

export default ChatBox;
