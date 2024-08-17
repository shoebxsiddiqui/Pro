import axios from "axios";

import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/productConstants";

import { DB_URL } from "../constants/backend";

export const getProducts = (obj) => async (dispatch) => {
  try {
    const {
      keyword = " ",
      page = 1,
      price = [1, 25000],
      ratings = 0,
      discount = 0,
      Stock = 1,
    } = obj;
    dispatch({ type: ALL_PRODUCT_REQUEST });
    let brands = [];
    if (obj.brands) brands = obj.brands.join(",");

    const link = `${DB_URL}/api/v1/products?keyword=${keyword}&page=${page}&price[gte]=${price[0]}&price[lte]=${price[1]}&brands=${brands}&ratings[gte]=${ratings}&discount[gte]=${discount}&Stock[gte]=${Stock}`;
    const { data } = await axios.get(link);
    dispatch({
      type: ALL_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
