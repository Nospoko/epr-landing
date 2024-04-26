import React from "react";

const Pandas = ({ color, className, width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 65 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M23.3276 3.7832H30.3221V18.3071H23.3276V3.7832ZM23.3276 33.6172H30.3221V48.1405H23.3276V33.6172Z"
        className=" fill-[#252F3E] dark:fill-[#dee2e5]"
      />
      <path
        d="M23.3276 22.5464H30.3221V29.3986H23.3276V22.5464Z"
        className=" fill-[#252F3E] dark:fill-[#dee2e5]"
      />
      <path
        d="M12.0903 15.7231H19.0848V64.0002H12.0903V15.7231ZM34.3315 45.6005H41.3259V60.1238H34.3315V45.6005ZM34.3315 15.7403H41.3259V30.2641H34.3315V15.7403Z"
        className=" fill-[#252F3E] dark:fill-[#dee2e5]"
      />
      <path
        d="M34.3315 34.5059H41.326V41.3581H34.3315V34.5059Z"
        fill="#E70488"
      />
      <path
        d="M45.3335 0H52.3279V48.277H45.3335V0Z"
        className=" fill-[#252F3E] dark:fill-[#dee2e5]"
      />
    </svg>
  );
};

export default Pandas;
