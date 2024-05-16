import React from "react";

const StarEmpty = ({ color, className }) => {
  return (
    <svg
      width="14"
      height="15"
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g id="star">
        <path
          id="Vector"
          d="M7.00033 1.5L8.80283 5.15167L12.8337 5.74083L9.91699 8.58167L10.6053 12.595L7.00033 10.6992L3.39533 12.595L4.08366 8.58167L1.16699 5.74083L5.19783 5.15167L7.00033 1.5Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="dark:stroke-white"
        />
      </g>
    </svg>
  );
};

export default StarEmpty;
