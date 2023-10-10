"use client";
import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div>
        <InfinitySpin width="200" color="#4fa94d" />
      </div>
    </div>
  );
};

export default Loading;
