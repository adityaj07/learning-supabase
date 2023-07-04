import React from "react";
import { FaStar } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { Link } from "react-router-dom";

const SmoothieCard = ({ smoothie }) => {
  return (
    <div className="block relative w-[20rem] h-[14rem]rounded-lg bg-red-200 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-red-200 rounded-2xl pb-24">
        <div className="absolute -top-3 -right-3 px-6 py-4 flex items-center gap-1 text-sm bg-red-700 text-white rounded-2xl">
            <FaStar/> <span>{smoothie.rating}</span>
        </div>
      <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-900">
        {smoothie.title}
      </h5>
      <p className="mb-4 text-base text-neutral-600 dark:text-neutral-900">
        {smoothie.method}
      </p>
      <Link to={"/" + smoothie.id}>
      <button
        type="button"
        className="inline-block absolute bottom-6 rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] bg-red-500"
        data-te-ripple-init=""
        data-te-ripple-color="light"
      >
         <span className="flex gap-2 items-center"><FaEdit/>Edit</span>
      </button>
      </Link>
    </div>
  );
};

export default SmoothieCard;
