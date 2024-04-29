import React from "react";
import CustomLink from "./shared/CustomLink";

const SoftwareConsultingSection = () => {
  return (
    <section className="flex flex-col gap-[1.5rem] lg:gap-[4rem] self-stretch lg:mx-[2.75rem] lg:my-[1.5rem]">
      <h4 className="h4 lg:h2SB xl:h2">
        Software Consulting <br />
        for Research Institutions
      </h4>
      <div className="flex flex-col lg:flex-row gap-[4rem]">
        <p className="h6">
          We provide specialized software support for scientific research at
          universities and other institu-tions. Our focus is on numerical
          methods, data visualization, data quality management, and the
          development of custom processing pipelines. The services we offer
          include crafting interactive dashboards and designing user-friendly
          interfaces for in-depth data analysis.
        </p>
        <div className="lg:mt-[4rem] flex flex-col">
          <p className="h6">
            Specialized Software Consulting for Artists. If you're looking to
            bring a computational idea to life, we're here to help. We assist
            artists by staying up-to-date with the latest advancements in deep
            learning and developing custom solutions, whether they involve a
            unique set of differential equations or tailored JavaScript
            animations.
          </p>
          <div className="mb-[2.75rem] mt-[2rem] flex items-start">
            <CustomLink variant="tertiary" text="Book a meeting" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareConsultingSection;
