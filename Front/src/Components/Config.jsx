// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCmKQkALCmCDe4m03AfzLXqVQlxstdEXHQ",
  authDomain: "e-patient-69508.firebaseapp.com",
  projectId: "e-patient-69508",
  storageBucket: "e-patient-69508.appspot.com",
  messagingSenderId: "587983619113",
  appId: "1:587983619113:web:b5cc479a96ddf65c908838",
  measurementId: "G-BZXS5DEVJE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};