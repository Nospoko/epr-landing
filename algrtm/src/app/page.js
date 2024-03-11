import AlgorithmicMusicSection from "@/components/AlgorithmicMusicSection";
import DevelopSection from "@/components/DevelopSection";

import IconsComponent from "@/components/IconsComponent";
import LinksSection from "@/components/LinksSection";
import RoundedTextComponent from "@/components/RoundedTextComponent";

import SolutionsSection from "@/components/SolutionsSection";
import RoundedRectangle from "@/components/shared/RoundedRectangle";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <DevelopSection />
      <IconsComponent />
      <AlgorithmicMusicSection />
      <RoundedTextComponent
        backgroundColor="neutralLight-neutral90"
        textTitleColor="neutralLight-neutral10"
        textParagraph1Color="neutralLight-neutral10"
        textParagraph2Color="neutralLight-neutral20"
        version="version1"
      />
      <RoundedRectangle />
      <SolutionsSection version="version1" />
    </main>
  );
}
