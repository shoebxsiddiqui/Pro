import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItemsToCart, removeItemsFromCart } from "../../actions/cartAction";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(item.quantity);

  useEffect(() => {
    dispatch(addItemsToCart(item.product, quantity));
  }, [dispatch, quantity, item.product]);

  const removeHandler = (e) => {
    e.preventDefault();
    const removePromise = dispatch(removeItemsFromCart(item.product));
    toast.promise(removePromise, {
      pending: "Removing item...",
      success: "Item removed successfully",
      error: "Failed to remove item",
    });
  };

  const minusHandler = () => {
    setQuantity(quantity - 1);
  };

  const plusHandler = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="m-5">
      <div className="flex flex-col md:flex-row md:items-center md:gap-5 mb-5">
        <div className="flex-shrink-0 w-24 h-24">
          {" "}
          {/* Adjust size as needed */}
          <img
            className="w-full h-full object-contain" // Ensure image fits within the container without cropping
            src={item.image}
            alt={item.title}
          />
        </div>
        <div className="mt-3 md:mt-0 max-w-full md:max-w-[300px]">
          <h4
            className="text-lg font-semibold text-gray-800 truncate"
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            title={item.name}
          >
            {item.name}
          </h4>
          <p className="text-sm text-gray-500">{item.brand}</p>
          <div className="mt-2">
            <span className="text-lg font-bold text-gray-800">
              ₹{item.discountPrice}
            </span>
            {item.discount !== 0 && (
              <>
                <span className="text-sm text-gray-500 line-through ml-2">
                  ₹{item.price}
                </span>
                <span className="text-sm text-green-600 ml-2">
                  {item.discount}% off
                </span>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-5 font-medium">
        <div className="flex items-center gap-2">
          <button
            className={`border w-10 h-10 rounded-full ${
              quantity === 1 ? "cursor-default opacity-50" : ""
            }`}
            onClick={minusHandler}
            disabled={quantity === 1}
          >
            -
          </button>
          <input
            className="border w-10 h-10 text-center"
            type="text"
            value={quantity}
            readOnly
          />
          <button
            className={`border w-10 h-10 rounded-full ${
              quantity === item.stock ? "cursor-default opacity-50" : ""
            }`}
            onClick={plusHandler}
            disabled={quantity === item.stock}
          >
            +
          </button>
        </div>
        <button
          className="text-red-500 hover:text-red-700 transition duration-300"
          onClick={removeHandler}
        >
          REMOVE
        </button>
      </div>
      <hr className="mt-5" />
    </div>
  );
};

export default CartItem;
