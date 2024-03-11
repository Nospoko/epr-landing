import React from "react";
import CustomLink from "./shared/CustomLink";

const CustomSolutionsSection = () => {
  return (
    <section className="flex mt-[3.945rem] w-full h-[25.5625rem] relative overflow-hidden">
      <div className="flex flex-col gap-4 py-[4.66rem] pl-[12.5rem] pr-[0rem">
        <h1 className="h1 text-neutralLight-neutral10 leading-[5.375rem]">
          Custom Solutions
        </h1>
        <div className="flex flex-col gap-8">
          {" "}
          <div className="leading-[1.98rem] text-neutralLight-neutral20 h6 max-w-[40.063rem]">
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

      <div className="flex items-start absolute top-[-13rem] right-[-2rem] transform -rotate-90">
        <p className="text-neutralLight-neutral90 text-[37.5rem]  font-semibold leading-[52.5rem] w-[25.5rem]">
          A
        </p>
      </div>
    </section>
  );
};

export default CustomSolutionsSection;
