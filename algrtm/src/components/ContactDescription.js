import React from "react";
import CustomLink from "./shared/CustomLink";
import externalLinks from "@/data/externalLinks";

const ContactDescription = () => {
  return (
    <section className="flex flex-col gap-6 md:max-w-[18.375rem] xl:max-w-[22.38rem] w-full mb-[2.75rem] md:mb-[0]">
      <h2 className=" h4 md:h2SB xl:h2 text-neutralLight-neutral10 dark:text-neutralDark-neutral10 leading-[4rem] ">
        Contact
      </h2>
      <div className="flex flex-col gap-4">
        <h6 className="h6_400 xl:h6 text-neutralLight-neutral20 dark:text-neutralDark-neutral20 leading-[1.98rem]">
          Let's explore how we can work together. Share your ideas, and we’ll
          provide the expertise to bring them to life.
        </h6>

        <div className=" flex flex-col md:items-start gap-4 self-stretch xl:flex-row">
          <CustomLink
            variant="secondary"
            text="Book a meeting"
            href={externalLinks.Calendry}
            target="_blank"
            rel="noopener noreferrer"
          />

          {/* TODO add link href */}
          {/* <CustomLink
            variant="quaternary"
            text="Go to the questionnaire"
            href=""
            customIcon={<CustomIcon name="ArrowUpRight" color="black" />}
            alt="arrow up icon"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default ContactDescription;
