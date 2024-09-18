import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={36}
        height={36}
        sizes="36x36"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
    );
  }

  const toggleDarkMode = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className="toggleButton items-center justify-center flex gap-1.5 dark:bg-neutralLight-neutral10 bg-neutralLight-neutral90"
        onClick={toggleDarkMode}
      >
        {resolvedTheme === "dark" ? (
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
