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
}) => {
  const { title, paragraph1, paragraph2 } = texts[version];
  return (
    <section className="w-full px-[5.875rem]">
      <div
        className={`bg-${backgroundColor} w-full flex flex-col items-start px-[6.75rem] py-[5.88rem] rounded-[2rem]`}
      >
        <div className="max-w-[51.75rem]">
          <div className="flex flex-col gap-8">
            <div className={`h2 leading-[4rem] text-${textTitleColor} `}>
              {title}
            </div>
            <div className={`h6 leading-[1.98rem] text-${textParagraph1Color}`}>
              {paragraph1}
            </div>
          </div>

          <div
            className={`p2 leading-[1.64rem] mt-4 text-${textParagraph2Color}`}
          >
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
