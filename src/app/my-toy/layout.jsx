import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import React from "react";

const MyToyLayout = ({ children }) => {
  return (
    <main>
      <NavigationBar />
      {children}
      <Footer />
    </main>
  );
};

export default MyToyLayout;
