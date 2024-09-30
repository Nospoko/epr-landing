import PianoRollDescription from "@/components/PianoRollDescription";
import PianoRollLogoDescription from "@/components/PianoRollLogoDescription";
import PydataTalkComponent from "@/components/PydataTalkComponent";
import PythonToolsSection from "@/components/PythonToolsSection";
import RoundedTextComponent from "@/components/RoundedTextComponent";
import SolutionsSection from "@/components/SolutionsSection";
import StayUpToDate from "@/components/StayUpToDate";
import PianoRollImgDescription from "@/components/shared/PianoRollImgDescription";
import RoundedRectangle from "@/components/shared/RoundedRectangle";
import React from "react";

function PianoForAI() {
  return (
    <main className="flex flex-col items-center justify-center ">
      <div className="w-full flex flex-col items-center justify-center px-[1rem] md:px-[2.75rem] xl:px-[0]">
        <PianoRollImgDescription />
        <PianoRollLogoDescription />
        <PianoRollDescription />
        <PythonToolsSection />
        <PydataTalkComponent />
        <RoundedTextComponent
          version="version5"
          backgroundColor="neutralLight-neutral10"
          backgroundColorDark="neutralDark-neutral90"
          textTitleColor="neutralLight-neutral100"
          textTitleColorDark="neutralDark-neutral10"
          textParagraph1Color="neutralLight-neutral60"
          textParagraph2ColorDark="neutralDark-neutral60"
          gap="6"
        />
        <StayUpToDate />
      </div>
      <RoundedRectangle />
      <SolutionsSection version="version1" />
    </main>
  );
}

export default PianoForAI;
