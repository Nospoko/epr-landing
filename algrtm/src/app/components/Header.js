import React from "react";
import { links } from "../lib/data";
import Link from "next/link";
import EllipseIcon from "../assets/icons/EllipseIcon";
import SunIcon from "../assets/icons/SunIcon";

export default function Header() {
  return (
    <header className="z-[999] relative flex w-full justify-between items-center px-6 py-1">
      <div className="flex w-full flex-wrap items-center justify-center gap-y-1 p3SB text-neutralLight-neutral10 sm:w-[initial] sm:flex-nowrap sm:gap-5">
        <div className="flex w-full items-center justify-center px-3 py-3 hover:text-blue transition">
          <p className="text-blueLight-blue50 h5 ">A</p>
          <p className="text-neutralLight-neutral10 h5">lgrtm</p>
        </div>
      </div>

      <div>
        <div className="flex w-full flex-wrap items-center justify-center gap-y-1 text-neutralLight-neutral10 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <div className="flex items-center justify-center" key={link.path}>
              <Link
                className="flex w-full items-center justify-center px-3 py-3 hover:text-blue transition p3 "
                href={link.path}
              >
                {link.name}
              </Link>
            </div>
          ))}
          <button className="buttonPrimary p3">Contact Us</button>
          <button className="buttonSecondary">
            <div className="flex items-center justify-center">
              <SunIcon />
              <EllipseIcon />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
