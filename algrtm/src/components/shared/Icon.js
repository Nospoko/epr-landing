import React from "react";

const Icon = ({ src, alt, onClick, ...rest }) => {
  return (
    <img src={src} alt={alt} onClick={onClick} {...rest} className="flex-end" />
  );
};

export default Icon;
