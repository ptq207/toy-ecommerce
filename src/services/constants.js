import { config } from './config';

const ApiName = {
  GET_PRODUCTS: config.baseURL + "/products",
  GET_SELLER_ORDERS: config.baseURL + "/seller/"
}

export {
  ApiName
}