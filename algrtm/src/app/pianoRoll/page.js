import PianoRollDescription from "@/components/PianoRollDescription";
import RoundedTextComponent from "@/components/RoundedTextComponent";
import SolutionsSection from "@/components/SolutionsSection";
import React from "react";

function PianoRoll() {
  return (
    <main className="flex flex-col">
      <PianoRollDescription />
      <RoundedTextComponent
        version="version3"
        backgroundColor="neutralLight-neutral10"
        textTitleColor="neutralLight-neutral100"
        textParagraph1Color="neutralLight-neutral100"
      />
      <SolutionsSection version="version1" />
    </main>
  );
}

export default PianoRoll;
