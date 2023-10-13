import ToyCard from "@/components/ToyCard";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { serverUrl } from "../../../../utils/utils";

const ToysContener = ({ selectTab }) => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    const url = `${serverUrl}/toy/category?kay=${selectTab}`;
    console.log(url);
    axios
      .get(url)
      .then((res) => {
        setToys(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectTab]);
  return (
    <div>
      <div className="grid grid-cols-3 gap-10 w-10/12 mx-auto">
        {toys.map((toy) => (
          <ToyCard key={toy._id} toy={toy} />
        ))}
      </div>
    </div>
  );
};

export default ToysContener;
