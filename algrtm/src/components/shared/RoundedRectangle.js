import React from "react";

const RoundedRectangle = () => {
  return (
    <div className="relative w-full h-[2rem] md:h-[6.25rem] bg-neutralLight-neutral10">
      <div className="absolute bottom-0 left-0 w-full h-full bg-neutralLight-neutral100 dark:bg-neutralDark-neutral100 rounded-b-[5.875rem]"></div>
    </div>
  );
};

export default RoundedRectangle;
