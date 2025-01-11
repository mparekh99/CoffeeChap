import { initializeApp } from "firebase/app";
// import {getReactNativePersistance, initializeAuth} from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBLGHAAI8eRqUfANaCW8FTl0fXrYRo5CTE",
    authDomain: "coffeechap-777ad.firebaseapp.com",
    projectId: "coffeechap-777ad",
    storageBucket: "coffeechap-777ad.firebasestorage.app",
    messagingSenderId: "1097727538277",
    appId: "1:1097727538277:web:4c7467c77a239893af028c",
    measurementId: "G-SBW991Y4V8"
  };

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFirestore(app);
export const userRef = collection(db, 'users');