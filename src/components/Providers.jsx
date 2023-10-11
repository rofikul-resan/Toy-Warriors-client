"use client";
import { store } from "@/RTK/store";
import FirebaseProvider from "@/firebase/FirebaseProvider";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import { Provider } from "react-redux";

const Providers = ({ children }) => {
  return (
    <>
      <FirebaseProvider>
        <Provider store={store}>
          <NextUIProvider>{children}</NextUIProvider>
        </Provider>
      </FirebaseProvider>
    </>
  );
};

export default Providers;
