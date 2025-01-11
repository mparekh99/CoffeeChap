import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // No need to use setPersistence manually
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

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and Firestore
const auth = getAuth(app);  // Default persistence will be handled internally
const db = getFirestore(app);

// Reference to 'users' collection
const userRef = collection(db, 'users');

export { auth, db, userRef };
