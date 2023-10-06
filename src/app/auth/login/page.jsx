"use client";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineLogin,
} from "react-icons/ai";

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const { handleSubmit, register } = useForm();

  const handleLogin = (data) => {
    console.log(data);
    data = {};
  };
  return (
    <div className="bg-violet-600/10 w-10/12 rounded-lg  px-12 py-8 space-y-6 shadow-lg shadow-gray-400">
      <form className="space-y-6" onSubmit={handleSubmit(handleLogin)}>
        <h1 className="my-4 text-center text-4xl font-bold">Log in !</h1>
        <Input
          color="primary"
          label="Email"
          placeholder="Your Email"
          variant="faded"
          type="email"
          {...register("email", {
            required: {
              value: true,
              message: "Email Required !!!",
            },
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
              message: "Invalid Email Provided !!!",
            },
          })}
        />
        <Input
          color="primary"
          label="Password"
          placeholder="Your Password"
          variant="faded"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <AiOutlineEye className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <AiOutlineEyeInvisible className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
          {...register("password", { required: true })}
        />

        <div>
          <Button
            type="submit"
            color="primary"
            className="px-10 w-full"
            radius="sm"
            variant="shadow"
            endContent={<AiOutlineLogin className="text-xl" />}
          >
            Login
          </Button>
        </div>
      </form>
      <div>
        <p>
          Do not Have an account ?{" "}
          <Link
            className="border-b text-violet-950 italic hover:border-violet-900"
            href={"/auth/sing-up"}
          >
            Sing Up
          </Link>{" "}
        </p>
      </div>
      <div>
        <div>
          <p className="text-center border-b border-black"></p>
          <h1 className="text-center my-5 font-semibold "> Login With </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
