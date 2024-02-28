import React from "react";

const Icon = ({ src, alt, ...rest }) => {
  return (
    <img
      src={src}
      alt={alt}
      {...rest}
      className="flex-end"
      style={{ width: "16px", height: "16px" }}
    />
  );
};

export default Icon;
