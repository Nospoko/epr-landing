"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const ThemeToggle = () => {
  const isClient = typeof window !== "undefined";
  const [darkMode, setDarkMode] = useState(() => {
    if (isClient) {
      const theme = localStorage.getItem("theme");
      return theme === "dark";
    }
    return false;
  });

  useEffect(() => {
    if (isClient) {
      if (darkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }
  }, [darkMode, isClient]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="hidden md:flex items-center justify-center">
      <div
        className="toggleButton items-center justify-center hidden md:flex md:gap-1.5 dark:bg-neutralLight-neutral10 bg-neutralLight-neutral90 "
        onClick={toggleDarkMode}
      >
        {darkMode ? (
          <>
            <Image src="/moon.svg" width={18} height={18} alt="Moon icon" />
            <div
              className="bg-neutralLight-neutral10 dark:bg-neutralLight-neutral100 w-6 h-6 rounded-full shadow-md transition-transform duration-500"
              style={{ left: "2px", transitionProperty: "left" }}
            ></div>
          </>
        ) : (
          <>
            <div
              className="bg-neutralLight-neutral10 dark:bg-neutralLight-neutral100 w-6 h-6 rounded-full shadow-md transition-transform duration-500"
              style={{ right: "2px", transitionProperty: "right" }}
            ></div>
            <Image src="/sun.svg" width={18} height={18} alt="Sun icon" />
          </>
        )}
      </div>
    </div>
  );
};

export default ThemeToggle;
