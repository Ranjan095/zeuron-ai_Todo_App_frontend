import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS } from "./authType";

let initialState = {
  isAuth: JSON.parse(localStorage.getItem("token")) ? true : false,
  token: JSON.parse(localStorage.getItem("token")),
  isLoading: false,
  isError: false,
};

let authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST: {
      return { ...state, isLoading: true };
    }
    case LOGIN_SUCCESS: {
      localStorage.setItem("token", JSON.stringify(payload.token));
      return { ...state, isLoading: false, token: payload.token, isAuth: true };
    }
    case LOGIN_ERROR: {
      return { ...state, isLoading: false, isError: true };
    }
    default:
      return state;
  }
};

export default authReducer;
