import React from "react";
import texts from "@/data/storyGoalConsultingTexts";
import CustomLink from "./shared/CustomLink";

const RoundedTextComponent = ({
  backgroundColor,
  textTitleColor,
  textParagraph1Color,
  textParagraph2Color,
  version,
  showButton,
  gap,
}) => {
  const { title, paragraph1, paragraph2 } = texts[version];
  return (
    <section className="w-full px-[1rem] sm:px-[5.875rem] ">
      <div
        className={`bg-${backgroundColor} w-full flex flex-col items-center sm:items-start py-[2.75rem] px-[2rem] sm:py-[5.88rem] sm:px-[6.75rem] rounded-[2rem]`}
      >
        <div className="max-w-[51.75rem]">
          <div className={`flex flex-col gap-${gap}`}>
            <div
              className={`h2SB leading-[2.75rem] sm:h2SB sm:leading-[3.25rem] lg:h2 text-${textTitleColor} `}
            >
              {title}
            </div>
            <div className={`h6_400 lg:h6 text-${textParagraph1Color}`}>
              {paragraph1}
            </div>
          </div>

          <div className={`p2 mt-4 text-${textParagraph2Color}`}>
            {paragraph2}
          </div>
        </div>
        {showButton && (
          <div className="mt-[0.5rem]">
            <CustomLink variant="secondary" text="Book a meeting"></CustomLink>
          </div>
        )}
      </div>
    </section>
  );
};

export default RoundedTextComponent;
