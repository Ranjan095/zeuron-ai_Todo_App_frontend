import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const TaskDetails = () => {
  let [searchParams] = useSearchParams();
  let [data, setData] = useState(null);

  let { tasks } = useSelector((store) => store.taskReducer);

  useEffect(() => {
    const taskId = searchParams.get("id");
    if (taskId) {
      // Check if the data is already in sessionStorage
      const storedData = sessionStorage.getItem(taskId);
      if (storedData) {
        setData(JSON.parse(storedData));
      } else {
        // If not, fetch from tasks and store in sessionStorage
        let newTask = tasks.find((ele) => ele._id === taskId);
        if (newTask) {
          setData(newTask);
          sessionStorage.setItem(taskId, JSON.stringify(newTask));
        }
      }
    }
  }, [searchParams, tasks]);

  return !data ? (
    <div>
      <h1>No data found</h1>
    </div>
  ) : (
    <div className={`text-left h-[100%] p-[20px] rounded-md ${data.status === "pending" ? " bg-red-100":" bg-green-100"}`}>
      <h1>Title : {data.title}</h1>
      <h1 className="font-semibold">Description : {data?.description}</h1>
      <h1 className="font-semibold">Status : {data?.status}</h1>
      <h1 className="font-semibold">Category : {data?.category}</h1>
      <h1 className="font-semibold">Prority : {data?.priority <= 5 ? "Low":"High"}</h1>
    </div>
  );
};

export default TaskDetails;
