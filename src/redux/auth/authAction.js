/** FOR LOGIN */
import axios from "axios";
import { basicApiUrl } from "../../utils/url";
import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_ERROR,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "./authType";
import { toastError, toastSuccess } from "../../utils/toast";

export let loginUser = (data) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  return axios
    .post(`${basicApiUrl}/user/login`, data)
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      // console.log(res);
      toastSuccess("Login successful");
      return res;
    })
    .catch((err) => {
      dispatch({ type: LOGIN_ERROR });
      console.log(err);
      toastError(err?.response?.data?.error);
      return err;
    });
};

/** FOR SIGNUP */
export let signUpUser = (data) => (dispatch) => {
  dispatch({ type: SIGNUP_REQUEST });
  return axios
    .post(`${basicApiUrl}/user/create`, data)
    .then((res) => {
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
      toastSuccess("User created successfully");
      return res.data;
    })
    .catch((err) => {
      dispatch({ type: SIGNUP_ERROR });
      console.log(err);
      toastError("Something went wrong");
      return err;
    });
};
