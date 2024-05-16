import axios from "axios";
import { basicApiUrl } from "../../utils/url";
import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS } from "./authType";

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
