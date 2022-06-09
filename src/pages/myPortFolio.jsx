import React, { useState } from "react";
import { InnerLayout } from "../themes/layouts";
import Menu from "../components/menu";
import Button from "../components/button";
import portfolioData from "./portfolio-data";

const allButtons = [
  "All",
  ...new Set(portfolioData.map((item) => item.category)),
];

const MyPortFolio = () => {
  const [menuItem, setMenuItems] = useState(portfolioData);
  const [button] = useState(allButtons);

  const filter = (button) => {
    if (button === "All") {
      setMenuItems(portfolioData);
      return;
    }
    const filteredData = portfolioData.filter(
      (item) => item.category === button
    );
    setMenuItems(filteredData);
  };

  return (
    <div>
      <InnerLayout>
        <Button filter={filter} button={button} />
        <Menu menuItem={menuItem} />
      </InnerLayout>
    </div>
  );
};

export default MyPortFolio;
