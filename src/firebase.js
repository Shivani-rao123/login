import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBUuiPZ55Aq9BS39peVtB8F7CJqyll4Ueo",
  authDomain: "fir-auth-11-90912.firebaseapp.com",
  projectId: "fir-auth-11-90912",
  storageBucket: "fir-auth-11-90912.appspot.com",
  messagingSenderId: "702548290145",
  appId: "1:702548290145:web:1b4a073871f3af23f51820",
  measurementId: "G-8EJB8CCXX8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };