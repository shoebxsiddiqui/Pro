import React from "react";
import CartItem from "./CartItem.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { removeItemsFromCart } from "../../actions/cartAction.js";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const alert = useAlert();
  const dispatch = useDispatch();

  const orderHandler = (e) => {
    alert.success("Order placed successfully");
    cartItems.map((item) => dispatch(removeItemsFromCart(item.product)));
    navigate("/");
  };
  return (
    <div className="flex justify-center m-5 gap-5">
      <div className="bg-white shadow-lg rounded-md w-6/12">
        <div className="flex flex-col min-h-60">
          {cartItems.map((item) => (
            <CartItem item={item} />
          ))}
        </div>
        <div className="sticky flex flex-row-reverse items-center pr-5 bottom-0 h-20 bg-white shadow-lg rounded-md">
          <button
            className="uppercase w-56 p-3 h-12 bg-[#fb641b] font-medium rounded-sm text-lg text-white"
            onClick={orderHandler}
          >
            Place Order
          </button>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-sm w-3/12 h-fit">
        <div className="p-4 font-medium text-gray-500 pl-6">PRICE DETAILS</div>
        <hr />
        <div className="flex p-2 pl-6 pr-6 font-medium text-gray-700">
          <div>Price</div>
          <div className="ml-auto">
            ₹
            {cartItems.reduce(
              (acc, item) => acc + item.price * item.quantity,
              0
            )}
          </div>
        </div>
        <div className="flex p-2 pl-6 pr-6 font-medium text-gray-700">
          <div>Discount</div>
          <div className="ml-auto text-green-600">
            {cartItems.length !== 0 ? "-" : ""}₹
            {cartItems.reduce(
              (acc, item) =>
                acc +
                (item.price * item.quantity -
                  item.discountPrice * item.quantity),
              0
            )}
          </div>
        </div>
        <div className="flex p-2 pl-6 pr-6 font-medium text-gray-700">
          <div>Delivery Charges</div>
          <div className="ml-auto">
            {cartItems.length !== 0 ? "+₹50" : "₹0"}
          </div>
        </div>
        <hr />
        <div className="flex p-4 pl-6 pr-6 font-bold text-lg">
          <div>Total Amount</div>
          <div className="ml-auto">
            ₹
            {cartItems.length !== 0
              ? cartItems.reduce(
                  (acc, item) => acc + item.discountPrice * item.quantity,
                  0
                ) + 50
              : 0}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
