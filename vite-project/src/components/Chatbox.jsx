// Import necessary Firebase functions for Firestore querying and real-time updates
import { collection, query, onSnapshot, orderBy, limit } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { db } from "../firebase"; // Firestore instance

const ChatBox = () => {
  const messagesEndRef = useRef(); // Ref to automatically scroll to the bottom of the chat
  const [messages, setMessages] = useState([]); // State to hold chat messages

  // Function to scroll to the bottom of the chat when new messages are added
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // Trigger scroll-to-bottom behavior whenever messages are updated
  useEffect(scrollToBottom, [messages]);

  // Use Firestore to get real-time updates of the latest 50 messages
  useEffect(() => {
    const q = query(
      collection(db, "messages"), // Reference to the "messages" collection
      orderBy("createdAt"), // Order by the 'createdAt' timestamp
      limit(50) // Limit to the latest 50 messages
    );
    
    // Subscribe to real-time updates on the messages collection
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id }); // Extract data and add the message id
      });
      setMessages(messages); // Update state with new messages
    });

    // Cleanup function to unsubscribe from updates when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="pb-44 pt-20 containerWrap overflow-y-auto max-h-[calc(100vh-120px)]">
      {/* Render each message using the Message component */}
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
      {/* Empty div to scroll to the bottom of the chat */}
      <div ref={messagesEndRef}></div>
    </div>
  );
};

export default ChatBox;
