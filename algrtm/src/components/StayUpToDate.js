import React from "react";
import Link from "next/link";
import CustomIcon from "./shared/CustomIcon";
import socialIconsArray from "@/data/socialIconsArray";
import externalLinks from "@/data/externalLinks";

const StayUpToDate = () => {
  return (
    <div className="flex flex-col md:flex-row gap-[1.5rem] xl:px-[12.62rem] pt-[5rem] ld:pt-[5.88rem] justify-center items-center">
      <div className="rounded-[1rem] bg-neutralLight-neutral90 dark:bg-neutralDark-neutral90 py-[4rem] px-[1.5rem] flex flex-col items-center gap-[2.75rem] w-full max-w-[31.625rem]">
        <div className="h3SB text-center md:text-[2.75rem] md:leading-[3.3rem] xl:text-[3.25rem] xl:leading-[3.9rem]">
          <p className="text-neutralLight-neutral10 dark:text-neutralDark-neutral10">
            Stay up to date with{" "}
            <span className="text-blueLight-blue50">PianoRoll</span>
          </p>
        </div>
        <div className="flex items-center justify-center gap-[1.5rem]">
          {socialIconsArray.slice(0, 3).map((icon, index) => (
            <Link
              key={index}
              href={externalLinks[icon.name]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CustomIcon
                name={icon.name}
                className="transition-transform duration-300 transform hover:scale-125"
                color="black"
                size={{ width: icon.size.width, height: icon.size.height }}
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="rounded-[1rem] bg-neutralLight-neutral100 dark:bg-neutralDark-neutral100 py-[4rem] px-[1.5rem] flex flex-col items-center gap-[2.75rem] border border-neutralLight-neutral90 dark:border-neutralDark-neutral90 w-full max-w-[31.625rem]">
        <div className="h3SB text-center md:text-[2.75rem] md:leading-[3.3rem] xl:text-[3.25rem] xl:leading-[3.9rem]">
          <p className="text-neutralLight-neutral10 dark:text-neutralDark-neutral10">
            Stay up to date with Piano for AI
          </p>
        </div>
        <div className="flex items-center justify-center gap-[1.5rem]">
          {socialIconsArray.slice(3, 6).map((icon, index) => (
            <Link
              key={index}
              href={externalLinks[icon.name]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CustomIcon
                name={icon.name}
                className="transition-transform duration-300 transform hover:scale-125"
                color="black"
                size={{ width: icon.size.width, height: icon.size.height }}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StayUpToDate;
