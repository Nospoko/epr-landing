"use client";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import ThemeToggle from "./shared/ThemeToggle";
import SocialLinksSection from "./SocialLinksSection";
import Menu from "./icons/Menu";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [selectedMenu, setSelectedMenu] = useState("");

  useEffect(() => {
    if (pathname === "/piano-for-ai") {
      setSelectedMenu("pianoForAI");
    } else if (pathname === "/custom-solutions") {
      setSelectedMenu("customSolutions");
    } else if (pathname === "/contact-us") {
      setSelectedMenu("contactUs");
    } else {
      setSelectedMenu("");
    }
  }, [pathname]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
    setMenuOpen(false);
  };

  return (
    <nav className="z-[999] relative flex w-full justify-between items-center self-stretch border-b border-neutralLight-neutral90 dark:border-neutralDark-neutral90 border-solid p-4 md:px-[2.75rem] xl:px-[5.875rem] dark:bg-neutralDark-neutral100">
      <div className="flex justify-start p3SB text-neutralLight-neutral10 dark:text-neutralDark-neutral10 gap-5">
        <Link
          href="/"
          className="transition-transform duration-500 ease-in-out transform hover:scale-150"
          onClick={() => handleMenuClick("/")}
        >
          <div className="flex w-full items-center justify-center transition">
            {mounted && (
              <Image
                height={45}
                width={97.753}
                sizes="100vw"
                src={
                  resolvedTheme === "dark"
                    ? "/EPR_Labs_logo_white_waves.svg"
                    : "/EPR_Labs_logo_color.svg"
                }
                alt="EPR Labs logo"
              />
            )}
          </div>
        </Link>
      </div>

      <div className="flex w-full max-w-[37rem] flex-wrap items-center justify-end gap-y-1 md:w-[initial] md:flex-nowrap gap-[1.5rem]">
        <div className="hidden md:flex items-center justify-center gap-x-2 text-neutralLight-neutral10 dark:text-neutralDark-neutral10">
          <Link
            href="/piano-for-ai"
            className={`flex w-full items-center justify-center transition md:p3SB xl:p3 p-2.5 animation ${
              selectedMenu === "pianoForAI"
                ? "text-blueLight-blue50 border-b-2 border-blueLight-blue50"
                : ""
            } hover:text-blueLight-blue50`}
            onClick={() => handleMenuClick("pianoForAI")}
          >
            Piano for AI
          </Link>

          <Link
            href="/custom-solutions"
            className={`flex w-full items-center justify-center text-nowrap transition md:p3SB xl:p3 p-2.5 animation ${
              selectedMenu === "customSolutions"
                ? "text-blueLight-blue50 border-b-2 border-blueLight-blue50"
                : ""
            } hover:text-blueLight-blue50`}
            onClick={() => handleMenuClick("customSolutions")}
          >
            Custom Solutions
          </Link>
        </div>

        <Link
          href="/contact-us"
          className={`hidden md:flex justify-center items-center select-none text-sm px-5 py-2.5 h-10 gap-4 rounded-md border border-neutralLight-neutral40 bg-neutralLight-neutral10 dark:bg-neutralDark-neutral10 p3SB animation ${
            selectedMenu === "contactUs"
              ? "text-blueLight-blue50"
              : "text-neutralLight-neutral100 dark:text-neutralDark-neutral100"
          } hover:bg-neutralLight-neutral20`}
          onClick={() => handleMenuClick("contactUs")}
        >
          Contact us
        </Link>
        <div className="hidden md:flex">
          <ThemeToggle />
        </div>

        <div
          className="flex md:hidden items-center justify-center cursor-pointer"
          onClick={handleNav}
        >
          <Menu className="mr-[1rem]" color="#2E2E2E" />
        </div>

        <div
          className={`fixed bg-neutralLight-neutral100 dark:bg-neutralDark-neutral100 ease-in duration-500 flex flex-col justify-between top-0 w-full h-screen ${
            menuOpen ? "right-0" : "right-[-100%]"
          }`}
        >
          {/* Top section */}
          <div className="absolute top-0 left-0 right-0 flex border-b border-solid border-neutralLight-neutral90 dark:border-neutralDark-neutral90 p-4 items-center justify-between">
            <div className="p3SB text-neutralLight-neutral10 dark:text-neutralDark-neutral10">
              <Link
                href="/"
                className="transition-transform duration-500 ease-in-out transform hover:scale-150 hover:rotate-180"
                onClick={() => setMenuOpen(false)}
              >
                <p className="text-neutralLight-neutral10 dark:text-neutralDark-neutral10 h5">
                  EPR
                </p>
              </Link>
            </div>
            <div
              onClick={handleNav}
              className="cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-150"
            >
              <AiOutlineClose
                size={21}
                className="dark:text-neutralDark-neutral10"
              />
            </div>
          </div>

          {/* Middle section */}
          <div className=" flex flex-grow flex-col justify-center items-center text-center gap-[1.5rem] text-neutralLight-neutral10 dark:text-neutralDark-neutral10 p1SB w-full">
            <Link
              href="/piano-for-ai"
              onClick={() => handleMenuClick("pianoRoll")}
            >
              <li
                className={`py-4 cursor-pointer list-none hover:text-blueLight-blue50 transition-transform duration-500 ease-in-out transform hover:scale-110 active:font-semibold p-[0.625rem] ${
                  selectedMenu === "pianoRoll"
                    ? "text-blueLight-blue50 border-b-2 border-blueLight-blue50"
                    : ""
                }`}
              >
                Piano for AI
              </li>
            </Link>
            <Link
              href="/custom-solutions"
              onClick={() => handleMenuClick("customSolutions")}
            >
              <li
                className={`py-4 cursor-pointer list-none hover:text-blueLight-blue50 transition-transform duration-500 ease-in-out transform hover:scale-110 active:font-semibold p-[0.625rem] ${
                  selectedMenu === "customSolutions"
                    ? "text-blueLight-blue50 border-b-2 border-blueLight-blue50"
                    : ""
                }`}
              >
                Custom Solutions
              </li>
            </Link>

            <div className="flex flex-col gap-[2rem]">
              <Link
                href="/contact-us"
                onClick={() => handleMenuClick("contactUs")}
              >
                <li
                  className={`flex justify-center items-center select-none text-sm px-5 py-2.5 h-10 gap-4 rounded-md border border-neutralLight-neutral40 bg-neutralLight-neutral10 dark:bg-neutralDark-neutral10 text-neutralLight-neutral100 dark:text-neutralDark-neutral100 p3SB animation ${
                    selectedMenu === "contactUs" ? "text-blueLight-blue50" : ""
                  }`}
                >
                  Contact us
                </li>
              </Link>
              <ThemeToggle />
            </div>
          </div>

          {/* Bottom section */}
          <div className="mb-[1.5rem] flex justify-end items-end width: 100%">
            <SocialLinksSection textColor="black" textDarkColor="white" />
          </div>
        </div>
      </div>
    </nav>
  );
}
