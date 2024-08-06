import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCrRfETyVy2t97tryj4C3puGzf1aY0rzGs",
  authDomain: "the-indian-taste.firebaseapp.com",
  projectId: "the-indian-taste",
  storageBucket: "the-indian-taste.appspot.com",
  messagingSenderId: "452445578674",
  appId: "1:452445578674:web:4a580d93e5f0be3a5cf0ab",
  measurementId: "G-E3SBX0VKN7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)
export { app, auth, db };
