import React from "react";

const Icon = ({ src, alt, onClick, width, height, ...rest }) => {
  return (
    <img
      src={src}
      alt={alt}
      onClick={onClick}
      {...rest}
      className={`dark:fill-neutralLight-neutral100 flex-end width-[${width}px] height-[${height}px]`}
    />
  );
};

export default Icon;
