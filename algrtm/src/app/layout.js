import localFont from "next/font/local";
import "../styles/globals.css";
import Footer from "@/components/Footer";
import LinksSection from "@/components/LinksSection";
import Header from "../components/Header";
import { Providers } from "@/providers/providers";

const mulishFont = localFont({ src: "../fonts/Mulish.ttf" });

export const metadata = {
  title: "EPR Labs",
  description: "Make Data Science Great Again.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${mulishFont.className} dark:bg-neutralDark-neutral100`}
      >
        <Providers>
          <Header />
          {children}
          <LinksSection />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
