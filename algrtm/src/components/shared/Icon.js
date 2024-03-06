import React from "react";

const Icon = ({ src, alt, onClick, width, height, ...rest }) => {
  return (
    <img
      src={src}
      alt={alt}
      onClick={onClick}
      width={width}
      height={height}
      {...rest}
      className="flex-end"
    />
  );
};

export default Icon;
