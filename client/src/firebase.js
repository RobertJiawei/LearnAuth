// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "learnauth-de0f9.firebaseapp.com",
  projectId: "learnauth-de0f9",
  storageBucket: "learnauth-de0f9.appspot.com",
  messagingSenderId: "519145765307",
  appId: "1:519145765307:web:fcb2969fd11e26c078ec9e",
  measurementId: "G-T3DS7KCTP7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
