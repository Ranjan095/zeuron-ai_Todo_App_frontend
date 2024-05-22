import { ArrowRight, Edit, Edit2 } from "lucide-react";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Modal from "../modal/Modal";
import EditModal from "../modal/EditModal";

const TasksList = ({ _id, title, status }) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let [isOpen, setIsOpen] = useState(false);

  let handleSearchParams = (id) => {
    setSearchParams({ id });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  let handleModal = () => {
    setIsOpen(true);
    toggleMenu();
  };

  return (
    <>
      <div
        className={`${
          searchParams.get("id") === _id ? "bg-gray-200" : ""
        } flex flex-col lg:flex-row justify-between items-center border-2 m-2 rounded-md p-2 hover:bg-gray-200`}
      >
        <div
          onClick={() => {
            handleSearchParams(_id);
          }}
          className="w-full lg:w-4/5 h-full p-2 cursor-pointer"
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
          <button
            type="button"
            onClick={handleModal}
            className="h-full w-full lg:w-auto flex justify-center items-center p-2 lg:p-0"
          >
            <Edit2 size={20} />
          </button>
        </div>
      </div>
      {isOpen && <EditModal isOpen={isOpen} setIsOpen={setIsOpen} id={_id} />}
    </>
  );
};

export default TasksList;
