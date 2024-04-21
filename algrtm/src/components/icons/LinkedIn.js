import React from "react";

const LinkedIn = ({ color, className }) => {
  return (
    <svg
      width="45"
      height="44"
      viewBox="0 0 45 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g id="Frame 1321314552">
        <path
          id="Vector"
          d="M40.7969 0H3.29942C1.50036 0 0.0517578 1.42054 0.0517578 3.17067V40.8265C0.0517578 42.5787 1.50756 44 3.29942 44H40.7969C42.5916 44 44.0539 42.578 44.0539 40.8265V3.17067C44.0546 1.42054 42.5924 0 40.7969 0Z"
        />
        <path
          id="Vector_2"
          d="M6.57595 16.4958H13.1029V37.4944H6.57595V16.4958ZM9.84088 6.05762C10.8438 6.05857 11.8053 6.45749 12.5144 7.16679C13.2234 7.87609 13.6219 8.83778 13.6225 9.84068C13.6223 10.8438 13.2239 11.8059 12.5149 12.5155C11.8058 13.2251 10.844 13.6242 9.84088 13.6252C8.83711 13.6252 7.87443 13.2265 7.16458 12.5168C6.45474 11.8071 6.05585 10.8445 6.05566 9.84068C6.05624 8.83715 6.45528 7.87492 7.16509 7.16552C7.87489 6.45612 8.83735 6.05762 9.84088 6.05762ZM17.1954 16.4958H23.4547V19.3577H23.5411C24.4046 17.7069 26.5419 15.9661 29.7155 15.9661C36.3245 15.9661 37.545 20.3155 37.545 25.9689V37.4865H31.0245V27.2678C31.0245 24.8326 30.9799 21.7001 27.6329 21.7001C24.2363 21.7001 23.716 24.3526 23.716 27.0915V37.4793H17.1962V16.4807L17.1954 16.4958Z"
          fill={color}
          className="dark:fill-white"
        />
      </g>
    </svg>
  );
};

export default LinkedIn;
