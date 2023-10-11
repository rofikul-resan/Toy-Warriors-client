"use client";
import { AuthContext } from "@/firebase/FirebaseProvider";
import useAuth from "@/hook/useAuth";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineLogin,
} from "react-icons/ai";

const SingUp = () => {
  const { createUser } = useContext(AuthContext);
  console.log(process.env.NEXT_PUBLIC_FIREBASE_APIKEY);

  const router = useRouter();
  console.log(router);
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const [isVisible, setIsVisible] = useState(false);
  const [emptyFileErr, setEmptyFileErr] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const validateImage = (value) => {
    if (!value[0]) {
      return "Image is required";
    }
    if (!value[0].type.includes("image")) {
      return "Invalid image format. Please upload a image.";
    }
    if (value[0].size > 2000000) {
      // 5MB limit
      return "Image size exceeds the 2MB limit.";
    }
    return true; // Validation passed
  };
  const handleImageName = (event) => {
    console.log(event);
  };
  // validation complete

  // handle sing up
  const handleSingUp = (data) => {
    console.log(data.userImage[0]);
    if (!data.userImage[0]) {
      setEmptyFileErr(true);
    }
    createUser(data.email, data.password)
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });

    // router.state = "/home";
    // router.push("/");
  };
  return (
    <div className="bg-violet-600/10 w-10/12 rounded-lg  px-12 py-8 space-y-6 shadow-lg shadow-gray-400">
      <form className="space-y-6" onSubmit={handleSubmit(handleSingUp)}>
        <h1 className="my-4 text-center text-4xl font-bold">Register Now !</h1>
        <Input
          color="primary"
          label="Full Name"
          placeholder="Your Email"
          variant="faded"
          type="text"
          {...register("fullName", {
            required: {
              value: true,
            },
          })}
        />
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
        <label htmlFor="userImage" onChange={(e) => handleImageName(e)}>
          {" "}
          <div className="flex flex-col items-center justify-center pt-2 mt-6 border border-gray-600 rounded-md">
            <svg
              className="w-8 h-8 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> User Image
            </p>
          </div>
        </label>
        <input
          type="file"
          accept="image/*"
          id="userImage"
          className="hidden"
          {...register("userImage", {
            required: "Image is required",
            validate: validateImage,
          })}
        />
        {errors.userImage && (
          <p className="text-red-600 font-semibold text-sm">
            {errors.userImage.message}
          </p>
        )}
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
          Already Have an account ?{" "}
          <Link
            className="border-b text-violet-950 italic hover:border-violet-900"
            href={"/auth/login"}
          >
            Log in
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

export default SingUp;
