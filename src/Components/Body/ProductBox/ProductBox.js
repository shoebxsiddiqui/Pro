import React from "react";

const ProductBox = () => {
  return (
    <div className="w-8/10 bg-gray-50 rounded">
      <div>Products</div>
      <div className="grid grid-cols-4 gap-1 ml-3 mt-5 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1">
        <div className="bg-purple-400 h-80 w-64"></div>
        <div className="bg-purple-400 h-80 w-64"></div>
        <div className="bg-purple-400 h-80 w-64"></div>
        <div className="bg-purple-400 h-80 w-64"></div>
        <div className="bg-purple-400 h-80 w-64"></div>
        <div className="bg-purple-400 h-80 w-64"></div>
        <div className="bg-purple-400 h-80 w-64"></div>
        <div className="bg-purple-400 h-80 w-64"></div>
        <div className="bg-purple-400 h-80 w-64"></div>
        <div className="bg-purple-400 h-80 w-64"></div>
        <div className="bg-purple-400 h-80 w-64"></div>
        <div className="bg-purple-400 h-80 w-64"></div>
      </div>
    </div>
  );
};

export default ProductBox;
