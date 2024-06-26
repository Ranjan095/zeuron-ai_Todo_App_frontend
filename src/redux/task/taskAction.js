import axios from "axios";
import { basicApiUrl } from "../../utils/url";
import {
  DELETE_TASK_REQUEST,
  DELETE_TASK_SUCCESS,
  GET_TASK_REQUEST,
  GET_TASK_SUCCESS,
  POST_TASK_ERROR,
  POST_TASK_REQUEST,
  POST_TASK_SUCCESS,
  UPDATE_TASK_ERROR,
  UPDATE_TASK_REQUEST,
  UPDATE_TASK_SUCCESS,
} from "./taskActionType";
import { toastError, toastSuccess } from "../../utils/toast";

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

export let deleteTask = (id, token) => (dispatch) => {
  dispatch({ type: DELETE_TASK_REQUEST });
  return axios
    .delete(`${basicApiUrl}/tasks/delete-task?taskId=${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      toastSuccess("Task deleted successfully");
      dispatch({ type: DELETE_TASK_SUCCESS, payload: id });
      return res;
    })
    .catch((err) => {
      toastError("Something went wrong");
      console.log(err);
    });
};

export let postTask = (data, token) => (dispatch) => {
  dispatch({ type: POST_TASK_REQUEST });
  return axios
    .post(`${basicApiUrl}/tasks/create`, data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      toastSuccess("Task created successfully");
      dispatch({ type: POST_TASK_SUCCESS, payload: res?.data?.data });
      return res?.data?.data;
    })
    .catch((err) => {
      toastError("Something went wrong");
      dispatch({ type: POST_TASK_ERROR });
      console.log(err);
    });
};
