// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAridck0niTq1NeDPy26mGihaRlCQ1UTQk",
  authDomain: "open-verse-da6d1.firebaseapp.com",
  projectId: "open-verse-da6d1",
  storageBucket: "open-verse-da6d1.firebasestorage.app",
  messagingSenderId: "296159728383",
  appId: "1:296159728383:web:3065ab4098eedede4bf2ca",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
export { app, auth, fireDb, storage };
