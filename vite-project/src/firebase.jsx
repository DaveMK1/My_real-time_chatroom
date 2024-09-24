// Import necessary Firebase functions to initialize the app, Firestore, and Firebase Authentication
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";  // <-- Firebase Auth is used for user authentication

// Firebase configuration object with project-specific keys and identifiers
const firebaseConfig = {
  apiKey: "AIzaSyBTkJ17_1HsT07cdiXnJcTCOIEtxtPCwBM",
  authDomain: "my-realtime-chatroom.firebaseapp.com",
  projectId: "my-realtime-chatroom",
  storageBucket: "my-realtime-chatroom.appspot.com",
  messagingSenderId: "155161083214",
  appId: "1:155161083214:web:f6f4c3873f7c32d555b21f"
};

// Initialize Firebase with the provided config
const app = initializeApp(firebaseConfig);

// Initialize Firestore (Firebase's database service)
export const db = getFirestore(app);

// Initialize Firebase Authentication (used for user login and authentication)
export const auth = getAuth(app);
