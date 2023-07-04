import React from "react";
import { FaStar } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const SmoothieCard = ({ smoothie, onDelete }) => {
  return (
    <div className="block relative w-[20rem] h-[14rem] rounded-lg bg-red-200 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-red-200 rounded-2xl pb-24">
      <div className="absolute -top-3 -right-3 px-6 py-4 flex items-center gap-1 text-sm bg-red-700 text-white rounded-2xl">
        <FaStar /> <span>{smoothie.rating}</span>
      </div>
      <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-900">
        {smoothie.title}
      </h5>
      <p className="mb-4 text-base text-neutral-600 dark:text-neutral-900">
        {smoothie.method}
      </p>
      <div className="absolute bottom-4 w-[80%]">
        <div className="flex justify-between items-center">
          <Link to={"/" + smoothie.id}>
            <button
              type="button"
              className="outline-none px-4 py-2 bg-red-500 text-white rounded w-fit"
            >
              <span className="flex gap-2 items-center">
                <FaEdit />
                Edit
              </span>
            </button>
          </Link>
          <button
            onClick={onDelete}
            type="button"
            className="outline-none p-4 bg-red-500 text-white rounded-2xl w-fit"
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SmoothieCard;
