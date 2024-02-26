import localFont from "next/font/local";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import LinksSection from "@/components/LinksSection";
import SolutionsSection from "@/components/SolutionsSection";
import OurStory from "@/components/OurStory";
import DevelopSection from "@/components/DevelopSection";

const pingFont = localFont({ src: "../fonts/PingFangHK.ttf" });

export const metadata = {
  title: "Algrtm | Algorithmic solutions",
  description: "We develop algorithmic solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${pingFont.className} text-gray-950 relative h-[5000px]`}
      >
        <Navbar />
        {children}
        <DevelopSection />
        <OurStory />
        <SolutionsSection />
        <LinksSection />
        <Footer />
      </body>
    </html>
  );
}
