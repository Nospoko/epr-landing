import React from "react";
import Link from "next/link";
import SunIcon from "../assets/icons/SunIcon";
import Image from "next/image";

export default function Header() {
  return (
    <header className="z-[999] relative flex w-full justify-between items-center px-6 py-1">
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
            <button className="buttonPrimary p3">Contact Us</button>
          </Link>
          <button className="buttonSecondary">
            <div className="flex items-center justify-center gap-x-2">
              {/* <SunIcon /> */}
              <Image src="/sun.svg" width={18} height={18} alt="Sun icon" />
              <Image
                src="/circle.svg"
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
