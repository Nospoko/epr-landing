import React from "react";
import CustomLink from "./shared/CustomLink";

const CustomSolutionsSection = () => {
  return (
    <section className="flex mt-[3.945rem] w-full h-[25.5625rem] relative">
      <div className="flex flex-col gap-4 py-[4.66rem] pl-[6.62rem] pr-[0rem">
        <h1 className="h1 text-neutralLight-neutral10 leading-[5.375rem]">
          Custom Solutions
        </h1>
        <div className="flex flex-col gap-8">
          {" "}
          <div className="leading-[1.98rem] text-neutralLight-neutral20 h6 max-w-[33.5rem] ">
            <p>
              We’re ready to help and excited to learn about your project! Send
              us an email and we’ll be in touch or take our 5-minute
              questionnaire instead.{" "}
            </p>
          </div>
          <div className="flex items-start">
            <CustomLink
              variant="primary"
              href="/contactUs"
              text="Go to the questionnaire"
            />
          </div>
        </div>
      </div>

      <div className="flex items-start absolute top-[-12rem] right-[-2rem]">
        <p className="text-neutralLight-neutral90 text-[37.5rem] transform -rotate-90 font-semibold">
          A
        </p>
      </div>
    </section>
  );
};

export default CustomSolutionsSection;
