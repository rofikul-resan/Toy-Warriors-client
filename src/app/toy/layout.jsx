import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import PrivetRoute from "@/components/PrivetRoute";
import React from "react";

const ToyDetailsLayout = ({ children }) => {
  return (
    <PrivetRoute>
      <NavigationBar />
      {children}
      <Footer />
    </PrivetRoute>
  );
};

export default ToyDetailsLayout;
