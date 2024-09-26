import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import { app } from "../Firebase/firebase.config";


export const AuthContext =createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] =useState(null)
    const [loading, setLoading] =useState(true)

    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log('current user', currentUser);
            setLoading(false)
        });
        return () =>{
            return unsubscribe()
        }
    } ,[])


    // create user
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // login user
    const loginUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logOut
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }


    // update user profile
    const updateUserProfile = (name, photo) =>{
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photo
        })
    }


    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logOut,
        updateUserProfile

    }
     return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;