import React from "react";
import CustomLink from "./shared/CustomLink";

const CustomSolutionsSection = () => {
  return (
    <section className="flex mt-[0rem] md:mt-[3.94rem] w-full relative lg:overflow-hidden">
      <div className="flex flex-col gap-4 xl:gap-[1.5rem] py-[4rem] xl:pl-[9.75rem] pr-[0rem]">
        <h1 className="h2 md:h1SB xl:h1 text-neutralLight-neutral10 dark:text-neutralDark-neutral10 leading-[5.375rem]">
          Custom Solutions
        </h1>
        <div className="flex flex-col gap-8">
          {" "}
          <div className="leading-[1.98rem] text-neutralLight-neutral20 dark:text-neutralDark-neutral20 h6_400 md:h6 max-w-[40.063rem]">
            <p>
              Do you have an idea for something special? We can squeeze it out of your data!
            </p>
          </div>
          <div className="flex items-start ">
            <CustomLink
              variant="primary"
              href="/contact-us"
              text="Get in touch"
            />
          </div>
        </div>
      </div>

      <div className="hidden xl:flex items-start absolute top-[-14rem] right-[-3rem] transform -rotate-90">
        <p className="text-neutralLight-neutral90 dark:text-neutralDark-neutral90 text-[37.5rem] font-semibold leading-[52.5rem] w-[25.5rem]">
          A
        </p>
      </div>
    </section>
  );
};

export default CustomSolutionsSection;
