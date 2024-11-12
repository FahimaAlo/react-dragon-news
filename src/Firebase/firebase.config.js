// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5AATvU7isH2n72EQ2KB0CHBCTu5MzRx4",
  authDomain: "react-dragon-news-c25c2.firebaseapp.com",
  projectId: "react-dragon-news-c25c2",
  storageBucket: "react-dragon-news-c25c2.firebasestorage.app",
  messagingSenderId: "282169803612",
  appId: "1:282169803612:web:310acb5c4796661ced3799"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;