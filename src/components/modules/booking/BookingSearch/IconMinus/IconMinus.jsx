import React from "react";

const IconMinus = ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 24 24"
    >
      <g fill="none">
        <path
          d="M4 4.001h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-14Z"
          opacity=".16"
        />
        <path
          stroke="#01739F"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12h6M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4Z"
        />
      </g>
    </svg>
  );
};

export default IconMinus;
