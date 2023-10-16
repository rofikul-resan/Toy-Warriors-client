"use client";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineStar } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { useSelector } from "react-redux";
import { serverUrl } from "../../../utils/utils";
import Swal from "sweetalert2";

const AddToyPage = () => {
  const user = useSelector((state) => state.User);
  const { handleSubmit, register, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [userImageErr, setUserImageErr] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [category, setCategory] = useState(null);

  //image validate
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
    setUserImageErr("");
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

  const handleAddToy = async (data) => {
    const productData = {
      name: data.name,
      price: +data.price,
      quantity: +data.quantity,
      rating: +data.rating,
      category: data.category,
      seller: user,
      details: data.details,
    };
    setLoading(true);
    try {
      console.log("img", imageFile);
      const imgData = new FormData();
      imgData.append("image", imageFile[0]);
      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_Img_token}`,
        imgData
      );
      setLoading(false);
      productData.photo = res.data.data.display_url;
      console.log(productData, res.data.data.display_url);
      const toyRes = await axios.post(`${serverUrl}/toy`, productData);
      console.log("toy", toyRes.data);
      reset();
      Swal.fire({
        icon: "success",
        title: "Toy Add Sussusfull",
        text: "Something went wrong!",
      });
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };
  return (
    <div className="md:w-10/12 mx-auto my-16">
      <div>
        <Card
          isBlurred
          className="border-none  dark:bg-default-100/50 w-9/12 mx-auto "
          shadow="lg"
          radius="md"
        >
          <CardHeader>
            <h1 className="text-2xl text-center font-bold">Add Your Product</h1>
          </CardHeader>
          <Divider className="shadow-sm" />
          <CardBody>
            <div>
              <div className="flex flex-col col-span-6 md:col-span-8 space-y-3">
                <form
                  onSubmit={handleSubmit(handleAddToy)}
                  className="space-y-3"
                >
                  <Input
                    {...register("name", { required: true })}
                    type="text"
                    label=" Product Name"
                    placeholder="New Product name"
                    color="primary"
                    variant="bordered"
                    isRequired
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <Input
                      {...register("price", { required: true })}
                      type="number"
                      label="Price"
                      placeholder=" New Price"
                      color="primary"
                      variant="bordered"
                      startContent={<span>$</span>}
                      isRequired
                    />
                    <Input
                      {...register("quantity", { required: true })}
                      type="number"
                      label="Quantity"
                      placeholder=" Available  Quantity"
                      color="primary"
                      variant="bordered"
                      isRequired
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Input
                      {...register("rating", { required: true })}
                      type="number"
                      label="Rating"
                      placeholder="Rating"
                      color="primary"
                      variant="bordered"
                      startContent={<AiOutlineStar className="text-lg" />}
                      isRequired
                    />
                    <Select
                      {...register("category", { required: true })}
                      isRequired
                      label="Favorite Animal"
                      placeholder="Select an Category"
                      color="primary"
                      variant="bordered"
                      selectedKeys={category}
                      onSelectionChange={setCategory}
                    >
                      <SelectItem key={"car"} value={"car"}>
                        Car
                      </SelectItem>
                      <SelectItem key={"action"} value={"action"}>
                        Action
                      </SelectItem>
                      <SelectItem key={"barbie-doll"} value={"barbie-doll"}>
                        Barbie Doll
                      </SelectItem>
                      <SelectItem key={"educational"} value={"educational"}>
                        educational
                      </SelectItem>
                    </Select>
                  </div>
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
                          {imageFile ? imageFile[0]?.name : "Click to upload"}
                        </span>{" "}
                        Product Image
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
                    <p className="text-red-600 font-semibold text-sm">
                      {userImageErr}
                    </p>
                  )}
                  <Textarea
                    {...register("details", { required: true })}
                    placeholder="Update Details"
                    variant="bordered"
                    label="Details"
                  ></Textarea>
                  <Button
                    type="submit"
                    isLoading={loading}
                    endContent={<BsArrowRight />}
                    className="w-full"
                    color="success"
                    variant="shadow"
                  >
                    Add Now
                  </Button>
                </form>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default AddToyPage;
