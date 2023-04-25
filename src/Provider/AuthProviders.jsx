import React, { createContext, useEffect, useState } from 'react'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext=createContext(null);
//
const auth=getAuth(app);
const googleAuthprovider = new GoogleAuthProvider();
const AuthProviders = ({children}) => {
    const [user,setuser]=useState(null);
    const [loading,setLoading]=useState(true);
const createuser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
}
const signin=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
}
const signInwithgoogle = ()=>{
    return signInWithPopup(auth, googleAuthprovider);
}
//observe authn state changed 
useEffect(()=>{
 const unsubscribe =   onAuthStateChanged(auth,currentuser=>{
        console.log('current state change',currentuser)
        setuser(currentuser);
        setLoading(false);
    })
    return ()=>{
        unsubscribe();
    }
},[])
const logout=()=>{
   return signOut(auth)

}

const authInfo ={
user,
loading,
createuser,
signin,
signInwithgoogle,
logout
}
return (
<AuthContext.Provider value={authInfo}>
    {children}
</AuthContext.Provider>
)
}

export default AuthProviders