import React from "react";

const ArrowDown = ({ color, className }) => {
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
            d="M10.4151 4.48147V16.2666"
            stroke={color}
            strokeWidth="2"
            strokeLinejoin="round"
            className="dark:stroke-white"
          />
          <path
            id="Vector_2"
            d="M16.3076 10.374L10.4151 16.2666L4.5225 10.374"
            stroke={color}
            strokeWidth="2"
            className="dark:stroke-white"
          />
        </g>
      </g>
    </svg>
  );
};

export default ArrowDown;
