import CustomSolutionsSection from "@/components/CustomSolutionsSection";
import LinksSection from "@/components/LinksSection";
import OfferSection from "@/components/OfferSection";
import OurStory from "@/components/OurStory";
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
      <OurStory />
      <RoundedRectangle />
      {/* TODO- make SolutionsSection reusable and refactor into We know that algormitic solutions are future. Do you? */}
      <SolutionsSection />
      <LinksSection />
    </main>
  );
};

export default CustomSolutions;
