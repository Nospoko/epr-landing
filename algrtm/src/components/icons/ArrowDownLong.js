import React from "react";

const ArrowDownLong = ({ color, className }) => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g id="Arrow-47">
        <g id="Group 1">
          <path
            id="Line 1"
            d="M24.5264 41.0713L24.5264 7.79912"
            stroke={color}
            strokeWidth="2.08134"
            strokeLinejoin="round"
          />
          <g id="Group 1_2">
            <path
              id="Line 1_2"
              d="M24.5264 41.0713L24.5264 8.83889"
              stroke={color}
              strokeWidth="2.08134"
              strokeLinejoin="round"
            />
            <path
              id="Vector 2"
              d="M30.7642 35.8721C28.3279 38.3084 26.9619 39.6743 24.5256 42.1106L18.2871 35.8721"
              stroke={color}
              strokeWidth="2.08134"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default ArrowDownLong;
