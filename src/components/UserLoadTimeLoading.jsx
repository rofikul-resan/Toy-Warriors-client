"use client";
import { AuthContext } from "@/firebase/FirebaseProvider";
import { useContext } from "react";
import { InfinitySpin } from "react-loader-spinner";

const UserLoadTimeLoading = ({ children }) => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen w-screen">
        <div>
          <InfinitySpin width="200" color="#4fa94d" />
        </div>
      </div>
    );
  } else {
    return children;
  }
};

export default UserLoadTimeLoading;
