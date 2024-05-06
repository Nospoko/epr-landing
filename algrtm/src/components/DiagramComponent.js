import React from "react";
import CustomIcon from "./shared/CustomIcon";

const DiagramComponent = () => {
  return (
    <section className="w-full md:px-[5.875rem] ">
      <div className=" bg-neutralLight-neutral10 w-full flex flex-col text-center items-center p-[2.75rem] md:py-[5.88rem] md:px-[6.75rem] rounded-[2rem] text-neutralLight-neutral100">
        <div className="h4 ">How do we work?</div>
        <div className="h6_600 my-[1.5rem]">
          Collecting data from the company
        </div>
        <CustomIcon
          name="ArrowDownLong"
          className="transition-transform duration-300 transform hover:scale-125"
          color="white"
        />
        <div className="h6_600 my-[1.5rem]">First Principles Analysis</div>
        <div className="h6_600 my-[1.5rem]">Evidence Based Decisions</div>
        <CustomIcon
          name="ArrowDownLong"
          className="transition-transform duration-300 transform hover:scale-125"
          color="white"
        />
        <div className="h6_600 my-[1.5rem]">Working on specific solution</div>
      </div>
    </section>
  );
};

export default DiagramComponent;
