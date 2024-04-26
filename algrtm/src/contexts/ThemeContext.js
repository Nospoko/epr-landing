"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null);

export default function ThemeContextProvider({ children }) {
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
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("Theme context should be used within ThemeContextProvider");
  }

  return context;
};
