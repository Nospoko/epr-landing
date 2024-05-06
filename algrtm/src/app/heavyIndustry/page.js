import DescriptionImageComponent from "@/components/DescriptionImageComponent";
import DiagramComponent from "@/components/DiagramComponent";
import OpportunitiesIndustrySection from "@/components/OpportunitiesIndustrySection";
import SolutionsSection from "@/components/SolutionsSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import RoundedRectangle from "@/components/shared/RoundedRectangle";
import React from "react";

const HeavyIndustry = () => {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center px-4 md:mx-[2.75rem]">
        <DescriptionImageComponent
          version="version1"
          image="/heavyIndustry-bg-image.jpeg"
          imageWidth={580}
          imageHeight={478}
        />
        <OpportunitiesIndustrySection />
        <DiagramComponent />
        <TechnologiesSection />
      </div>
      <RoundedRectangle />
      <SolutionsSection version="version1" />
    </main>
  );
};

export default HeavyIndustry;
