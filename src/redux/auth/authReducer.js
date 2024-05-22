import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  SIGNUP_ERROR,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "./authType";

let initialState = {
  isAuth: JSON.parse(localStorage.getItem("token")) ? true : false,
  token: JSON.parse(localStorage.getItem("token")),
  name: JSON.parse(localStorage.getItem("name")),
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
      localStorage.setItem("name", JSON.stringify(payload.name));
      // console.log(payload);
      return {
        ...state,
        isLoading: false,
        name: payload.name,
        token: payload.token,
        isAuth: true,
      };
    }
    case LOGIN_ERROR: {
      return { ...state, isLoading: false, isError: true };
    }
    default:
      return state;
  }
};

export default authReducer;

let initialData = {
  isLoading: false,
  isError: false,
};

export let signupReducer = (state = initialData, { type, payload }) => {
  switch (type) {
    case SIGNUP_REQUEST: {
      return { ...state, isLoading: true };
    }
    case SIGNUP_SUCCESS: {
      return { ...state, isLoading: false };
    }
    case SIGNUP_ERROR: {
      return { ...state, isLoading: false, isError: true };
    }
    case LOGOUT_USER: {
      localStorage.removeItem("token");
      localStorage.removeItem("name");
      // console.log("logged out");
      return { ...state, isAuth: false, token: null, name: null };
    }

    default:
      return state;
  }
};
