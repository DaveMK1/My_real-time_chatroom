
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBudRaB6yPEC1FubO0WEJd6OIKdnw305vA",
  authDomain: "my-real-time-chatroom-72791.firebaseapp.com",
  projectId: "my-real-time-chatroom-72791",
  storageBucket: "my-real-time-chatroom-72791.appspot.com",
  messagingSenderId: "598637876443",
  appId: "1:598637876443:web:a73fb4249eb4c0f79768fe"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
