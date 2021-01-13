import { createStore, applyMiddleware, compose } from "redux";
import ProductsReducer from "./Components/Products/Products.reducer.js";
import thunk from "redux-thunk";

const composeEnchancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  ProductsReducer,
  composeEnchancers(applyMiddleware(thunk))
);
export default store;
