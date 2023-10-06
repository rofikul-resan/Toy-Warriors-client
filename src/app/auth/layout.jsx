import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import Image from "next/image";
import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <>
      <NavigationBar />
      <div className="grid md:grid-cols-2 relative items-center py-16">
        <div>
          <Image
            height={400}
            width={400}
            className="mx-auto w-96"
            src="https://i.ibb.co/M9V4ptS/Super-Hero-PNG-File-Copy.png"
            alt="Auth banner side"
            priority
          />
        </div>
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default AuthLayout;
