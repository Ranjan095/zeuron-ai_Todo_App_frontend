import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import taskReducer from "./task/taskReducer";
import authReducer, { signupReducer } from "./auth/authReducer";

let rootReducer = combineReducers({
  taskReducer,
  authReducer,
  signupReducer,
});

let store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
