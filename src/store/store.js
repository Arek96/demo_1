import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./../reducers/reducer";
import { combineReducers } from "redux";
export const store = createStore(reducer, applyMiddleware(thunk));
