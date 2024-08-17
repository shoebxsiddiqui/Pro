import React from "react";

const LoaderCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-xs w-full mx-auto animate-pulse">
      <div className="h-48 w-full bg-gray-200"></div>
      <div className="p-4">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
      </div>
    </div>
  );
};

export default LoaderCard;
