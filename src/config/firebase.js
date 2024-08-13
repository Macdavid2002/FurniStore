// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBt6Lc4Nn2Bc7NeGuoN4EN4MQHCNzytJzw",
  authDomain: "meubles-63663.firebaseapp.com",
  projectId: "meubles-63663",
  storageBucket: "meubles-63663.appspot.com",
  messagingSenderId: "506924615770",
  appId: "1:506924615770:web:7afb00420517bf0a583063",
  measurementId: "G-1FEJ44XJPK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export const twitterProvider = new TwitterAuthProvider();
