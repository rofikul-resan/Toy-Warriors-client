"use client";
import ToyCard from "@/components/ToyCard";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { serverUrl } from "../../../utils/utils";

const AllToyPage = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    axios
      .get(`${serverUrl}/toy`)
      .then((res) => {
        setToys(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className="space-y-3 my-4 ">
        <h1 className="text-center text-3xl font-bold capitalize">
          See our all toy
        </h1>
        <p className="w-8/12 text-center mx-auto">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify, subway tile poke farm-to-table. Franzen you probably havent
          heard of them
        </p>
      </div>
      <div className="flex justify-between md:w-[1235px] mx-auto">
        <div></div>
        <div className="w-fit mx-auto h-fit flex gap-6 items-center">
          <div className="w-64">
            <Input
              label="Search"
              isClearable
              radius="lg"
              variant="bordered"
              color="primary"
              placeholder="Type to search..."
              startContent={
                <AiOutlineSearch className="text-black/50 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
              }
            />
          </div>
          <Button
            color="primary"
            variant="shadow"
            className="px-6"
            endContent={<AiOutlineSearch />}
          >
            Search
          </Button>
        </div>
        <div>
          <Select
            label="Sort By Pricing "
            placeholder="Select an animal"
            className="max-w-xs"
          >
            <SelectItem key="ascending" value="ascending">
              Ascending
            </SelectItem>
            <SelectItem key="descending" value="descending">
              Descending
            </SelectItem>
          </Select>
        </div>
      </div>
      <div className="w-10/12 mx-auto grid grid-cols-3 gap-6 my-6">
        {toys.map((toy) => (
          <ToyCard key={toy._id} toy={toy} />
        ))}
      </div>
    </div>
  );
};

export default AllToyPage;
