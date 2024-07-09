import React from "react";
import CustomLink from "./shared/CustomLink";
import externalLinks from "@/data/externalLinks";

const SoftwareConsultingSection = () => {
  return (
    <section className="flex flex-col gap-[1.5rem] self-stretch lg:mx-[2.75rem] xl:mx-[6.75rem] lg:my-[1.5rem] xl:my-[5.88rem] text-neutralLight-neutral10 dark:text-neutralDark-neutral10 max-w-[21.4375rem] mt-[2.75rem] mx-[1rem] md:max-w-[54.875rem] md:mt-[7.75rem md:mx-[4.56rem] xl-mx-[17.56rem]">
      <h4 className="h4 lg:h2SB xl:h2">
        Software Consulting <br />
        for Research Institutions
      </h4>
      <div className="flex flex-col gap-[0.5rem]">
        <p className="h6">
          We provide specialized software support for scientific research at
          universities and other institu-tions. Our focus is on numerical
          methods, data visualization, data quality management, and the
          development of custom processing pipelines. The services we offer
          include crafting interactive dashboards and designing user-friendly
          interfaces for in-depth data analysis.
        </p>

        <div className="mb-[2.75rem] mt-[1rem] flex items-start">
          <CustomLink
            variant="tertiary"
            text="Book a meeting"
            href={externalLinks.Calendry}
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
      </div>
    </section>
  );
};

export default SoftwareConsultingSection;
