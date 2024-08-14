import React from "react";
import FilterBox from "./FilterBox/FilterBox";
import ProductBox from "./ProductBox/ProductBox";

const Body = () => {
  return (
    <div className="w-full min-h-screen mt-3 flex gap-3">
      <FilterBox />
      <ProductBox />
    </div>
  );
};

export default Body;
