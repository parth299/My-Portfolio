import React from "react";
import github from "./github.png";

export const ProjectItem = (props) => {
  return (
    <div className="max-w-sm w-[95%] h-[90%] font-pixel border border-gray-200 rounded-lg shadow-2xl bg-[#dcdce4]">
      <a href="#">
        <img className="rounded-t-lg" src={props.image} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl lg:text-4xl font-bold tracking-tight text-gray-900 ">
            {props.title}
          </h5>
        </a>
        <p className="mb-3 text-black font-black">
          {props.about}
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Source Code
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};
