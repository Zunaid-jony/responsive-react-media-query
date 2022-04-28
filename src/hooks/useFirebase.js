import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
const useFirebase = () => {
    const [users, setUsers] = useState({});
    const auth = getAuth();

    const signInUsingGoogle = () =>{
        const googleProvider = new GoogleAuthProvider();
         
         signInWithPopup(auth, googleProvider)
         .then(result =>{
             setUsers(result.user);

         })
    }

    return {
        users
    }
}