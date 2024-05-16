import React from "react";
import CustomLink from "./shared/CustomLink";
import solutionsTexts from "@/data/solutionsSectionTexts";
import CustomIcon from "./shared/CustomIcon";
import externalLinks from "@/data/externalLinks";

const SolutionsSection = ({ version }) => {
  const { title } = solutionsTexts[version];
  return (
    <section className="bg-neutralLight-neutral10 dark:bg-neutralDark-neutral90 w-full flex justify-center">
      <div className="pt-[5.88rem] pb-[5.88rem] md:pt-[7.75rem] md:pb-[7.75rem] flex flex-col justify-center items-center gap-11 max-w-[49.375rem]">
        <h4 className="text-neutralLight-neutral100 h2SB xl:h2 justify-center items-center text-center">
          {title}
        </h4>
        <div className=" flex gap-4 justify-center items-center">
          <CustomLink variant="quinary" text="Let's talk" href="/contactUs" />

          <CustomLink
            variant="tertiary"
            text="Book a meeting"
            customIcon={<CustomIcon name="ArrowUpRight" color="white" />}
            alt="arrow up icon"
            href={externalLinks.Calendry}
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
