import axios from 'axios';
import { config } from './config';

import * as _ from "lodash";

axios.defaults.headers.post['Content-Type'] = "application/json";

const getProducts= (params) => {
  // return get(config.baseURL + `/products`, params);
  return get('http://localhost:3004/products', params);
}

const getProductDetail = (productId) => {
  // return get(config.baseURL + `/products/${productId}`);
  return get(`http://localhost:3004/products/${productId}`);
}

const getOrdersOfSeller = (sellerId, params) => {
  // return get(config.baseURL + `/seller/${sellerId}/orders`, params);
  return get('http://localhost:3004/orders', params);
}

const getProductsOfSeller = (sellerId, params) => {
  // return get(config.baseURL + `/seller/${sellerId}/products`, params);
  return get('http://localhost:3004/products', params);
}

const getSellerInfo = (sellerId) => {
  return get(config.baseURL + `/seller/${sellerId}`);
}

const addSellerOrder = (sellerId, orderPayload) => {
  return post(config.baseURL + `/seller/${sellerId}/orders`, orderPayload);
}

const addSellerProduct = (sellerId, productPayload) => {
  return post(config.baseURL + `/seller/${sellerId}/products`, productPayload);
}

const updateSellerOrder = (sellerId, updatePayload) => {
  return put(config.baseURL + `/seller/${sellerId}/orders`, updatePayload);
}

const getAdverts = () => {
  // return get(config.baseURL + '/adverts');
  return get('http://localhost:3004/adverts');
}

const get = async (url, params) => {
  try {
    const response = await axios.get(url, {
      params
    });
    if (_.isNull(response) || _.isNull(response.data)) {
      return null;
    }
    return response.data;
  } catch (err) {
    console.log("Error: ", err);
    return null;
  }
}

const post = async (url, reqBody) => {
  try {
    return await axios.post(url, reqBody)
  } catch (err) {
    console.log("Error: ", err);
    return null;
  }
}

const put = async (url, reqBody) => {
  try {
    return await axios.put(url, reqBody)
  } catch (err) {
    console.log("Error: ", err);
    return null;
  }
}

export {
  getProducts,
  getProductDetail,
  getSellerInfo,
  getOrdersOfSeller,
  addSellerOrder,
  updateSellerOrder,
  getProductsOfSeller,
  addSellerProduct,
  getAdverts
}