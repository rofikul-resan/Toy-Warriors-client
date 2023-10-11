"use client";
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { firebaseApp } from "./firebase.config";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "@/RTK/slice/userSlice";

export const AuthContext = createContext(null);
const FirebaseProvider = ({ children }) => {
  const auth = getAuth(firebaseApp);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  // sing in
  const createUser = (email, password, name, image) => {
    console.log(email, password);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserInfo = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  useEffect(() => {
    setLoading(true);
    const updateUser = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(false);
        setUser(user);
        dispatch(
          addUser({
            name: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        );
      } else {
        setLoading(false);
        dispatch(removeUser());
      }
      console.log(user);
    });
    return () => updateUser();
  }, [dispatch, auth]);

  //auth value for full app
  const authValue = { createUser, updateUserInfo, user, loading };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default FirebaseProvider;
