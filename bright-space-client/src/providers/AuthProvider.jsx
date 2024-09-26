import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current user", currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //google login
  const googleProvide = new GoogleAuthProvider();
  const googleLogin = (location, navigate) => {
    signInWithPopup(auth, googleProvide)
      .then((res) => {
        setUser(res.user);
        //   navigate(location?.state || "/");
      })
      .catch((err) => {
        //  console.log(err)
      });
  };

  //github login
  const githubProvider = new GithubAuthProvider();
  const githubLogin = (location, navigate) => {
    signInWithPopup(auth, githubProvider)
      .then((res) => {
        setUser(res.user);
        // navigate(location?.state || "/");
      })
      .catch((err) => {
        // console.log(err)
      });
  };

  // logOut
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    googleLogin, githubLogin,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
