import React from "react";

const ArrowUpRight = ({ color, className }) => {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        id="Vector"
        d="M5.5 11.9665L12.1667 5.2998"
        stroke={color}
        stroke-width="2"
        stroke-linejoin="round"
        className="dark:stroke-white"
      />
      <path
        id="Vector_2"
        d="M5.5 5.2998H12.1667V11.9665"
        stroke={color}
        stroke-width="2"
        className="dark:stroke-white"
      />
    </svg>
  );
};

export default ArrowUpRight;
