"use client";
import { AuthContext } from "@/firebase/FirebaseProvider";
import { Button, Input } from "@nextui-org/react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineLogin,
} from "react-icons/ai";

const SingUp = () => {
  // firebase function
  const { createUser, updateUserInfo } = useContext(AuthContext);

  //state
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [userImageErr, setUserImageErr] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const validateImage = (value) => {
    if (!value) {
      return "Image is required";
    }
    if (!value.type.includes("image")) {
      return "Invalid image format. Please upload a image.";
    }
    if (value.size > 2000000) {
      return "Image size exceeds the 2MB limit.";
    }
    return false;
  };

  const changeImage = (image) => {
    console.log("img", image);
    const errorMessage = validateImage(image[0]);
    console.log(errorMessage);
    if (errorMessage) {
      setImageFile(null);
      return setUserImageErr(errorMessage);
    } else {
      setImageFile(image);
    }
  };

  // validation complete

  // handle sing up
  const handleSingUp = async (data) => {
    setLoading(true);
    try {
      console.log("img", imageFile);
      const imgData = new FormData();
      console.log(imgData);
      imgData.append("image", imageFile[0]);
      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_Img_token}`,
        imgData
      );
      setLoading(false);
      console.log(data, res.data.data.display_url);
      const imgUrl = res.data.data.display_url;
      const userInfo = await createUser(data.email, data.password);
      if (userInfo.user) {
        const user = await updateUserInfo(data.fullName, imgUrl);
        console.log("user", user);
        if (user) {
          setLoading(false);
          reset();
        }
      }
    } catch (err) {
      setLoading(false);
      console.log(err);
    }

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
        <label htmlFor="userImage">
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
              <span className="font-semibold">
                {imageFile ? imageFile[0].name : "Click to upload"}
              </span>{" "}
              User Image
            </p>
          </div>
        </label>
        <input
          type="file"
          accept="image/*"
          id="userImage"
          className="hidden"
          required
          onChange={(e) => changeImage(e.target.files)}
        />
        {userImageErr && (
          <p className="text-red-600 font-semibold text-sm">{userImageErr}</p>
        )}
        <div>
          <Button
            isLoading={loading}
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
