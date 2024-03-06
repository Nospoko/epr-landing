import CustomSolutionsSection from "@/components/CustomSolutionsSection";
import IconsColoredComponent from "@/components/IconsColoredComponent";
import LinksSection from "@/components/LinksSection";
import OfferSection from "@/components/OfferSection";
import RoundedTextComponent from "@/components/RoundedTextComponent";

import SolutionsSection from "@/components/SolutionsSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import RoundedRectangle from "@/components/shared/RoundedRectangle";
import React from "react";

const CustomSolutions = () => {
  return (
    <main className="flex flex-col items-center justify-center px-[2.75rem]">
      <CustomSolutionsSection />
      <OfferSection />
      <TechnologiesSection />
      {/* TODO- make ourStory reusable and refactor into Technical Consulting */}

      <RoundedTextComponent
        backgroundColor="neutralLight-neutral10"
        textTitleColor="neutralLight-neutral100"
        textParagraph1Color="neutralLight-neutral60"
        version="version2"
        showButton={true}
      />
      <RoundedRectangle />
      {/* TODO- make SolutionsSection reusable and refactor into We know that algormitic solutions are future. Do you? */}
      <SolutionsSection version="version2" />
      <LinksSection />
    </main>
  );
};

export default CustomSolutions;
