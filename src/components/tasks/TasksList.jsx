import { ArrowRight, Edit, Edit2 } from "lucide-react";
import React from "react";
import { useSearchParams } from "react-router-dom";

const TasksList = ({ _id, title, status }) => {
  let [searchParams, setSearchParams] = useSearchParams();

  let handleSearchParams = (id) => {
    setSearchParams({ id });
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center border-2 m-2 rounded-md p-2">
      <div
        onClick={() => {
          handleSearchParams(_id);
        }}
        className="w-full lg:w-4/5 h-full hover:bg-gray-200 p-2 cursor-pointer"
      >
        <h1 className="font-bold">{title}</h1>
        <div className="flex justify-start lg:justify-center items-center mt-2 lg:mt-0">
          <p className="mr-1">Status:</p>
          <p
            className={`${
              status === "pending"
                ? "text-red-400"
                : "text-green-800 font-semibold"
            }`}
          >
            {status}
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/5 h-full flex justify-center lg:justify-end mt-2 lg:mt-0 ">
        <button className="h-full w-full lg:w-auto flex justify-center items-center p-2 lg:p-0">
          <Edit2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default TasksList;
