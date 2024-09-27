import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import { app } from "../Firebase/firebase.config";
import { useLocation, useNavigate } from "react-router-dom";


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
  
      const location = useLocation()
      const navigate = useNavigate()

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

    //google login
  const googleProvide = new GoogleAuthProvider();
  const googleLogin = (location, navigate) => {
    signInWithPopup(auth, googleProvide)
      .then((res) => {
        setUser(res.user);
          navigate(location?.state || "/");
      })
      .catch((err) => {
         console.log(err)
      });
  };

  //github login
  const githubProvider = new GithubAuthProvider();
  const githubLogin = (location, navigate) => {
    signInWithPopup(auth, githubProvider)
      .then((res) => {
        setUser(res.user);
        navigate(location?.state || "/");
      })
      .catch((err) => {
        console.log(err);
      });
  };


    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logOut,
        updateUserProfile,
        googleLogin, githubLogin,

    }
     return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
