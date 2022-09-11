import { errorHandler } from "./shared";
import * as Types from "../types";
import { showToast } from "./toast";

import { getProductsOfSeller } from "../../services/api";

export const loadSellerProductsInit = () => ({
  type: Types.LOAD_SELLER_PRODUCT_INIT
});

export const loadSellerProductsError = (error) => (
  dispatch,
  getState
) => {
  dispatch(showToast({ title: 'Error', text: error }));
  dispatch({
    type: Types.LOAD_SELLER_PRODUCT_ERROR,
    payload: error,
  });
}

export const loadSellerProductsSuccess = (products) => ({
  type: Types.LOAD_SELLER_PRODUCT_SUCCESS,
  payload: products
});

export const loadSellerProducts = (sellerId, params, callback) => async (
  dispatch,
  getState
) => {
  dispatch(loadSellerProductsInit())
  errorHandler(
    async (sellerId, params, callback) => {
      // const response = await axios.get(`/seller/${seller_id}/orders?${strParams}`);
      const products = await getProductsOfSeller(sellerId, params);
      console.log("PRODUCTS", products);

      dispatch(loadSellerProductsSuccess(products));
      if (callback) callback();
    },
    loadSellerProductsError,
    dispatch,
  )(sellerId, params, callback);
};
