// Import necessary Firebase functions to initialize the app, Firestore, and Firebase Authentication
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";  // <-- Firebase Auth is used for user authentication

// Firebase configuration object with project-specific keys and identifiers
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};

// Initialize Firebase with the provided config
const app = initializeApp(firebaseConfig);

// Initialize Firestore (Firebase's database service)
export const db = getFirestore(app);

// Initialize Firebase Authentication (used for user login and authentication)
export const auth = getAuth(app);
