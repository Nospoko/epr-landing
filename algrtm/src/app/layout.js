import localFont from "next/font/local";
import "../styles/globals.css";
import Navbar from "../components/Header";
import Footer from "@/components/Footer";
import LinksSection from "@/components/LinksSection";
import Header from "../components/Header";

const pingFont = localFont({ src: "../fonts/PingFangHK.ttf" });

export const metadata = {
  title: "Algrtm | Algorithmic solutions",
  description: "We develop algorithmic solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${pingFont.className} dark:bg-neutralDark-neutral100`}>
        <Header />
        {children}
        <LinksSection />
        <Footer />
      </body>
    </html>
  );
}
