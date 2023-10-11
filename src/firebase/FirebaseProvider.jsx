import { createContext, useEffect } from "react";
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
    const updateUser = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(addUser(user));
      } else {
        dispatch(removeUser());
      }
      console.log(user);
    });
    return () => {
      updateUser();
    };
  }, [dispatch, auth]);
  const authValue = { createUser, updateUserInfo };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default FirebaseProvider;
