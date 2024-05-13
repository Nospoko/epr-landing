import React from "react";
import CustomLink from "./shared/CustomLink";
import CustomIcon from "./shared/CustomIcon";

const OurWork = () => {
  return (
    <section className=" w-full flex flex-col justify-center items-center text-center gap-6 mt-[2.75rem] mx-[1rem] md:mt-[7.75rem] md:mx-[4.56rem] xl:mx-[5.88rem] bg-neutralLight-neutral100 dark:bg-neutralDark-neutral100">
      <h4 className="h4 lg:h2 text-neutralLight-neutral10 dark:text-neutralDark-neutral10">
        Our work
      </h4>
      <div className="flex flex-col items-center justify-center w-full lg:flex-row gap-[1.5rem] md:flex-row xl:gap-[2rem] mt-[2rem]">
        <div className=" flex flex-col justify-end items-center self-stretch pt-[9.29169rem] pb-[0.02081rem] rounded-[2rem] text-neutralLight-neutral100 bg-[url('/heavyIndustry-bg-image.jpeg')] w-full md:w-[20.25rem] h-[25rem] bg-center bg-cover">
          <div className="flex flex-col shrink-0 items-start text-start justify-self-end gap-[1.5rem] px-[1.5rem] py-[2.75rem] lg:p-[2rem] xl:p-[2.75rem]">
            <h5 className="h5_small mt-[3rem]">Heavy Industry </h5>
            <p className="p2">Cement Manufacturing Data Laboratory</p>
            <div className="flex items-start">
              <CustomLink
                variant="sixth"
                text="Learn more"
                customIcon={<CustomIcon name="ArrowUpRight" color="white" />}
                alt="arrow up icon"
                href="/heavyIndustry"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-end  items-center self-stretch pt-[9.29169rem] pb-[0.02081rem] rounded-[2rem] bg-[url('/labAssistant-bg-image.jpeg')] w-full md:w-[20.25rem] h-[25rem] bg-center bg-cover text-neutralLight-neutral100">
          <div className="flex flex-col shrink-0 items-start text-start justify-self-end gap-[1.5rem] px-[1.5rem] py-[2.75rem] lg:p-[2rem] xl:p-[2.75rem]">
            <h5 className="h5_small mt-[3rem]">Med Tech </h5>
            <p className="p2">
              ECG Signal Analysis Engine for Multi-lead Holter Exams
            </p>
            <div className="flex items-start">
              <CustomLink
                variant="sixth"
                text="Learn more"
                customIcon={<CustomIcon name="ArrowUpRight" color="white" />}
                alt="arrow up icon"
                href="/medTech"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-end  items-center self-stretch pt-[9.29169rem] pb-[0.02081rem] rounded-[2rem] bg-[url('/pianoPlaying-bg-image.jpeg')] w-full md:w-[20.25rem] h-[25rem] bg-center bg-cover text-neutralLight-neutral100">
          <div className="flex flex-col shrink-0 items-start text-start justify-self-end gap-[1.5rem] px-[1.5rem] py-[2.75rem] lg:p-[2rem] xl:p-[2.75rem]">
            <h5 className="h5_small mt-[3rem]">Piano for AI</h5>
            <p className="p2">
              We open the door to a mathematical understanding of music
            </p>
            <div className="flex items-start">
              <CustomLink
                variant="sixth"
                text="Learn more"
                customIcon={<CustomIcon name="ArrowUpRight" color="white" />}
                alt="arrow up icon"
                href="/pianoRoll"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
