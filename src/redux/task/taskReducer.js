import {
  GET_TASK_ERROR,
  GET_TASK_REQUEST,
  GET_TASK_SUCCESS,
  UPDATE_TASK_ERROR,
  UPDATE_TASK_REQUEST,
  UPDATE_TASK_SUCCESS,
} from "./taskActionType";

let initialState = {
  tasks: [],
  isLoading: false,
  isError: false,
  isUpdating: false,
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
    case UPDATE_TASK_REQUEST: {
      return { ...state, isUpdating: true };
    }
    case UPDATE_TASK_SUCCESS: {
      sessionStorage.removeItem(payload._id);
      let updatedTaskes = state.tasks.map((task) => {
        if (task._id === payload._id) {
          return payload;
        } else {
          return task;
        }
      });

      return {
        ...state,
        isUpdating: false,
        tasks: [...updatedTaskes],
      };
    }
    case UPDATE_TASK_ERROR: {
      return { ...state, isUpdating: false };
    }
    default:
      return state;
  }
};

export default taskReducer;
