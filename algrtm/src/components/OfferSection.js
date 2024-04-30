"use client";

import React, { useState } from "react";

import CollapsibleSectionsComponent from "./shared/CollapsibleSectionsComponent";

const OfferSection = () => {
  return (
    <section className="flex flex-col w-full md:mt-[8.5rem] gap-[2.75rem] justify-center items-center">
      <h2 className="flex h4 xl:h2 md:h2S text-neutralLight-neutral10 dark:text-neutralDark-neutral10">
        What we offer?
      </h2>
      <div className="flex flex-col gap-4 w-full xl:px-[5.875rem]">
        {/* RESEARCH & DISCOVERY */}
        <div className="flex flex-col md:flex-row gap-[1.5rem]  bg-neutralLight-neutral90 dark:bg-neutralDark-neutral90 px-[2.75rem] py-[2.75rem] md:py-[5.88rem]  xl:py-[5.85rem] xl:px-[6.75rem] rounded-[2rem]">
          <div className=" h5_small_bold md:h4SB lg:h4 text-neutralLight-neutral10 dark:text-neutralDark-neutral10 flex justify-start max-w-[25.1875rem] w-full">
            <p>Research & Discovery</p>
          </div>

          <CollapsibleSectionsComponent version="version1" />
        </div>
        {/* Prototyping & Development */}
        <div className="flex flex-col md:flex-row gap-[1.5rem] px-[2.75rem] py-[2.75rem] md:py-[5.88rem] xl:py-[5.85rem] xl:px-[6.75rem]">
          <div className=" h5_small_bold md:h4SB lg:h4 text-neutralLight-neutral10 dark:text-neutralDark-neutral10 leading-[2.75rem] flex justify-start max-w-[25.1875rem] w-full">
            <p>Prototyping & Development</p>
          </div>

          <CollapsibleSectionsComponent version="version2" />
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
