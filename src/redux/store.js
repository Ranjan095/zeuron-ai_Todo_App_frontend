import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import taskReducer from "./task/taskReducer";
import authReducer from "./auth/authReducer";

let rootReducer = combineReducers({
  taskReducer,
  authReducer,
});

let store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
