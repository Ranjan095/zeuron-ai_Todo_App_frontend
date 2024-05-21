import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import { getTaskData } from "./redux/task/taskAction";
import TasksList from "./components/tasks/TasksList";
import TaskDetails from "./components/tasks/TaskDetails";

function App() {
  let { token } = useSelector((store) => store.authReducer);
  let { tasks } = useSelector((store) => store.taskReducer);
  // console.log(tasks);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTaskData(token));
  }, []);

  return (
    <div>
      <h1 className=" font-bold text-3xl">My Tasks</h1>
      <div className=" flex ">
        <div className=" w-[35%]">
          {tasks?.map((task) => {
            return <TasksList key={task._id} {...task} />;
          })}
        </div>
        <div className=" border-2 w-[60%] m-[5px] p-[5px]">
          <TaskDetails/>
        </div>
      </div>
    </div>
  );
}

export default App;
