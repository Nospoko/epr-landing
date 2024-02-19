import React from "react";
import { links } from "../lib/data";
import Link from "next/link";

import SunIcon from "../assets/icons/SunIcon";
import Image from "next/image";

export default function Header() {
  return (
    <header className="z-[999] relative flex w-full justify-between items-center px-6 py-1">
      <div className="flex w-full flex-wrap items-center justify-center gap-y-1 p3SB text-neutralLight-neutral10 sm:w-[initial] sm:flex-nowrap sm:gap-5">
        <div className="flex w-full items-center justify-center px-3 py-3 hover:text-blue transition">
          <Link href="/">
            <p className="text-neutralLight-neutral10 h5">Algrtm</p>
          </Link>
        </div>
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
            <div className="flex items-center justify-center">
              <SunIcon />
              <Image
                src="/ellipse.svg"
                width={24}
                height={24}
                alt="ellipse icon"
              />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
