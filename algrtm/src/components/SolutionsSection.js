import React from "react";
import CustomLink from "./shared/CustomLink";
import solutionsTexts from "@/data/solutionsSectionTexts";

const SolutionsSection = ({ version }) => {
  const { title } = solutionsTexts[version];
  return (
    <section className="bg-neutralLight-neutral10 w-full flex justify-center">
      <div className="pt-[5.88rem] pb-[5.88rem] sm:pt-[7.75rem] sm:pb-[7.75rem] flex flex-col justify-center items-center gap-11 max-w-[49.375rem]">
        <h4 className="text-neutralLight-neutral100 h2SB xl:h2  justify-center items-center text-center leading-[4.8rem]">
          {title}
        </h4>
        <div className=" flex gap-4 justify-center items-center">
          <CustomLink
            variant="secondary"
            text="Let's talk"
            href="/contactUs"
          ></CustomLink>

          {/*TODO add link href */}
          <CustomLink
            variant="primary"
            text="Book a meeting"
            icon="/ArrowUpRightWhite-icon.svg"
            alt="arrow up icon"
          ></CustomLink>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
