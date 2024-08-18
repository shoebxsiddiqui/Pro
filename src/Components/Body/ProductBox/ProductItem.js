import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { BsCartFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addItemsToCart } from "../../../actions/cartAction";
import { FaParachuteBox } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductItem = (props) => {
  const item = props.item;

  const dispatch = useDispatch();
  const [animation, setAnimation] = useState(false);

  const cartHandler = (e) => {
    e.preventDefault();
    toast.success("Item Added to Cart");
    dispatch(addItemsToCart(item._id, 1));
    setAnimation(true);
    setTimeout(() => {
      setAnimation(false);
    }, 1000);
  };
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
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">{item.brand}</p>
          <div className="flex items-center space-x-1 bg-green-700 text-white text-xs font-semibold px-2 py-1 rounded-lg">
            <span>{item.ratings}</span>
            <FaStar />
          </div>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div>
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
                </span>
              </>
            ) : null}
          </div>
          <div
            className="relative flex items-center cursor-pointer"
            onClick={cartHandler}
          >
            <BsCartFill
              className={`mr-1 cursor-pointer transition-transform duration-300 text-xl ${
                animation ? "animate-moveBack" : ""
              }`}
            />
            {animation && (
              <FaParachuteBox className="absolute text-xl animate-fallIn" />
            )}
            <span>Add</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
