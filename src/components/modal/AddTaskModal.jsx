import { useEffect, useState } from "react";
import Modal from "./Modal";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ArrowRight } from "lucide-react";
import { postTask, updateTask } from "../../redux/task/taskAction";

let obj = {
  title: "",
  discription: "",
  priority: "",
  status: "",
  category: "",
  deadline: "",
};

let AddTaskModal = ({ isOpen, setIsOpen, id }) => {
  let [task, setTask] = useState(obj);
  let { tasks } = useSelector((store) => store.taskReducer);
  let dispatch = useDispatch();
  let { token } = useSelector((store) => store.authReducer);
  let handleChange = (e) => {
    let { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postTask(task, token)).then((res) => {
      res && setIsOpen(false);
    });
  };

  return (
    <div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="relative w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-300">
            <button
              onClick={() => setIsOpen(false)}
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="popup-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              {/* <span className="sr-only">Close modal</span> */}
            </button>
            <div className="p-6 text-center">
              <form
                onSubmit={handleSubmit}
                action="#"
                method="POST"
                className="mt-8"
              >
                <div className="space-y-5">
                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Title{" "}
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        required
                        name="title"
                        value={task?.title}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="title"
                      ></input>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Description{" "}
                      </label>
                    </div>
                    <div className="mt-2">
                      <textarea
                        required
                        name="description"
                        value={task?.description}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="description"
                      ></textarea>
                    </div>
                  </div>
                  <div className=" flex justify-between">
                    {" "}
                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor=""
                          className="text-base font-medium text-gray-900"
                        >
                          {" "}
                          Category{" "}
                        </label>
                      </div>
                      <div className="mt-2">
                        <select
                          required
                          value={task?.category}
                          name="category"
                          onChange={handleChange}
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value={""}>select</option>
                          <option value={"study"}>study</option>
                          <option value={"work"}>work</option>
                          <option value={"helth"}>helth</option>
                          <option value={"travel"}>travel</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor=""
                          className="text-base font-medium text-gray-900"
                        >
                          {" "}
                          status{" "}
                        </label>
                      </div>
                      <div className="mt-2">
                        <select
                          required
                          value={task?.status}
                          name="status"
                          onChange={handleChange}
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value={""}>select</option>
                          <option value={"completed"}>completed</option>
                          <option value={"pending"}>pending</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className=" flex justify-between">
                    {" "}
                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor=""
                          className="text-base font-medium text-gray-900"
                        >
                          {" "}
                          priority{" "}
                        </label>
                      </div>
                      <div className="mt-2">
                        <select
                          required
                          value={task?.priority}
                          name="priority"
                          onChange={handleChange}
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value={""}>select</option>
                          <option value={0}>0</option>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                          <option value={6}>6</option>
                          <option value={7}>7</option>
                          <option value={8}>8</option>
                          <option value={9}>9</option>
                          <option value={10}>10</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className="flex items-center justify-between">
                          <label
                            htmlFor=""
                            className="text-base font-medium text-gray-900"
                          >
                            {" "}
                            Deadline{" "}
                          </label>
                        </div>
                        <div className="mt-2">
                          <input
                            name="deadline"
                            value={task?.deadline}
                            onChange={handleChange}
                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="date"
                          ></input>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                    >
                      Add Task <ArrowRight className="ml-2" size={16} />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default AddTaskModal;
