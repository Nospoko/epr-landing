import React from "react";
import CustomLink from "./shared/CustomLink";

const SolutionsSection = () => {
  return (
    <section className="bg-neutralLight-neutral10 w-full">
      <div className="pt-[7.75rem] pb-[7.75rem] flex flex-col justify-center items-center gap-11">
        <div className="text-neutralLight-neutral100 h2 flex  w-2/3 justify-center items-center text-center leading-[4.8rem]">
          Looking for <br />
          algorithmic solutions?
        </div>
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
