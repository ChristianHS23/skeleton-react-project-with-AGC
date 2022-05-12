import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import exampleActions from "./exampleActions";
import exampleActions2 from "./exampleActions2";

import exampleAction from "./exampleAction";

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    exampleActions,
    exampleActions2,
    exampleAction,
  });
