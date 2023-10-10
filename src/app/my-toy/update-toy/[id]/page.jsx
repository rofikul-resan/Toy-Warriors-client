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
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import { BsArrowRight } from "react-icons/bs";

const UpdateToyPage = ({ params: { id } }) => {
  const { handleSubmit, register } = useForm();
  const handleUpdateToy = (data) => {
    console.log(data);
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
                <h1 className="text-xl font-semibold">Barbie doll</h1>
                <p className="italic text-xs">#barbie-doll</p>
              </div>
              <div>
                <p className="text-xs">
                  <span className="font-semibold"> Price : $</span>
                  <span className="italic text-gray-700 ">58</span>
                </p>
                <p className="text-xs">
                  <span className="font-semibold"> Quantity : </span>
                  <span className="italic text-gray-700 ">158 </span>
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
                    type="text"
                    label=" Product Name"
                    placeholder="New Product name"
                    color="primary"
                    variant="bordered"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <Input
                      type="number"
                      label="Price"
                      placeholder=" New Price"
                      color="primary"
                      variant="bordered"
                      startContent={<span>$</span>}
                    />
                    <Input
                      type="number"
                      label="Quantity"
                      placeholder=" Available  Quantity"
                      color="primary"
                      variant="bordered"
                    />
                  </div>
                  <Textarea
                    placeholder="Update Details"
                    variant="bordered"
                    label="Details"
                  ></Textarea>
                  <Button
                    isLoading={false}
                    endContent={<BsArrowRight />}
                    className="w-full"
                    color="success"
                    variant="shadow"
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
