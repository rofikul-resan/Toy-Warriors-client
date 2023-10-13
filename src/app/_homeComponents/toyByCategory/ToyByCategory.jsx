"use client";
import { Tab, Tabs } from "@nextui-org/react";
import { useState } from "react";
import ToysContener from "./ToysContener";

const ToyByCategory = () => {
  const [selectedTab, setSelectedTab] = useState("photos");
  return (
    <div id="/#category">
      <div className="space-y-3 my-8 ">
        <h1 className="text-center text-3xl font-bold capitalize">
          See our all toy and filter by Category{" "}
        </h1>
        <p className="w-8/12 text-center mx-auto">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify, subway tile poke farm-to-table. Franzen you probably havent
          heard of them
        </p>
      </div>
      <Tabs
        aria-label="Options"
        selectedKey={selectedTab}
        onSelectionChange={setSelectedTab}
        color="primary"
        radius="full"
        className={"flex justify-center"}
        variant="bordered"
      >
        <Tab key="action" title="Action">
          <ToysContener selectTab={selectedTab} />
        </Tab>
        <Tab key="car" title="Car">
          <ToysContener selectTab={selectedTab} />
        </Tab>
        <Tab key="barbie-doll" title="Barbie Boll">
          <ToysContener selectTab={selectedTab} />
        </Tab>
        <Tab key="educational" title="Educational">
          <ToysContener selectTab={selectedTab} />
        </Tab>
      </Tabs>
    </div>
  );
};

export default ToyByCategory;
