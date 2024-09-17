import Message from "./Message";
import { collection, query, where, onSnapshot } from "firebase/firestore";

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
    const q = query(
      collection(db, "messages"),
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        // messages.push({ ...doc.data(), id: doc.id });
        console.log(doc.data())
      });
      setMassages(messages);
    });
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
