"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./shared/Button";

export default function Navbar() {
  return (
    <header className="z-[999] relative flex w-full justify-between items-center px-6 py-1 border-b-[1px] border-[#F5F3F5] border-b-solid">
      <div className="flex w-full flex-wrap items-center justify-center gap-y-1 p3SB text-neutralLight-neutral10 sm:w-[initial] sm:flex-nowrap sm:gap-5">
        <Link href="/">
          <div className="flex w-full items-center justify-center px-3 py-3 hover:text-blue transition">
            <p className="text-blueLight-blue50 h5">A</p>
            <p className="text-neutralLight-neutral10 h5">lgrtm</p>
          </div>
        </Link>
      </div>

      <div>
        <div className="flex w-full flex-wrap items-center justify-center gap-y-1 text-neutralLight-neutral10 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          <div className="flex items-center justify-center">
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

          <Link href="/contactUs">
            <Button
              variant="primary"
              text="Contact Us"
              onClick={() => console.log("Button clicked!")}
            />
          </Link>

          <button className="toggleButton">
            <div className="flex items-center justify-center gap-x-2">
              <Image src="/sun.svg" width={18} height={18} alt="Sun icon" />

              <Image
                src="/ellipse.svg"
                width={24}
                height={24}
                alt="Ellipse icon"
              />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
