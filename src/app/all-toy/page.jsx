"use client";
import ToyCard from "@/components/ToyCard";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { serverUrl } from "../../../utils/utils";

const AllToyPage = () => {
  const [toys, setToys] = useState([]);
  const [textSearch, setTextSearch] = useState("");
  const [sortKey, setSortKey] = useState("");
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

  //Search implement
  useEffect(() => {
    console.log(sortKey);
    let url;
    if (textSearch) {
      url = `${serverUrl}/toy/search?key=${textSearch}`;
    } else {
      url = `${serverUrl}/toy`;
    }
    console.log(url);
    // axios
    //   .get(url)
    //   .then((res) => setToys(res.data))
    //   .catch((err) => console.log(err));
  }, [textSearch, sortKey]);

  const searchToy = () => {};
  return (
    <div>
      <div className="space-y-3 my-4 ">
        <h1 className="text-center text-3xl font-bold capitalize">
          See our all toy
        </h1>
      </div>
      <div className="flex justify-between md:w-[1235px] mx-auto">
        <div></div>
        <div className="w-fit mx-auto h-fit flex gap-6 items-center">
          <div className="w-64 ml-[8.5rem]">
            <Input
              onChange={(e) => {
                setTextSearch(e.target.value);
                searchToy();
              }}
              label="Search"
              isClearable
              radius="lg"
              variant="bordered"
              color="primary"
              value={textSearch}
              placeholder="Type name to search..."
              startContent={
                <AiOutlineSearch className="text-black/50 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
              }
            />
          </div>
        </div>
        <div>
          <Select
            label="Sort by Price"
            variant="bordered"
            placeholder="Select an option"
            selectedKeys={sortKey}
            onSelectionChange={setSortKey}
            className="w-36"
          >
            <SelectItem key="ascending" value="1">
              High to Low
            </SelectItem>
            <SelectItem key="descending" value="-1">
              Low to Heigh
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
