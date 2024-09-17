import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";  // <-- This was missing

const firebaseConfig = {
  apiKey: "AIzaSyBTkJ17_1HsT07cdiXnJcTCOIEtxtPCwBM",
  authDomain: "my-realtime-chatroom.firebaseapp.com",
  projectId: "my-realtime-chatroom",
  storageBucket: "my-realtime-chatroom.appspot.com",
  messagingSenderId: "155161083214",
  appId: "1:155161083214:web:f6f4c3873f7c32d555b21f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Firebase Auth
export const auth = getAuth(app);
