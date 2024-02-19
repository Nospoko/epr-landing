import localFont from "next/font/local";
import "./styles/globals.css";
import "./styles/typography.css";

import Header from "./components/Header";

const pingFont = localFont({ src: "/fonts/PingFangHK.ttf" });

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
        <Header />
        {children}
      </body>
    </html>
  );
}
