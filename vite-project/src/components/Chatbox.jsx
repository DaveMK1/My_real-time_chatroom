import Message from "./Message";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../firebase";

const Chatbox = () => {

  const messages = [
    {
     id: 1,
     text: "hi there"
    },
    {
     id: 2,
     text: "hey"
    }
  ]

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"))
    const unsubscribe = onSnapshot(q, snapshot => {
      setMessages(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
    return unsubscribe
  }, []);

  return (
    <div className="pb-46 pt-23 containerWrap">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  )
}

export default Chatbox
