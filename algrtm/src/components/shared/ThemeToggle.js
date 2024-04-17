"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="hidden md:flex items-center justify-center">
      <div
        className="toggleButton items-center justify-center hidden md:flex md:gap-1.5 dark:bg-neutralLight-neutral10 bg-neutralLight-neutral90 "
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? (
          <div
            className="bg-neutralLight-neutral10 dark:bg-neutralLight-neutral100 w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"
            style={{ left: "2px" }}
          ></div>
        ) : (
          <div
            className="bg-neutralLight-neutral10 dark:bg-neutralLight-neutral100 w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"
            style={{ right: "2px" }}
          ></div>
        )}
        <Image
          src={darkMode ? "/moon.svg" : "/sun.svg"}
          width={18}
          height={18}
          alt={darkMode ? "Moon icon" : "Sun icon"}
        />
      </div>
    </div>
  );
};

export default ThemeToggle;
