import React from "react";
import texts from "@/data/storyGoalConsultingTexts";
import CustomLink from "./shared/CustomLink";
import externalLinks from "@/data/externalLinks";

const RoundedTextComponent = ({
  backgroundColor,
  backgroundColorDark,
  textTitleColor,
  textTitleColorDark,
  textParagraph1Color,
  textParagraph1ColorDark,
  textParagraph2Color,
  textParagraph2ColorDark,
  version,
  showButton,
  gap,
}) => {
  const { title, paragraph1, paragraph2 } = texts[version];
  return (
    <section className="w-full md:px-[5.875rem] ">
      <div
        className={`bg-${backgroundColor} dark:bg-${backgroundColorDark} w-full flex flex-col items-start py-[2.75rem] px-[2rem] md:py-[5.88rem] md:px-[6.75rem] rounded-[2rem]`}
      >
        <div className="max-w-[51.75rem]">
          <div className={`flex flex-col gap-${gap}`}>
            <div
              className={`max-w-[51.75rem] h3SB leading-[2.75rem] md:h2SB md:leading-[3.25rem] xl:h2 xl:leading-[4rem] text-${textTitleColor} dark:text-${textTitleColorDark} `}
            >
              {title}
            </div>
            <div
              className={`h6_400 xl:h6 text-${textParagraph1Color} dark:text-${textParagraph1ColorDark}`}
            >
              {paragraph1}
            </div>
          </div>

          <div
            className={`p2 mt-4 text-${textParagraph2Color} dark:text-${textParagraph2ColorDark} `}
          >
            {paragraph2}
          </div>
        </div>
        {showButton && (
          <div className="mt-[0.5rem]">
            <CustomLink
              variant="secondary"
              text="Book a meeting"
              href={externalLinks.Calendry}
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default RoundedTextComponent;
