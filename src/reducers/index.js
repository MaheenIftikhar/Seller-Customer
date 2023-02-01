import { combineReducers } from "redux";

import auth from "./auth";
import category from "./category";
import products from "./products";

const rootReducer = combineReducers({
  user: auth,
  categories: category,
  products: products,
});
export default rootReducer;
