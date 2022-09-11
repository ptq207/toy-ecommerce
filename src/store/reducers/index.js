import productsReducer from './productsReducer';
import headerReducer from './headerReducer';
import likedReducer from './likedReducer';
import cartReducer from './cartReducer';
import productDetailsReducer from './productDetailsReducer';
import toastReducer from './toastReducer';
import authReducer from './authReducer';
import sellerOrdersReducer from './sellerOrderReducer';
import sellerProductsReducer from './sellerProductsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  productsReducer,
  headerReducer,
  likedReducer,
  cartReducer,
  productDetailsReducer,
  toastReducer,
  authReducer,
  sellerOrdersReducer,
  sellerProductsReducer
});

export default rootReducer;
