import React from "react";

const CustomLink = ({ text, href, variant, alt, customIcon, target, rel }) => {
  let linkClass =
    "flex justify-center items-center select-none text-sm font-medium font-semibold px-5 py-2 h-[2.75rem] rounded-md transition ease-in-out duration-300 animationSmall";

  if (variant === "primary") {
    linkClass +=
      " border border-neutralLight-neutral40 dark:border-neutralDark-neutral40 bg-neutralLight-neutral10 dark:bg-neutralDark-neutral10 text-neutralLight-neutral100 dark:text-neutralDark-neutral100";
  } else if (variant === "secondary") {
    linkClass +=
      " border border-neutralLight-neutral80 dark:border-neutralDark-neutral80 bg-neutralLight-neutral100 dark:bg-neutralDark-neutral100 text-neutralLight-neutral10 dark:text-neutralDark-neutral10";
  } else if (variant === "tertiary") {
    linkClass +=
      " border border-neutralLight-neutral20 dark:border-neutralDark-neutral90 bg-neutralLight-neutral10 dark:bg-neutralDark-neutral90 text-neutralLight-neutral100 dark:text-neutralLight-neutral100  hover:bg-neutralLight-neutral20 pressed:bg-neutralLight-neutral40 inactive:bg-neutralLight-neutral10";
  } else if (variant === "quaternary") {
    linkClass +=
      "  bg-neutralLight-neutral100 dark:bg-neutralDark-neutral100 text-neutralLight-neutral10 dark:text-neutralDark-neutral10 pl-0";
  } else if (variant === "quinary") {
    linkClass +=
      " border border-neutralLight-neutral80 dark:border-neutralDark-neutral80 bg-neutralLight-neutral100 text-neutralLight-neutral10 ";
  } else if (variant === "sixth") {
    linkClass +=
      " border border-neutralLight-neutral80  bg-transparent text-neutralLight-neutral100 ";
  }

  return (
    <a className={linkClass} href={href} target={target} rel={rel}>
      {text}
      {customIcon && <span className="ml-[0.01rem]">{customIcon}</span>}
    </a>
  );
};

export default CustomLink;
