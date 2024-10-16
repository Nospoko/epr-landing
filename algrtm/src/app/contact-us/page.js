import ContactDescription from "@/components/ContactDescription";
import ContactFormContainer from "@/components/ContactFormContainer";
import SolutionsSection from "@/components/SolutionsSection";
import RoundedRectangle from "@/components/shared/RoundedRectangle";
import React from "react";

const ContactUs = () => {
  return (
    <section className="flex flex-col items-start mt-[2.75rem] md:mt-[4rem] xl:mt-[4.94rem] w-full">
      <div className="md:flex flex-row flex-column items-center md:items-start gap-[2.75rem] md:gap-[4rem] px-[1rem] md:px-[2.75rem] xl:px-[12.5rem] w-full pb-[6.68rem]">
        <ContactDescription />
        <ContactFormContainer />
      </div>
      <RoundedRectangle />
      <SolutionsSection version="version1" />
    </section>
  );
};

export default ContactUs;
