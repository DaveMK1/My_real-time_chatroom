// Import Firebase Firestore methods for adding a new message to the collection
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { UserAuth } from "../context/Auth_Context"; // Access user authentication context
import { db } from "../firebase"; // Firestore instance

const SendMessage = () => {
  const [value, setValue] = useState(""); // State to manage the input field value
  const { currentUser } = UserAuth(); // Get the current user data

  // Handle form submission to send a message
  const handleSendMessage = async (e) => {
    e.preventDefault(); // Prevent page reload on form submit

    // Validate the message input
    if (value.trim() === "") {
      alert("Enter a valid message!"); // Alert user if message is empty
      return;
    }

    try {
      const { uid, displayName, photoURL } = currentUser; // Get user info from the current user
      // Add a new message document to Firestore
      await addDoc(collection(db, "messages"), {
        text: value, // Message text
        name: displayName, // Sender's display name
        avatar: photoURL, // Sender's avatar URL
        createdAt: serverTimestamp(), // Firebase server timestamp
        uid // User ID of the sender
      });
    } catch (error) {
      console.log(error); // Log any errors during the message sending process
    }
    setValue(""); // Clear the input field after sending the message
  };

  return (
    <div className="bg-gray-400 fixed bottom-0 w-full py-10 shadow-lg">
      {/* Form for sending a message */}
      <form onSubmit={handleSendMessage} className="px-2 containerWrap flex">
        {/* Input field for message text */}
        <input
          value={value} // Controlled input bound to the value state
          onChange={(e) => setValue(e.target.value)} // Update state on input change
          className="input w-full focus:outline-none bg-gray-100 rounded-r-none text-black"
          type="text" // Input field type
        />
        {/* Submit button */}
        <button type="submit" className="w-auto bg-gray-500 text-white rounded-r-lg px-5 text-sm">
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
