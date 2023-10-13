"use client";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Input,
  Textarea,
} from "@nextui-org/react";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BsArrowRight } from "react-icons/bs";
import { serverUrl } from "../../../../../utils/utils";
import { useSelector } from "react-redux";

const UpdateToyPage = ({ params: { id } }) => {
  const [toy, setToy] = useState({});
  const [loading, setLoading] = useState(false);
  const { handleSubmit, register, reset } = useForm();

  useEffect(() => {
    axios
      .get(`${serverUrl}/toy/get-toy/${id}`)
      .then((res) => {
        setToy(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleUpdateToy = (data) => {
    setLoading(true);
    const updateDoc = {
      name: data.name,
      price: +data.price,
      quantity: +data.quantity,
      details: data.details,
    };
    axios
      .patch(`${serverUrl}/toy/${id}`, updateDoc)
      .then((res) => {
        setToy(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(updateDoc);
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
            <div className="flex justify-between items-center w-full px-3">
              <div>
                <h1 className="text-xl font-semibold">{toy?.name}</h1>
                <p className="italic text-xs">#{toy?.category}</p>
              </div>
              <div>
                <p className="text-xs">
                  <span className="font-semibold"> Price : $</span>
                  <span className="italic text-gray-700 ">{toy?.price}</span>
                </p>
                <p className="text-xs">
                  <span className="font-semibold"> Quantity : </span>
                  <span className="italic text-gray-700 ">
                    {toy?.quantity}{" "}
                  </span>
                </p>
              </div>
            </div>
          </CardHeader>
          <Divider className="shadow-sm" />
          <CardBody>
            <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
              <div className="relative col-span-6 md:col-span-4">
                <Image
                  alt="Album cover"
                  className="object-cover rounded-lg"
                  height={300}
                  shadow="md"
                  src="/banner2.jpg"
                  width={300}
                />
              </div>

              <div className="flex flex-col col-span-6 md:col-span-8 space-y-3">
                <h1 className="text-2xl text-center font-bold">
                  Update Your Product{" "}
                </h1>
                <form
                  onSubmit={handleSubmit(handleUpdateToy)}
                  className="space-y-3"
                >
                  <Input
                    {...register("name")}
                    type="text"
                    label=" Product Name"
                    placeholder="New Product name"
                    color="primary"
                    variant="bordered"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <Input
                      {...register("price")}
                      type="number"
                      label="Price"
                      placeholder=" New Price"
                      color="primary"
                      variant="bordered"
                      startContent={<span>$</span>}
                    />
                    <Input
                      {...register("quantity")}
                      type="number"
                      label="Quantity"
                      placeholder=" Available  Quantity"
                      color="primary"
                      variant="bordered"
                    />
                  </div>
                  <Textarea
                    {...register("details")}
                    placeholder="Update Details"
                    variant="bordered"
                    label="Details"
                  ></Textarea>
                  <Button
                    isLoading={loading}
                    endContent={<BsArrowRight />}
                    className="w-full"
                    color="success"
                    variant="shadow"
                    type="submit"
                  >
                    Update Now
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

export default UpdateToyPage;
