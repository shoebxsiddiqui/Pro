import React from "react";

const ProductItem = (props) => {
  const item = props.item;
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-xs w-full mx-auto transform transition hover:scale-105 duration-300">
      <div className="h-48 w-full overflow-hidden flex items-center justify-center">
        <img
          className="w-full h-full object-contain"
          src={item.images}
          alt={item.title}
        />
      </div>
      <div className="p-4">
        <h4 className="text-lg font-semibold text-gray-800 truncate">
          {item.title}
        </h4>
        <p className="text-sm text-gray-500">{item.brand}</p>
        <div className="mt-2">
          <span className="text-lg font-bold text-gray-800">
            ₹{item.discountPrice}
          </span>
          {item.discount !== 0 ? (
            <>
              <span className="text-sm text-gray-500 line-through ml-2">
                ₹{item.price}
              </span>
              <span className="text-sm text-green-600 ml-2">
                {item.discount}% off
              </span>{" "}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
