import {
  GET_TASK_ERROR,
  GET_TASK_REQUEST,
  GET_TASK_SUCCESS,
} from "./taskActionType";

let initialState = {
  tasks: [],
  isLoading: false,
  isError: false,
};

let taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TASK_REQUEST: {
      return { ...state, isLoading: true };
    }
    case GET_TASK_SUCCESS: {
      return { ...state, isLoading: false, tasks: payload };
    }
    case GET_TASK_ERROR: {
      return { ...state, isLoading: false, isError: true };
    }
    default:
      return state;
  }
};

export default taskReducer;
