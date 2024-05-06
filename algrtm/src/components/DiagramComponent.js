import React from "react";
import CustomIcon from "./shared/CustomIcon";

const DiagramComponent = () => {
  return (
    <section className="w-full ">
      <div className=" bg-neutralLight-neutral10 w-full flex flex-col text-center items-center p-[2.75rem] lg:px-[2.75] lg:py-[4rem] xl:px-[6.75rem] xl:py-[5.88rem rounded-[2rem] text-neutralLight-neutral100 mb-[4rem] lg:mb-[7.19rem] ">
        <div className=" h4 lg:h2SB xl:h2 lg:mb-[1.5rem]">How do we work?</div>
        <div className=" flex flex-col lg:flex-row items-center">
          <div className=" h6 my-[1.5rem] max-w-[12.5rem]">
            Collecting data from the company
          </div>
          <CustomIcon
            name="ArrowDownLong"
            color="white"
            className="lg:-rotate-90"
          />
          <div className=" h6 my-[1.5rem] max-w-[12.5rem]">
            First Principles Analysis
          </div>
          {/* blue circle */}
          <div className=" bg-blueLight-blue40 rounded-full flex flex-col w-[19.875rem] h-[19.875rem] shrink-0 items-center justify-center relative">
            <CustomIcon
              name="CurvedArrow"
              color="white"
              className="absolute left-[6rem] top-9"
            />
            <div className="flex">
              <div className=" h6 max-w-[7.5rem]">
                Regular feedback sessions
              </div>
              <div className="flex items-end">
                <CustomIcon
                  name="ArrowDownLong"
                  color="white"
                  className="lg:-rotate-90"
                />
              </div>

              <div className=" h6 max-w-[8.6875rem]">
                Reaching the company goals
              </div>
            </div>
            <div className=" flex justify-end">
              <CustomIcon
                name="CurvedArrow"
                color="white"
                className="rotate-180 absolute right-[6rem] bottom-9"
              />
            </div>
          </div>
          <div className=" h6 my-[1.5rem] max-w-[8.25rem]">
            Evidence Based Decisions
          </div>
          <CustomIcon
            name="ArrowDownLong"
            color="white"
            className="lg:-rotate-90"
          />
          <div className=" h6 my-[1.5rem] max-w-[11.1875rem]">
            Working on specific solution
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagramComponent;
