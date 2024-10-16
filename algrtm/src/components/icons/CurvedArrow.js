import React from "react";

const CurvedArrow = ({ color, className }) => {
  return (
    <svg
      width="45"
      height="36"
      viewBox="0 0 45 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g id="Group 72">
        <path
          id="Ellipse 5"
          d="M5.62507 27.3323C7.31943 21.0089 11.1539 15.4686 16.4753 11.6554C21.7966 7.84216 28.2754 5.99202 34.8079 6.42019C37.9711 6.62751 41.0521 7.36283 43.9313 8.57429"
          stroke={color}
          strokeWidth="2.08134"
          strokeLinejoin="round"
        />
        <path
          id="Vector 2"
          d="M4.66182 27.5814L3.65661 27.8507C3.80537 28.4059 4.37601 28.7354 4.93117 28.5866L4.66182 27.5814ZM-0.00520232 14.1846L3.65661 27.8507L5.66703 27.312L2.00522 13.6459L-0.00520232 14.1846ZM4.93117 28.5866L18.5973 24.9248L18.0586 22.9144L4.39248 26.5762L4.93117 28.5866Z"
          fill={color}
        />
      </g>
    </svg>
  );
};

export default CurvedArrow;
