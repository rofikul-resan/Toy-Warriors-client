import ToyCard from "@/components/ToyCard";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { serverUrl } from "../../../../utils/utils";
import { Bars } from "react-loader-spinner";

const ToysContener = ({ selectTab }) => {
  const [loading, setLoading] = useState(false);
  const [toys, setToys] = useState([]);
  useEffect(() => {
    setLoading(true);
    const url = `${serverUrl}/toy/category?kay=${selectTab}`;
    console.log(url);
    axios
      .get(url)
      .then((res) => {
        setLoading(false);
        setToys(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectTab]);
  return (
    <div>
      {loading && (
        <div className="h-80 flex justify-center items-center w-full">
          <Bars
            height="80"
            width="80"
            color="black"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}
      <div className="grid grid-cols-3 gap-10 w-10/12 mx-auto ">
        {toys.map((toy) => (
          <ToyCard key={toy._id} toy={toy} />
        ))}
      </div>
    </div>
  );
};

export default ToysContener;
