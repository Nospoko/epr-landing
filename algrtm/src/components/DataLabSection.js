import React from "react";
import dataLabSectionTexts from "@/data/dataLabSectionTexts";

const DataLabSection = () => {
  return (
    <section className="w-full flex flex-col items-center gap-6 mb-[2.75rem] lg:my-[5.88rem] mt-[2.75rem] mx-[1rem] md:mt-[7.75rem] md:mx-[4.56rem] xl:mx-[5.88rem] bg-neutralLight-neutral100 dark:bg-neutralDark-neutral100">
      <div className="h4 lg:h2SB xl:h2 mx-[1rem] md:mx-[4.56rem] xl:mx-[5.88rem] text-neutralLight-neutral10 dark:text-neutralDark-neutral10">
        Our Data Laboratory
      </div>
      <div className="flex flex-col gap-[2rem] lg:flex-row w-full self-stretch justify-center items-center text-center ">
        {dataLabSectionTexts.map((item, index) => (
          <div
            key={index}
            className="flex flex-col text-start bg-neutralLight-neutral90 dark:bg-neutralDark-neutral90 border-neutralLight-neutral90  border-1 rounded-[2rem] gap-[1rem] p-[2rem] w-full max-w-[24.75rem] xl:h-[31.38rem] lg:h-[30.12rem] text-neutralLight-neutral20 dark:text-neutralDark-neutral20"
          >
            <h5 className="h6_600 lg:text-[1.625rem] lg:leading-[2.34rem] lg:text-semibold max-w-[19.25rem] w-full">
              {item.title}
            </h5>
            <p
              className="p2"
              dangerouslySetInnerHTML={{ __html: item.description }}
            ></p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DataLabSection;
