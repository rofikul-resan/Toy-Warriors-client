import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { firebaseApp } from "./firebase.config";
const auth = getAuth(firebaseApp);

const createUser = (email, password, name, image) => {
  console.log(email, password);
  createUserWithEmailAndPassword(auth, email, password);
};

export const AuthContext = createContext(null);
const FirebaseProvider = ({ children }) => {
  const authValue = { createUser };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default FirebaseProvider;
