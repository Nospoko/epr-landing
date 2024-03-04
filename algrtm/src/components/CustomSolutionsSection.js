import React from "react";
import CustomLink from "./shared/CustomLink";

const CustomSolutionsSection = () => {
  return (
    <section className="flex flex-col max-w-[33.5rem] mt-[3.945rem] mx-[17.46rem] gap-8 items-start">
      <h1 className="h1 text-neutralLight-neutral10 leading-[5.375rem]">
        Custom Projects
      </h1>
      <div className="leading-[1.98rem] text-neutralLight-neutral20 h6">
        <p>
          We’re ready to help and excited to learn about your project! Send us
          an email and we’ll be in touch or take our 5-minute questionnaire
          instead.{" "}
        </p>
      </div>
      <div>
        <CustomLink
          variant="primary"
          href="/contactUs"
          text="Go to the questionnaire"
        />
      </div>
    </section>
  );
};

export default CustomSolutionsSection;
