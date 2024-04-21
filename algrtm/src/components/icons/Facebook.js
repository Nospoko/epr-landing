import React from "react";

const Facebook = ({ color, className }) => {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g id="facebook">
        <path
          id="Vector"
          d="M33.1 1H26.8C24.0152 1 21.3445 2.10625 19.3754 4.07538C17.4062 6.04451 16.3 8.71523 16.3 11.5V17.8H10V26.2H16.3V43H24.7V26.2H31L33.1 17.8H24.7V11.5C24.7 10.943 24.9212 10.4089 25.3151 10.0151C25.7089 9.62125 26.243 9.4 26.8 9.4H33.1V1Z"
          fill={color}
          className="dark:fill-white"
        />
      </g>
    </svg>
  );
};

export default Facebook;
