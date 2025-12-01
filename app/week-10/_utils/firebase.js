// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIBpGlBV8WO2YOfF3UUyDqb8aWloSHqiQ",
  authDomain: "cprg306-assignments-b0219.firebaseapp.com",
  projectId: "cprg306-assignments-b0219",
  storageBucket: "cprg306-assignments-b0219.firebasestorage.app",
  messagingSenderId: "834940330463",
  appId: "1:834940330463:web:b72a74f2decc1e5350246a"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
