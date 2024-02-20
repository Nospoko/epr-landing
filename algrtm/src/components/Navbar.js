"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./shared/Button";

export default function Navbar() {
  return (
    <header
      className="z-[999] relative flex w-full justify-between items-center border-b-[1px] border-[#F5F3F5] border-b-solid p-4 sm:px-[44px] sm:py-4 lg:px-[5.88rem] lg:py-4
   "
    >
      {/* logo */}
      <div className="flex w-full flex-wrap flex-start sm:items-center sm:justify-center  p3SB text-neutralLight-neutral10 sm:w-[initial] sm:flex-nowrap sm:gap-5">
        <Link href="/">
          <div className="flex w-full items-center justify-center hover:text-blue transition">
            <p className="text-blueLight-blue50 h5">A</p>
            <p className="text-neutralLight-neutral10 h5">lgrtm</p>
          </div>
        </Link>
      </div>

      {/* div po prawej */}
      <div className="flex w-full flex-wrap items-center justify-center gap-y-1 sm:w-[initial] sm:flex-nowrap gap-4">
        {/* routy */}
        <div className="hidden sm:flex  items-center justify-center gap-x-2">
          <Link
            className="flex w-full items-center justify-center px-3 py-3 hover:text-blue transition p3 "
            href="/pianoRoll"
          >
            PianoRoll
          </Link>
          <Link
            className="flex w-full items-center justify-center px-3 py-3 hover:text-blue transition p3 "
            href="/customProjects"
          >
            CustomProjects
          </Link>
          <Link
            className="flex w-full items-center justify-center px-3 py-3 hover:text-blue transition p3 "
            href="/knowledge"
          >
            Knowledge
          </Link>
        </div>
        {/* buttony */}
        <div className="flex  flex-end sm:items-center sm:justify-center gap-x-4 ">
          {/* button contact US */}
          <Link href="/contactUs">
            <Button
              variant="primary"
              text="Contact Us"
              onClick={() => console.log("Button clicked!")}
            />
          </Link>
          {/* toggle button */}

          <button className="toggleButton hidden sm:block ">
            <div className="flex items-center justify-center gap-x-2">
              <Image
                src="/sun.svg"
                width={18}
                height={18}
                alt="Sun icon"
                className="hidden sm:block"
              />

              <Image
                src="/ellipse.svg"
                width={24}
                height={24}
                alt="Ellipse icon"
                className="hidden sm:block"
              />
            </div>
          </button>

          <Image
            src="/menu.svg"
            width={24}
            height={24}
            alt="Hamburger icon"
            className="toggleButton block sm:hidden"
          />
        </div>
      </div>
    </header>
  );
}
