// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, EmailAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYRP-glaTTSwcluc9_U2-haNVwgaNvTtA",
  authDomain: "furnistore-b319f.firebaseapp.com",
  projectId: "furnistore-b319f",
  storageBucket: "furnistore-b319f.appspot.com",
  messagingSenderId: "105317307046",
  appId: "1:105317307046:web:0a7bc0420dbe58b0c71a67",
  measurementId: "G-DLS7KMBZ3S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const mail = new EmailAuthProvider();
export const database = getFirestore(app);
