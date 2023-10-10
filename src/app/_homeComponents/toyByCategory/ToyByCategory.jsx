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
        <Tab key="photos" title="Photos">
          <ToysContener selectTab={selectedTab} />
        </Tab>
        <Tab key="music" title="Music">
          <ToysContener selectTab={selectedTab} />
        </Tab>
        <Tab key="videos" title="Videos">
          <ToysContener selectTab={selectedTab} />
        </Tab>
      </Tabs>
    </div>
  );
};

export default ToyByCategory;
