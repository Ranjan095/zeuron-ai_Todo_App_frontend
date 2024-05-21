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

export let loginUser = (data) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  return axios
    .post(`${basicApiUrl}/user/login`, data)
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      // console.log(res.data);
    })
    .catch((err) => {
      dispatch({ type: LOGIN_ERROR });
      console.log(err.response.data);
    });
};

/** FOR SIGNUP */
export let signUpUser = (data) => (dispatch) => {
  dispatch({ type: SIGNUP_REQUEST });
  return axios
    .post(`${basicApiUrl}/user/create`, data)
    .then((res) => {
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
      return res.data;
    })
    .catch((err) => {
      dispatch({ type: SIGNUP_ERROR });
      console.log(err);
      return err;
    });
};
