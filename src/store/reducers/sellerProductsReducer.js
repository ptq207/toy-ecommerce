import * as Types from "../types";

const initState = {
	isLoading: false,
  error: null,
  products: []
}

const sellerProductsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case Types.LOAD_SELLER_PRODUCT_INIT:
      return {
        ...state,
        isLoading: true
      };
    case Types.LOAD_SELLER_PRODUCT_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload
      };
    case Types.LOAD_SELLER_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        products: payload
      };
    default:
      return state;
  }
};

export default sellerProductsReducer;