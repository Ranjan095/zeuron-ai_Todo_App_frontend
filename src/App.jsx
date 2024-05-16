import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import { getTaskData } from "./redux/task/taskAction";

function App() {
  let { token } = useSelector((store) => store.authReducer);
  let { tasks } = useSelector((store) => store.taskReducer);
  console.log(tasks);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTaskData(token));
  }, []);

  return (
    <div>
      <h1 className=" font-bold text-3xl"> hello RAnjan</h1>
    </div>
  );
}

export default App;
