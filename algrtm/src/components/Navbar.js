"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="z-[999] relative flex w-full justify-between items-center self-stretch border-b border-[#F5F3F5] border-solid p-4 md:px-[2.75rem] lg:px-[5.875rem]">
      <div className="flex justify-start p3SB text-neutralLight-neutral10 gap-5 ">
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

      <div className="flex w-full flex-wrap items-center justify-end gap-y-1 md:w-[initial] sm:flex-nowrap gap-4 ">
        <div className="hidden md:flex items-center justify-center gap-x-2">
          <Link
            className="flex w-full items-center justify-center transition sm:p3SB lg:p3 p-2.5 animation"
            href="/pianoRoll"
          >
            PianoRoll
          </Link>

          <Link
            className="flex w-full items-center justify-center  transition sm:p3SB lg:p3 p-2.5 animation"
            href="/customSolutions"
          >
            Custom Solutions
          </Link>
          <Link
            className="flex w-full items-center justify-center  transition sm:p3SB lg:p3 p-2.5 animation"
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
        <div
          className=" flex md:hidden items-center justify-center cursor-pointer"
          onClick={handleNav}
        >
          <Image src="/menu.svg" width={24} height={24} alt="Hamburger icon" />
        </div>
        <div
          className={
            menuOpen
              ? "fixed right-0 top-0 width-[100%] h-[100vh] bg-neutralLight-neutral90 p-10 ease-in duration-500"
              : "fixed right-[-100%] top-0 width-[100%] h-screen bg-neutralLight-neutral90 p-10 ease-in duration-500"
          }
        >
          <div className="flex w-full items-center justify-end">
            <div onClick={handleNav} className="cursor-pointer">
              <AiOutlineClose size={21} />
            </div>
          </div>
          <div className="flex flex-col py-4">
            <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer list-none hover:text-blueLight-blue50 active:font-semibold"
              >
                Home
              </li>
            </Link>

            <Link href="/pianoRoll">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer list-none hover:text-blueLight-blue50 active:font-semibold"
              >
                PianoRoll
              </li>
            </Link>

            <Link href="/customSolutions">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer list-none hover:text-blueLight-blue50 active:font-semibold"
              >
                Custom Solutions
              </li>
            </Link>
            <Link href="/knowledge">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer list-none hover:text-blueLight-blue50 active:font-semibold"
              >
                Knowledge
              </li>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
