import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import Reducer from "./reducers/index";

const middleware = [thunk, logger];

const store = createStore(
  Reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
