import axios from "axios";
import { basicApiUrl } from "../../utils/url";
import { GET_TASK_REQUEST, GET_TASK_SUCCESS } from "./taskActionType";

export let getTaskData = (token) => (dispatch) => {
  dispatch({ type: GET_TASK_REQUEST });
  return axios
    .get(`${basicApiUrl}/tasks/all-tasks`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      dispatch({ type: GET_TASK_SUCCESS, payload: res?.data?.data });
    //   console.log(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
