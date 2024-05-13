import AlgorithmicMusicSection from "@/components/AlgorithmicMusicSection";
import DataLabSection from "@/components/DataLabSection";
import DevelopSection from "@/components/DevelopSection";
import OurWork from "@/components/OurWork";
import RoundedTextComponent from "@/components/RoundedTextComponent";
import SoftwareConsultingSection from "@/components/SoftwareConsultingSection";
import SolutionsSection from "@/components/SolutionsSection";
import RoundedRectangle from "@/components/shared/RoundedRectangle";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center px-4 md:mx-[2.75rem]">
        <DevelopSection />
        <OurWork />
        {/* <AlgorithmicMusicSection /> */}
        <SoftwareConsultingSection />
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
        <DataLabSection />
      </div>
      <RoundedRectangle />
      <SolutionsSection version="version1" />
    </main>
  );
}
