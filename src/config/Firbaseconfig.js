import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmehph0V7wB7vCELEUxjwKmI8-UUr1Kb8",
  authDomain: "react-login-db42d.firebaseapp.com",
  projectId: "react-login-db42d",
  storageBucket: "react-login-db42d.appspot.com",
  messagingSenderId: "541231854917",
  appId: "1:541231854917:web:3fcfab2b6595f0c55c7a2c"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
