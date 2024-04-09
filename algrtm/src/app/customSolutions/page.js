import CustomSolutionsSection from "@/components/CustomSolutionsSection";
import OfferSection from "@/components/OfferSection";
import RoundedTextComponent from "@/components/RoundedTextComponent";

import SolutionsSection from "@/components/SolutionsSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import RoundedRectangle from "@/components/shared/RoundedRectangle";
import React from "react";

const CustomSolutions = () => {
  return (
    <main className="flex flex-col items-center justify-center ">
      <div className="flex flex-col items-center justify-center px-[1rem] md:px-[2.75rem] xl-px-[0] w-full">
        <CustomSolutionsSection />
        <OfferSection />
        <TechnologiesSection />
        <RoundedTextComponent
          backgroundColor="neutralLight-neutral10"
          textTitleColor="neutralLight-neutral100"
          textParagraph1Color="neutralLight-neutral60"
          gap="6"
          version="version2"
          showButton={true}
        />
      </div>

      <RoundedRectangle />
      <SolutionsSection version="version2" />
    </main>
  );
};

export default CustomSolutions;
