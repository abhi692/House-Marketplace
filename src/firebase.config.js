import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCtpRluLrXfTTq1nIGJ69XRFGAyhmWr1E",
  authDomain: "house-marketplace-app-711e8.firebaseapp.com",
  projectId: "house-marketplace-app-711e8",
  storageBucket: "house-marketplace-app-711e8.appspot.com",
  messagingSenderId: "541046575637",
  appId: "1:541046575637:web:5f0ce517e7be0b3cfb741c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();