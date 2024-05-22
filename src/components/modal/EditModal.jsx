import { useEffect, useState } from "react";
import Modal from "./Modal";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ArrowRight } from "lucide-react";
import { updateTask } from "../../redux/task/taskAction";

let obj = {
  title: "",
  discription: "",
  priority: "",
  status: "",
  category: "",
};

let EditModal = ({ isOpen, setIsOpen, id }) => {
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
    dispatch(updateTask(task, token)).then((res) => {
      // console.log(res);
      res && setIsOpen(false);
    });
    // console.log(task);
  };

  useEffect(() => {
    let newTask = tasks.find((ele) => ele._id === id);
    setTask(newTask);
  }, []);

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
              {/* <svg
                className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg> */}
              {/* <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Are you sure you want to logout?
               
              </h3> */}
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
                        name="description"
                        value={task?.description}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="description"
                      ></textarea>
                    </div>
                  </div>
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
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                    >
                      Update <ArrowRight className="ml-2" size={16} />
                    </button>
                  </div>
                </div>
              </form>
              {/* <button
                // onClick={""}
                data-modal-hide="popup-modal"
                type="button"
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              >
                Yes, I'm sure
              </button> */}
              {/* <button
                onClick={() => setIsOpen(false)}
                data-modal-hide="popup-modal"
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                No, cancel
              </button> */}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default EditModal;
