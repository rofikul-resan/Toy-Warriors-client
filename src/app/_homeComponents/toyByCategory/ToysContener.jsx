import ToyCard from "@/components/ToyCard";
import React from "react";

const ToysContener = ({ selectTab }) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-10 w-10/12 mx-auto">
        <ToyCard />
        <ToyCard />
        <ToyCard />
        <ToyCard />
        <ToyCard />
      </div>
    </div>
  );
};

export default ToysContener;
