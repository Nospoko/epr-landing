"use client";
import React from "react";
import CollapsibleSectionsComponent from "./shared/CollapsibleSectionsComponent";
import Image from "next/image";

const OpportunitiesIndustrySection = () => {
  return (
    <section className="flex flex-col w-full my-[4rem] lg:my-[7.19rem] gap-[2.75rem] justify-center items-center">
      <h2 className="flex h3SB xl:h2 text-neutralLight-neutral10 dark:text-neutralDark-neutral10 tracking-[-0.13rem]lg:tracking-[-0.13rem] xl:tracking-[-0.16rem]">
        Opportunities in Data Science for Heavy Industry
      </h2>
      <div className="flex flex-col gap-4 w-full xl:px-[5.875rem]">
        <div className="flex flex-col md:flex-row gap-[1.5rem]  bg-neutralLight-neutral90 dark:bg-neutralDark-neutral90 px-[2.75rem] py-[2.75rem] md:py-[5.88rem]  xl:py-[5.85rem] xl:px-[6.75rem] rounded-[2rem]">
          <div className=" h5_small_bold md:h4SB lg:h4 text-neutralLight-neutral10 dark:text-neutralDark-neutral10 flex justify-start max-w-[25.1875rem] w-full">
            <Image
              src="/factory-image.png"
              alt="Image of the factory inside"
              width={440}
              height={554}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>

          <CollapsibleSectionsComponent version="version3" />
        </div>
      </div>
    </section>
  );
};

export default OpportunitiesIndustrySection;
