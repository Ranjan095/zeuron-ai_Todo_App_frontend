import axios from "axios";
import { basicApiUrl } from "../../utils/url";
import {
  GET_TASK_REQUEST,
  GET_TASK_SUCCESS,
  UPDATE_TASK_ERROR,
  UPDATE_TASK_REQUEST,
  UPDATE_TASK_SUCCESS,
} from "./taskActionType";
import { toastSuccess } from "../../utils/toast";

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

export let updateTask = (data, token) => (dispatch) => {
  // console.log(data, token);
  dispatch({ type: UPDATE_TASK_REQUEST });
  return axios
    .patch(`${basicApiUrl}/tasks/update-task?taskId=${data._id}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      dispatch({ type: UPDATE_TASK_SUCCESS, payload: res?.data?.updatedTask });
      toastSuccess("your Task has been updated");
      return res?.data?.updatedTask;
    })
    .catch((err) => {
      dispatch({ type: UPDATE_TASK_ERROR });
      console.log(err);
    });
};
