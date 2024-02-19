import * as React from "react";
const SunIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.125rem"
    height="1.125rem"
    fill="none"
    {...props}
  >
    <g
      stroke="#1C1C1C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#a)"
    >
      <path d="M9 13.25a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5ZM9 1.25v1.5M9 16.25v1.5M3.165 3.665 4.23 4.73M13.77 14.27l1.065 1.065M.75 9.5h1.5M15.75 9.5h1.5M3.165 15.335 4.23 14.27M13.77 4.73l1.065-1.065" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 .5h18v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SunIcon;
