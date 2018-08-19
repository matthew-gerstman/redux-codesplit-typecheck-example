import { combineReducers, createStore, Store } from "redux";
import { ReducerMap, StoreShape } from "./types";

let reducerMap: ReducerMap = {};

const store = createStore(combineReducers(reducerMap));

export function getStore() {
  return store;
}

export function registerReducer(newReducers: ReducerMap): Store<StoreShape> {
  reducerMap = { ...reducerMap, ...newReducers };

  // We probably want to validate we're not replacing reducers that already
  // exist here but that exercise is left up to the reader.

  store.replaceReducer(combineReducers(reducerMap));
  return store;
}
