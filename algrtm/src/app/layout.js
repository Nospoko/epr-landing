import localFont from "next/font/local";
import "./styles/globals.css";
import "./styles/typography.css";

const pingFont = localFont({ src: "/fonts/PingFangHK.ttf" });

export const metadata = {
  title: "Algrtm | Algorithmic solutions",
  description: "We develop algorithmic solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={pingFont.className}>{children}</body>
    </html>
  );
}
