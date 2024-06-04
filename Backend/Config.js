const { initializeApp } = require("firebase/app");
const { getAuth, GoogleAuthProvider } = require("firebase/auth");
require('dotenv').config();

const firebaseConfig = {
  apiKey: process.env.VITE_REACT_APP_API_KEY,
  authDomain: process.env.VITE_REACT_APP_AUTH_DOMAIN,
  projectId: process.env.VITE_REACT_APP_PROJECT_ID,
  storageBucket: process.env.VITE_REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.VITE_REACT_APP_APP_ID,
  measurementId: process.env.VITE_REACT_APP_MEASUREMENT_ID
};

console.log(firebaseConfig);
// console.log(process.env);

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

module.exports = { auth, provider, firebaseConfig };