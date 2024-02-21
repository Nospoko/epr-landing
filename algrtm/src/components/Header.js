"use client";
import Link from "next/link";
import React from "react";
import Button from "./shared/Button";
import Image from "next/image";

export default function Header() {
  return (
    <header className="z-[999] relative flex w-full justify-between items-center border-b-[1px] border-[#F5F3F5] border-b-solid p-4 sm:px-[44px] sm:py-4 lg:px-[5.88rem] lg:py-4">
      <div className="flex w-full flex-wrap flex-start sm:items-center sm:justify-center  p3SB text-neutralLight-neutral10 sm:w-[initial] sm:flex-nowrap sm:gap-5 ">
        <Link href="/">
          <div className="flex w-full items-center justify-center hover:text-blue transition">
            <p className="text-blueLight-blue50 h5">A</p>
            <p className="text-neutralLight-neutral10 h5">lgrtm</p>
          </div>
        </Link>
      </div>

      <div className="flex flex-end w-full flex-wrap items-center justify-end gap-y-1 sm:w-[initial] sm:flex-nowrap gap-4 ">
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

        <div className="flex  flex-end sm:items-center sm:justify-center gap-x-4 ">
          <Link href="/contactUs">
            <Button
              variant="primary"
              text="Contact Us"
              onClick={() => console.log("Button clicked!")}
            />
          </Link>

          <div className="hidden sm:flex items-center justify-center">
            <button className="toggleButton flex items-center justify-center gap-2">
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
            </button>
          </div>
          <button className=" flex items-center justify-center">
            <Image
              src="/menu.svg"
              width={24}
              height={24}
              alt="Hamburger icon"
              className="block sm:hidden"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
