import React from "react";
import dataLabSectionTexts from "@/data/dataLabSectionTexts";

const DataLabSection = () => {
  return (
    <section className="w-full max-w-[78.25rem] flex flex-col gap-6 justify-center items-center text-center mb-[2.75rem] lg:my-[5.88rem] mt-[2.75rem] mx-[1rem] md:max-w-[54.875rem] md:mt-[7.75rem] md:mx-[4.56rem] xl:mx-[5.88rem] bg-neutralLight-neutral100 dark:bg-neutralDark-neutral100">
      <h4 className="h4 lg:h2SB xl:h2 text-start text-neutralLight-neutral10 dark:text-neutralDark-neutral10">
        Our Data Laboratory
      </h4>
      <div className="flex flex-col gap-[2rem] lg:flex-row w-full self-stretch">
        {dataLabSectionTexts.map((item, index) => (
          <div
            key={index}
            className="flex flex-col bg-neutralLight-neutral90 border-neutralLight-neutral90  border-1 rounded-[2rem] gap-[1rem] p-[2rem] w-full max-w-[24.75rem]"
          >
            <h5 className="h6_600 lg:text-[1.625] lg:leading-[2.34rem] lg-text-semibold">
              {item.title}
            </h5>
            <p className="p2">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DataLabSection;
