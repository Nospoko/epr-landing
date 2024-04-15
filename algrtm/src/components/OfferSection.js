"use client";

import React, { useState } from "react";
import Icon from "./shared/Icon";
import offerSectionTexts from "@/data/offerSectionsTexts";

const OfferSection = () => {
  const [sections, setSections] = useState(offerSectionTexts);

  const handleOffer = (index) => {
    setSections((prevSections) =>
      prevSections.map((section, i) => ({
        ...section,
        visible: index === i ? !section.visible : false,
      }))
    );
  };

  return (
    <section className="flex flex-col w-full md:mt-[8.5rem] gap-[2.75rem] justify-center items-center">
      <h2 className="flex h4 xl:h2 md:h2S text-neutralLight-neutral10">
        What we offer?
      </h2>
      <div className="flex flex-col gap-4 w-full xl:px-[5.875rem]">
        {/* RESEARCH & DISCOVERY */}
        <div className="flex flex-col md:flex-row gap-[1.5rem]  bg-neutralLight-neutral90 px-[2.75rem] py-[2.75rem] md:py-[5.88rem]  xl:py-[5.85rem] xl:px-[6.75rem] rounded-[2rem]">
          <div className=" h5_small_bold md:h4SB lg:h4 text-neutralLight-neutral10 flex justify-start max-w-[25.1875rem] w-full">
            <p>Research & Discovery</p>
          </div>

          <div className="flex flex-col h6_600 text-neutralLight-neutral20 gap-[0.75rem] w-full">
            {sections.slice(0, 3).map((section, index) => (
              <div
                key={index}
                className="flex flex-col border-b-[1px] border-neutralLight-neutral100"
              >
                <div
                  className="flex items-center gap-4 self-stretch w-full pb-4 justify-between"
                  onClick={() => handleOffer(index)}
                  role="button"
                  aria-expanded={section.visible}
                  aria-controls={`section-${index}-content`}
                >
                  <div className="h6SB xl:h6_600">{section.title}</div>
                  <Icon
                    src={
                      section.visible
                        ? "/arrow-up-icon.svg"
                        : "/arrow-down-icon.svg"
                    }
                    alt="Arrow icon"
                    width={20}
                  />
                </div>
                <div id={`section-${index}-content`}>
                  {section.visible && (
                    <p className="text-neutralLight-neutral20 p2 leading-[1.64rem] pb-4">
                      {section.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Prototyping & Development */}
        <div className="flex flex-col md:flex-row gap-[1.5rem] px-[2.75rem] py-[2.75rem] md:py-[5.88rem] xl:py-[5.85rem] xl:px-[6.75rem]">
          <div className=" h5_small_bold md:h4SB lg:h4 text-neutralLight-neutral10 leading-[2.75rem] flex justify-start max-w-[25.1875rem] w-full">
            <p>Prototyping & Development</p>
          </div>

          <div className="flex flex-col h6_600 text-neutralLight-neutral20 gap-[0.75rem] w-full">
            {sections.slice(3, 6).map((section, index) => (
              <div
                key={index}
                className="flex flex-col border-b-[1px] border-neutralLight-neutral90"
              >
                <div
                  className="flex items-center gap-4 self-stretch w-full pb-4 justify-between"
                  onClick={() => handleOffer(index + 3)}
                  role="button"
                  aria-expanded={section.visible}
                  aria-controls={`section-${index + 3}-content`}
                >
                  <div className="h6SB xl:h6_600">{section.title}</div>
                  <Icon
                    src={
                      section.visible
                        ? "/arrow-up-icon.svg"
                        : "/arrow-down-icon.svg"
                    }
                    alt="Arrow icon"
                    width={20}
                  />
                </div>
                <div id={`section-${index + 3}-content`}>
                  {section.visible && (
                    <p className="text-neutralLight-neutral20 p2 leading-[1.64rem] pb-4">
                      {section.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
