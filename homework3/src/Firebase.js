// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpfkvezV5QMiSIXcM-lWLf08EfJ2UJP40",
  authDomain: "fe21-js3.firebaseapp.com",
  projectId: "fe21-js3",
  storageBucket: "fe21-js3.appspot.com",
  messagingSenderId: "262985096883",
  appId: "1:262985096883:web:32b68dff8d7e0c55975ac6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export {auth, db};