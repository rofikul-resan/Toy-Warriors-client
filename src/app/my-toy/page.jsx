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

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { serverUrl } from "../../../utils/utils";
import axios from "axios";
import { Bars } from "react-loader-spinner";
import { toast } from "react-toastify";

const MyToyPage = () => {
  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = useSelector((st) => st.User);
  useEffect(() => {
    const url = `${serverUrl}/toy/my-toy?email=${user.email}`;
    console.log(url);
    axios
      .get(url)
      .then((res) => {
        setToys(res.data);
        setLoading(false);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);
  const handleDeleteToy = () => {
    toast("Delete toy");
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
          <TableBody
            emptyContent={
              <p className={loading ? "opacity-0" : "opacity-100"}>
                No data find
              </p>
            }
            isLoading={loading}
            loadingContent={
              <Bars
                height="40"
                width="40"
                color="gray"
                ariaLabel="bars-loading"
                visible={true}
              />
            }
          >
            {toys.map((toy) => (
              <TableRow key={toy._id}>
                <TableCell>
                  <Avatar
                    src={toy?.photo}
                    radius="sm"
                    alt="toy row"
                    name={toy?.name}
                  />
                </TableCell>
                <TableCell>
                  <div>
                    <h1 className="text-xl font-semibold capitalize">
                      {toy?.name}
                    </h1>
                    <p className="text-xs font-semibold italic text-gray-600">
                      #{toy?.category}
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <h1 className="text-xl font-semibold capitalize">
                      {toy?.seller?.name}
                    </h1>
                    <p className="text-xs font-semibold italic text-gray-600">
                      {toy?.seller?.email}
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  $ <span className="font-semibold">{toy?.price}</span>
                </TableCell>
                <TableCell>
                  <span className="font-semibold">{toy?.rating}</span>
                </TableCell>
                <TableCell>
                  <div className="relative flex items-center gap-2">
                    <Tooltip content="Details">
                      <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                        <Link href={`/toy/${toy?._id}`}>
                          <AiOutlineEye />
                        </Link>
                      </span>
                    </Tooltip>
                    <Tooltip content="Edit Toy">
                      <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                        <Link href={`/my-toy/update-toy/${toy?._id}`}>
                          <AiOutlineEdit />
                        </Link>
                      </span>
                    </Tooltip>
                    <Tooltip color="danger" content="Delete Toy">
                      <span
                        onClick={() => handleDeleteToy(toy?._id)}
                        className="text-lg text-danger cursor-pointer active:opacity-50"
                      >
                        <AiOutlineDelete />
                      </span>
                    </Tooltip>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default MyToyPage;
