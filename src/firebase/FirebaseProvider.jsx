"use client";
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import { firebaseApp } from "./firebase.config";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "@/RTK/slice/userSlice";
import axios from "axios";
import { serverUrl } from "../../utils/utils";

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

  //log out
  const logOutUser = () => {
    return signOut(auth);
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
        axios
          .post(`${serverUrl}/jwt`, {
            name: user.displayName,
            email: user.email,
          })
          .then((res) => {
            const token = res.data.token;
            localStorage.setItem("token", token);
          });
      } else {
        setLoading(false);
        dispatch(removeUser());
        localStorage.removeItem("token");
      }
    });
    return () => updateUser();
  }, [dispatch, auth]);

  //auth value for full app
  const authValue = { createUser, updateUserInfo, user, loading, logOutUser };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default FirebaseProvider;
