"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CustomLink from "./shared/CustomLink";

const PianoRollDescription = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Wait until the component has mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center w-full xl:px-[12.625rem]">
      <div className="lg:flex-row flex flex-col gap-[4rem] lg:gap-[4.5rem] items-center justify-center w-full">
        <div className="flex flex-col gap-4 max-w-[24.03rem] w-full">
          <h1 className="h4 tracking-[-0.11rem] lg:h2SB lg:tracking-[-0.13rem] xl:h2 xl:tracking-[-0.16rem] text-neutralLight-neutral10 dark:text-neutralDark-neutral10 ">
            PianoRoll
          </h1>
          <div className="text-neutralLight-neutral20 dark:text-neutralDark-neutral20 flex flex-col gap-[1rem]">
            <p className="h5_smaller lg:5h_small xl:h5_500">
              PianoRoll is a platform for tracking effort and hosting piano
              competitions. PianoRoll users provide crowd-sourced, high-quality
              MIDI recordings rich with performance nuances. This allows us to
              curate datasets for cutting-edge machine learning research.
            </p>
            <p className="h6_small xl:h6">
              PianoRoll users provide crowd-sourced, high-quality MIDI
              recordings rich with performance nuances. This allows us to curate
              datasets for cutting-edge machine learning research.
            </p>
            <div className="flex items-start mt-[1.75rem]">
              <CustomLink
                variant="primary"
                text="Learn more"
                alt="arrow up icon"
                href="https://pianoroll.io/"
                target="_blank"
                rel="noopener noreferrer"
              />
            </div>
          </div>
        </div>
        <div className="bg-neutralLight-neutral90 dark:bg-neutralDark-neutral90 rounded-[2rem] md:min-w-[36.225rem] overflow-hidden">
          {/* Only render image after component is mounted */}
          {mounted && (
            <Image
              height={283}
              width={343}
              sizes="100vw"
              src={
                resolvedTheme === "dark"
                  ? "/PianoRollScreenDark.png"
                  : "/PianoRollScreen.png"
              }
              alt="Piano Roll App Screen"
              className="w-auto h-[17.678rem] md:h-[29.875rem]"
              priority
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default PianoRollDescription;
