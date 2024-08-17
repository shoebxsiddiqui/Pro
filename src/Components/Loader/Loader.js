import React from "react";
import { Pagination } from "@mui/material";
import LoaderCard from "./LoaderCard.js";

const Loader = () => {
  return (
    <div className="w-8/10 m-2 bg-gray-50 rounded">
      <div className="text-gray-500 m-3 mb-0 lg:m-5 lg:mb-0">Products</div>
      <div className="ml-3 m-2 mt-0 lg:ml-5 lg:mt-2 font-semibold bg-gray-200 h-4 w-48 rounded"></div>
      <hr className="mb-2 mt-1" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-gray-200">
        {[...Array(20)].map((_, index) => (
          <LoaderCard key={index} />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Pagination />
      </div>
    </div>
  );
};

export default Loader;
