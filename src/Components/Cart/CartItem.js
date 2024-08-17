import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItemsToCart, removeItemsFromCart } from "../../actions/cartAction";
import { useAlert } from "react-alert";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const [quantity, setQuantity] = useState(item.quantity);

  useEffect(() => {
    dispatch(addItemsToCart(item.product, quantity));
  }, [dispatch, quantity, item.product]);

  const removeHandler = (e) => {
    e.preventDefault();
    alert.success("Item removed successfully");
    dispatch(removeItemsFromCart(item.product));
  };

  const minusHandler = () => {
    setQuantity(quantity - 1);
  };

  const plusHandler = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div>
      <div className="flex m-5 flex-col">
        <div className="flex gap-5 mb-5">
          <img className="h-36" src={item.image} alt={item.title}></img>
          <div className="max-w-[300px]">
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
                ₹ {item.discountPrice}
              </span>
              {item.discount !== 0 ? (
                <>
                  <span className="text-sm text-gray-500 line-through ml-2">
                    ₹ {item.price}
                  </span>
                  <span className="text-sm text-green-600 ml-2">
                    {item.discount}% off
                  </span>
                </>
              ) : null}
            </div>
          </div>
        </div>
        <div className="flex font-medium gap-5">
          <div>
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
              className="border w-10 h-10 ml-2 mr-2 text-center"
              type="text"
              value={quantity}
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
          <button onClick={removeHandler}>REMOVE</button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CartItem;
