"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="z-[999] relative flex w-full justify-between items-center self-stretch border-b border-[#F5F3F5] border-solid p-4 md:px-[2.75rem] lg:px-[5.875rem]">
      <div className="flex w-full flex-wrap flex-start sm:items-center sm:justify-center  p3SB text-neutralLight-neutral10 sm:w-[initial] sm:flex-nowrap sm:gap-5 ">
        <Link
          href="/"
          className="transition-transform duration-500 ease-in-out transform hover:scale-150 hover:rotate-180"
        >
          <div className="flex w-full items-center justify-center hover:text-blue transition">
            <p className="text-blueLight-blue50 h5">A</p>
            <p className="text-neutralLight-neutral10 h5">lgrtm</p>
          </div>
        </Link>
      </div>

      <div className="flex flex-end w-full flex-wrap items-center justify-end gap-y-1 md:w-[initial] sm:flex-nowrap gap-4 ">
        <div className="hidden md:flex items-center justify-center gap-x-2">
          <Link
            className="flex w-full items-center justify-center hover:text-blue transition sm:p3SB lg:p3 p-2.5 animation"
            href="/pianoRoll"
          >
            PianoRoll
          </Link>

          <Link
            className="flex w-full items-center justify-center hover:text-blue transition sm:p3SB lg:p3 p-2.5 animation"
            href="/customSolutions"
          >
            CustomSolutions
          </Link>
          <Link
            className="flex w-full items-center justify-center  hover:text-blue transition sm:p3SB lg:p3 p-2.5 animation"
            href="/knowledge"
          >
            Knowledge
          </Link>
        </div>

        <Link
          className="flex justify-center items-center select-none text-sm px-5 py-2.5 h-10 gap-4 rounded-md border border-neutralLight-neutral40 bg-neutralLight-neutral10 text-neutralLight-neutral100 p3SB animation"
          href="/contactUs"
        >
          Contact us
        </Link>

        <div className=" hidden md:flex items-center justify-center ">
          <button className="toggleButton items-center justify-center  hidden md:flex md:gap-1.5">
            <Image src="/sun.svg" width={18} height={18} alt="Sun icon" />
            <Image
              src="/ellipse.svg"
              width={24}
              height={24}
              alt="Ellipse icon"
            />
          </button>
        </div>
        <button className=" flex md:hidden items-center justify-center">
          <Image src="/menu.svg" width={24} height={24} alt="Hamburger icon" />
        </button>
      </div>
    </header>
  );
}
