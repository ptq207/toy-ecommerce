import { showToast } from './toast';
import * as Types from '../types';
import qs from 'qs';

import { getOrdersOfSeller } from "../../services/api";
import { errorHandler } from "./shared";

export const loadSellerOrdersInit = () => ({
  type: Types.LOAD_SELLER_ORDER_INIT
});

export const loadSellerOrdersSuccess = (orders) => ({
  type: Types.LOAD_SELLER_ORDER_SUCCESS,
  payload: orders
});

export const loadSellerOrderError = (error) => (
  dispatch,
  getState,
) => {
  dispatch(showToast({ title: 'Error', text: error }));
  dispatch({
    type: Types.LOAD_SELLER_ORDER_ERROR,
    payload: error,
  });
};

export const loadSellerOrders = (sellerId, params, callback) => async (
  dispatch,
  getState,
) => {
  dispatch(loadSellerOrdersInit())
  errorHandler(
    async(sellerId, params, callback) => {  
      // const response = await axios.get(`/seller/${seller_id}/orders?${strParams}`);
      const orders = await getOrdersOfSeller(sellerId, params);
      console.log("ORDERS", orders);

      dispatch({
        type: Types.LOAD_SELLER_ORDER_SUCCESS,
        payload: orders
      });
      if (callback) callback();
    },
    loadSellerOrderError,
    dispatch,
  )(sellerId, params, callback);
};