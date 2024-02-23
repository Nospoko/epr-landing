import React from "react";

const Button = ({ text, onClick, variant, href }) => {
  let buttonClass =
    "flex justify-center items-center select-none text-sm font-medium px-5 py-2 h-10 gap-4 rounded-md ";

  if (variant === "primary") {
    buttonClass +=
      " border border-neutralLight-neutral40 bg-neutralLight-neutral10 text-neutralLight-neutral100";
  } else if (variant === "secondary") {
    buttonClass +=
      " border border-neutralLight-neutral80 bg-neutralLight-neutral100 text-neutralLight-neutral10";
  }

  return (
    <button type="button" className={buttonClass} onClick={onClick} href={href}>
      {text}
    </button>
  );
};

export default Button;
