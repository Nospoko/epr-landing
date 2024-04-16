import React from "react";
import TechIconsComponent from "./shared/TechIconsComponent";

const DevelopSection = () => {
  return (
    <section className="flex flex-col gap-6 justify-center items-center text-center max-w-[21.4375rem] mt-[2.75rem] mx-[1rem] md:max-w-[54.875rem] md:mt-[7.75rem md:mx-[4.56rem] xl-mx-[17.56rem] bg-neutralLight-neutral100 dark:bg-neutralDark-neutral100">
      <div className="h2 md:h1 text-neutralLight-neutral10 dark:text-neutralDark-neutral10 leading-[6.02rem]">
        We develop algorithmic solutions
      </div>
      <div className=" text-neutralLight-neutral20 dark:text-neutralDark-neutral20 p2 max-w-[21.4375rem] md:max-w-[32.5rem] leading-[1.44rem]">
        <p>
          With Machine Learning, Research and Prototyping, Data Quality
          Engineering, Analytics Automation, Creative Coding, Dataset
          Management.
        </p>
      </div>
      <div className="w-full">
        <TechIconsComponent
          size="small"
          color={false}
          classNames="gap-4 justify-center"
        />
      </div>
    </section>
  );
};

export default DevelopSection;
