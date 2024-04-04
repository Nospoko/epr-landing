import React from "react";
import TechIconsComponent from "./shared/TechIconsComponent";

const DevelopSection = () => {
  return (
    <section className="flex flex-col gap-6 justify-center items-center text-center  max-w-[21.4375rem] mt-[2.75rem] mx-[1rem] sm:max-w-[54.875rem] sm:mt-[7.75rem sm:mx-[4.56rem] xl-mx-[17.56rem]">
      <div className="h2 md:h1 text-neutralLight-neutral10 leading-[6.02rem]">
        We develop algorithmic solutions
      </div>
      <div className=" text-neutralLight-neutral20 p2 max-w-[21.4375rem] sm:max-w-[32.5rem] leading-[1.44rem]">
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
