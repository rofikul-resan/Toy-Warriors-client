"use client";
import {
  Table,
  TableBody,
  TableColumn,
  TableHeader,
  Avatar,
  TableCell,
  TableRow,
  Tooltip,
} from "@nextui-org/react";
import { AiOutlineDelete, AiOutlineEdit, AiOutlineEye } from "react-icons/ai";

import React from "react";
import Link from "next/link";

const MyToyPage = () => {
  const handleDeleteToy = () => {
    console.log("click");
  };
  return (
    <div>
      <div className="w-10/12 mx-auto my-8">
        <Table removeWrapper aria-label="Example static collection table">
          <TableHeader>
            <TableColumn key={"image"}>Image</TableColumn>
            <TableColumn key={"Product Info"}>Product Info</TableColumn>
            <TableColumn key={"Seller Info"}>Seller Info</TableColumn>
            <TableColumn key={"Price"}>Price</TableColumn>
            <TableColumn key={"Ratting"}>Ratting</TableColumn>
            <TableColumn key={"Actions"}>Actions</TableColumn>
          </TableHeader>
          <TableBody emptyContent="No data find">
            <TableRow key={"1"}>
              <TableCell>
                <Avatar
                  src="/barbie-Doll.webp"
                  radius="sm"
                  alt="toy row"
                  name="Rofikul"
                />
              </TableCell>
              <TableCell>
                <div>
                  <h1 className="text-xl font-semibold capitalize">
                    barbie-Doll
                  </h1>
                  <p className="text-xs font-semibold italic text-gray-600">
                    #barbie-Doll
                  </p>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <h1 className="text-xl font-semibold capitalize">
                    Rofikul Islam
                  </h1>
                  <p className="text-xs font-semibold italic text-gray-600">
                    resan@gmail.com
                  </p>
                </div>
              </TableCell>
              <TableCell>
                $ <span className="font-semibold">58</span>
              </TableCell>
              <TableCell>
                <span className="font-semibold">4.5</span>
              </TableCell>
              <TableCell>
                <div className="relative flex items-center gap-2">
                  <Tooltip content="Details">
                    <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                      <Link href={"/toy/id"}>
                        <AiOutlineEye />
                      </Link>
                    </span>
                  </Tooltip>
                  <Tooltip content="Edit Toy">
                    <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                      <Link href={"/my-toy/update-toy/id"}>
                        <AiOutlineEdit />
                      </Link>
                    </span>
                  </Tooltip>
                  <Tooltip color="danger" content="Delete Toy">
                    <span
                      onClick={() => handleDeleteToy("click")}
                      className="text-lg text-danger cursor-pointer active:opacity-50"
                    >
                      <AiOutlineDelete />
                    </span>
                  </Tooltip>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default MyToyPage;
