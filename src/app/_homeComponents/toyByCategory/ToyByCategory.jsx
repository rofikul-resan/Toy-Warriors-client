"use client";
import { Tab, Tabs } from "@nextui-org/react";
import { useState } from "react";
import ToysContener from "./ToysContener";

const ToyByCategory = () => {
  const [selectedTab, setSelectedTab] = useState("photos");
  return (
    <div>
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
        <Tab key="barbie-Boll" title="Barbie Boll">
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
