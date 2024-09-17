import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBTkJ17_1HsT07cdiXnJcTCOIEtxtPCwBM",
  authDomain: "my-realtime-chatroom.firebaseapp.com",
  projectId: "my-realtime-chatroom",
  storageBucket: "my-realtime-chatroom.appspot.com",
  messagingSenderId: "155161083214",
  appId: "1:155161083214:web:f6f4c3873f7c32d555b21f"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
