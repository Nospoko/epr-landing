import React, { useState, useEffect } from "react";
import CustomIcon from "./CustomIcon";
import offerSectionTexts from "@/data/offerSectionsTexts";

const CollapsibleSectionsComponent = ({ version }) => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    if (version === "version1") {
      setSections(offerSectionTexts.slice(0, 3));
    } else if (version === "version2") {
      setSections(offerSectionTexts.slice(3, 6));
    } else if (version === "version3") {
      setSections(offerSectionTexts.slice(6, 11));
    } else if (version === "version4") {
      setSections(offerSectionTexts.slice(11));
    }
  }, [version]);

  const handleClick = (index) => {
    const updatedSections = sections.map((section, i) => ({
      ...section,
      visible: index === i ? !section.visible : false,
    }));
    setSections(updatedSections);
  };

  return (
    <div className="flex flex-col h6_600 text-neutralLight-neutral20 dark:text-neutralDark-neutral20 gap-[0.75rem] w-full">
      {sections.map((section, index) => (
        <div
          key={index}
          className="flex flex-col border-b-[1px] border-neutralLight-neutral100 dark:border-neutralDark-neutral100"
        >
          <div
            className="flex items-center gap-4 w-full pb-4 justify-between"
            onClick={() => handleClick(index)}
            role="button"
            aria-expanded={section.visible}
            aria-controls={`section-${index}-content`}
          >
            <div className="h6SB xl:h6_600 flex text-start items-start max-w-[13.69rem] md:max-w-[20.5rem] xl:max-w-[32.25rem]">
              {section.title}
            </div>
            <CustomIcon
              name={section.visible ? "ArrowUp" : "ArrowDown"}
              className="transition-transform duration-300 transform hover:scale-125"
              color="black"
            />
          </div>
          <div
            id={`section-${index}-content`}
            className="flex flex-start items-start text-start"
          >
            {section.visible && (
              <p className="text-neutralLight-neutral20 dark:text-neutralDark-neutral20 p2 leading-[1.64rem] pb-4 flex flex-start items-start">
                {section.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollapsibleSectionsComponent;
