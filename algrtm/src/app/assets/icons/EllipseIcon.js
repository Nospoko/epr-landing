import * as React from "react";
const EllipseIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.5rem"
    height="1.5rem"
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <circle cx={22} cy={18.5} r={12} fill="#1C1C1C" />
    </g>
    <defs>
      <filter
        id="a"
        width={44}
        height={44}
        x={0}
        y={0.5}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2401_64" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_2401_64"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default EllipseIcon;
