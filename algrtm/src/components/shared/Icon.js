import React from "react";

const Icon = ({ src, alt, ...rest }) => {
  return <img src={src} alt={alt} {...rest} className="flex-end" />;
};

export default Icon;
