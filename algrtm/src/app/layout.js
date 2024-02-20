import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/Navbar";

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
      </body>
    </html>
  );
}
