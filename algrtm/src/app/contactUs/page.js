import ContactDescription from "@/components/ContactDescription";
import ContactFormContainer from "@/components/ContactFormContainer";

import SolutionsSection from "@/components/SolutionsSection";
import RoundedRectangle from "@/components/shared/RoundedRectangle";
import React from "react";

const ContactUs = () => {
  return (
    <section className="flex flex-col items-start mt-[2.75rem] md:mt-[4rem] lg:mt-[4.94rem]">
      <div className="md:flex flex-row flex-column items-start gap-[2.75rem] md:gap-[4rem] mx-[1rem] md:mx-[2.75rem] xl:mx-[12.5rem]">
        <ContactDescription />
        <ContactFormContainer />
      </div>
      <RoundedRectangle />
      <SolutionsSection version="version1" />
    </section>
  );
};

export default ContactUs;
