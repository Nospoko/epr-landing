import PianoRollDescription from "@/components/PianoRollDescription";
import PianoRollPlay from "@/components/PianoRollPlay";
import RoundedTextComponent from "@/components/RoundedTextComponent";
import SolutionsSection from "@/components/SolutionsSection";
import StoryComponent from "@/components/StoryComponent";
import RoundedRectangle from "@/components/shared/RoundedRectangle";
import React from "react";

function PianoRoll() {
  return (
    <main className="flex flex-col items-center justify-center ">
      <div className="w-full flex flex-col items-center justify-center px-[1rem] md:px-[2.75rem] xl:px-[0]">
        <PianoRollDescription />
        <PianoRollPlay />
        <RoundedTextComponent
          version="version3"
          backgroundColor="neutralLight-neutral10"
          textTitleColor="neutralLight-neutral100"
          textParagraph1Color="neutralLight-neutral60"
          gap="6"
        />
        <StoryComponent />
      </div>
      <RoundedRectangle />
      <SolutionsSection version="version1" />
    </main>
  );
}

export default PianoRoll;
