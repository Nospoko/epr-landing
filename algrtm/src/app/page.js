import AlgorithmicMusicSection from "@/components/AlgorithmicMusicSection";
import DevelopSection from "@/components/DevelopSection";
import IconsComponent from "@/components/IconsComponent";
import LinksSection from "@/components/LinksSection";
import OurStory from "@/components/OurStory";
import SolutionsSection from "@/components/SolutionsSection";
import RoundedRectangle from "@/components/shared/RoundedRectangle";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <DevelopSection />
      <IconsComponent />
      <AlgorithmicMusicSection />
      <OurStory />
      <RoundedRectangle />
      <SolutionsSection />
      <LinksSection />
    </main>
  );
}
