"use client";
import { store } from "@/RTK/store";
import FirebaseProvider from "@/firebase/FirebaseProvider";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import { Provider } from "react-redux";
import UserLoadTimeLoading from "./UserLoadTimeLoading";

const Providers = ({ children }) => {
  return (
    <>
      <Provider store={store}>
        <FirebaseProvider>
          <NextUIProvider>
            <UserLoadTimeLoading>{children}</UserLoadTimeLoading>
          </NextUIProvider>
        </FirebaseProvider>
      </Provider>
    </>
  );
};

export default Providers;
