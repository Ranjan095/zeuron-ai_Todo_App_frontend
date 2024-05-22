import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect, useState } from "react";
import { getTaskData } from "./redux/task/taskAction";
import TasksList from "./components/tasks/TasksList";
import TaskDetails from "./components/tasks/TaskDetails";
import { Plus } from "lucide-react";
import AddTaskModal from "./components/modal/AddTaskModal";

function App() {
  let { token } = useSelector((store) => store.authReducer);
  let { tasks } = useSelector((store) => store.taskReducer);

  let [isOpen, setIsOpen] = useState(false);
  // console.log(tasks);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTaskData(token));
  }, []);

  let handleAddTask=()=>{
    setIsOpen(true)
  }

  return (
    <div>
      <h1 className=" font-bold text-3xl">My Tasks</h1>
      <div className=" flex ">
        <div className=" w-[35%]">
          <div>
            <button
              onClick={handleAddTask}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            >
              <Plus size={20} />
              <span>Add task</span>
            </button>
          </div>
          {tasks?.map((task) => {
            return <TasksList key={task._id} {...task} />;
          })}
        </div>
        <div className=" border-2 w-[60%] m-[5px] p-[5px]">
          <TaskDetails />
        </div>
      </div>
      {isOpen && <AddTaskModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
}

export default App;
