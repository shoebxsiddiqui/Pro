import axios from "axios";
import { ADD_TO_CART, REMOVE_CART_ITEM } from "../constants/cartConstants";
import { DB_URL } from "../constants/backend";

// Add to Cart
export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(`${DB_URL}/api/v1/product/${id}`);

  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: data.product._id,
      name: data.product.title,
      brand: data.product.brand,
      price: data.product.price,
      discount: data.product.discount,
      discountPrice: data.product.discountPrice,
      image: data.product.images,
      stock: data.product.Stock,
      quantity,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// Remove from Cart
export const removeItemsFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_CART_ITEM,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
