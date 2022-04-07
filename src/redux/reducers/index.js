import {
  ProductReducer,
  SelectedProductReducer,
} from "../reducers/product_reducer";
import { combineReducers } from "redux";
const reducers = combineReducers({
  allProducts: ProductReducer,
  product: SelectedProductReducer,
});
export default reducers;
