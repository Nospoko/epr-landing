import React from "react";

const Menu = ({ color, className }) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g id="menu">
        <path
          id="Vector"
          d="M3 12.5H21"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="dark:stroke-white"
        />
        <path
          id="Vector_2"
          d="M3 6.5H21"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="dark:stroke-white"
        />
        <path
          id="Vector_3"
          d="M3 18.5H21"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="dark:stroke-white"
        />
      </g>
    </svg>
  );
};

export default Menu;
