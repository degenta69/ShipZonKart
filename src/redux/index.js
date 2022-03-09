import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers/rootReducers";

export const store = createStore(reducer, {}, applyMiddleware(thunk));
