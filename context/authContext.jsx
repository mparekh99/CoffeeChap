import { createContext, useState, useEffect, useContext } from "react";
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut }from "firebase/auth";
import {doc, getDoc, setDoc} from "firebase/firestore";
import {auth, db} from "../firebaseConfig.js";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(undefined);

    useEffect(() => {
        // onAuthStateChanged
        const unsub = onAuthStateChanged(auth, (user)=> {

            console.log('got user: ', user);
            if (user) {
                setIsAuthenticated(true);
                setUser(user);
            }else {
                setIsAuthenticated(false);
                setUser(null);
            }
        });
        return unsub;

    }, [])


    const login = async (email, password) => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            return {sucess: true};
        }catch(e){
            let msg = e.message;
            if (msg.includes('(auth/invalid-email)')) msg='Invalid email'
            if (msg.includes('(auth/invalid-credential)')) msg='Wrong credentials'
            return {sucess: false, msg: msg};
        }
    }

    const logout = async () =>{
        try{
            await signOut(auth);
            return {sucess: true};

        }catch(e){
            return {sucess: false, msg: e.message, error: e};
        }
    }

    const register = async (email, password, username) =>{

        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);

            console.log("\n\n\Created User!!!");  // This should log when the user is successfully created

            // Firestore interaction
            const response2 = await setDoc(doc(db, "users", response.user.uid), {
                username,
                userId: response.user.uid,
            });

            // console.log("\n\n\nLOST THE GRIND");  // This will log after Firestore interaction

            // // You can check the data from Firestore to ensure it was written correctly
            // const userDocRef = doc(db, "users", response.user.uid);
            // const userDoc = await getDoc(userDocRef);
            // console.log("User data from Firestore: ", userDoc.data());

            return { success: true, data: response?.user };

        } catch (e) {
            console.error("Error during register:", e);  // Log the full error to catch any issues during registration
            let msg = e.message;
            if (msg.includes('(auth/invalid-email)')) msg = 'Invalid email';
            if (msg.includes('(auth/email-already-in-use)')) msg = 'This email is already in use';
            return { success: false, msg: msg };
        }
    }
    //     try {
    //         const response = await createUserWithEmailAndPassword(auth, email, password);


    //         // await setDoc(doc(db, "cities", "LA"), {
    //         //     name: "Los Angeles",
    //         //     state: "CA",
    //         //     country: "USA"
    //         //   });


    //         console.log("\n\n\nHOOOOOOOOLLLLOOOOOOO");



    //         const response2 = await setDoc(doc(db, "users", response.user.uid), {
    //             username,
    //             userId: response.user.uid,
    //         });


    //         console.log("\n\n\nLOST THE GRIND");

    //         console.log("The error is: ", response2);


    //         return {sucess: true, data: response?.user};

    //     }catch(e) {
    //         let msg = e.message;
    //         if (msg.includes('(auth/invalid-email)')) msg='Invalid email'
    //         if (msg.includes('(auth/email-already-in-use)')) msg='This email is already in use'
    //         return {sucess: false, msg: msg};
    //     }
    // }


    return (
        <AuthContext.Provider value={{user, isAuthenticated, login, register, logout}}>
            {children}
        </AuthContext.Provider>
    )
    
}

export const useAuth = ()=> {
    const value = useContext(AuthContext);

    if (!value) {
        throw new Error('useAuth must be wrapped inside AuthContextProvider');
    }

    return value;
}