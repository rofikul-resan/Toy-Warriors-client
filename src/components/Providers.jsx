"use client";
import FirebaseProvider from "@/firebase/FirebaseProvider";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";

const Providers = ({ children }) => {
  return (
    <>
      <FirebaseProvider>
        <NextUIProvider>{children}</NextUIProvider>
      </FirebaseProvider>
    </>
  );
};

export default Providers;
