"use client";
import React from "react";
import Image from "next/image";
const ThemeToggle = () => {
  return (
    <div className=" hidden md:flex items-center justify-center ">
      <button className="toggleButton items-center justify-center  hidden md:flex md:gap-1.5">
        <Image src="/sun.svg" width={18} height={18} alt="Sun icon" />
        <Image src="/ellipse.svg" width={24} height={24} alt="Ellipse icon" />
      </button>
    </div>
  );
};

export default ThemeToggle;
