const { AuthContext } = require("@/firebase/FirebaseProvider");
const { useContext } = require("react");

const useAuth = () => {
  const authValue = useContext(AuthContext);
  return authValue;
};

export default useAuth;
