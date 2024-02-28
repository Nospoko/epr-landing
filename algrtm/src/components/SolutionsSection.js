import React from "react";
import Button from "./shared/Button";

const SolutionsSection = () => {
  return (
    <div className="bg-neutralLight-neutral10 w-full">
      <div className="pt-[14rem] pb-[7.75rem] flex flex-col justify-center items-center gap-11">
        <div className="text-neutralLight-neutral100 h2 flex  w-2/3 justify-center items-center text-center leading-[3.25rem]">
          Looking for <br />
          algorithmic solutions?
        </div>
        <div className=" flex gap-4 justify-center items-center">
          <Button variant="secondary" text="Let's talk"></Button>
          <Button variant="primary" text="Book a meeting"></Button>
        </div>
      </div>
    </div>
  );
};

export default SolutionsSection;
