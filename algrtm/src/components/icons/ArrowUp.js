import React from "react";

const ArrowUp = ({ color, className }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g id="arrow-up-right">
        <g id="Group 45">
          <path
            id="Vector"
            d="M9.58494 15.5185V3.73342"
            stroke={color}
            stroke-width="2"
            stroke-linejoin="round"
            className="dark:stroke-white"
          />
          <path
            id="Vector_2"
            d="M3.69238 9.62598L9.58494 3.73342L15.4775 9.62598"
            stroke={color}
            stroke-width="2"
            className="dark:stroke-white"
          />
        </g>
      </g>
    </svg>
  );
};

export default ArrowUp;
