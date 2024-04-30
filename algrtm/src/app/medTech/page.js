import DescriptionImageComponent from "@/components/DescriptionImageComponent";
import RoundedTextComponent from "@/components/RoundedTextComponent";
import SolutionsSection from "@/components/SolutionsSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import RoundedRectangle from "@/components/shared/RoundedRectangle";
import React from "react";

const MedTech = () => {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center px-4 md:mx-[2.75rem]">
        <DescriptionImageComponent version="version2" />
        {/* <AlgorithmicMusicSection /> */}
        {/* <SoftwareConsultingSection /> */}
        <RoundedTextComponent
          version="version4"
          backgroundColor="neutralLight-neutral10"
          backgroundColorDark="neutralDark-neutral90"
          textTitleColor="neutralLight-neutral100"
          textTitleColorDark="neutralDark-neutral10"
          textParagraph1Color="neutralLight-neutral60"
          textParagraph2ColorDark="neutralDark-neutral60"
          gap="8"
          showButton={true}
        />
        <TechnologiesSection />
      </div>
      <RoundedRectangle />
      <SolutionsSection version="version1" />
    </main>
  );
};

export default MedTech;
