// TODO add, all links

import externalLinks from "@/data/externalLinks";
import socialIconsArray from "@/data/socialIconsArray";
import stepsData from "@/data/stepsData";
import Link from "next/link";
import React from "react";
import CustomIcon from "./shared/CustomIcon";
import StayUpToDate from "./StayUpToDate";

const StoryComponent = () => {
  return (
    <section className="pt-[2.75rem] pb-[7.75rem] xl:pt-[7.75rem] xl:pb-[7.75rem] w-full">
      <div className="flex flex-col items-center justify-center text-center mb-[2.75rem] md:mb-[7.75rem] gap-[1.5rem]">
        <h2 className="h4 md:h2SB xl:h2 text-neutralLight-neutral10 dark:text-neutralDark-neutral10">
          What’s the story?
        </h2>
        <div className="md:mx-[9.5rem] xl:mx-[22.5rem] max-w-[45rem]">
          <h6 className="h6 text-neutralLight-neutral20 dark:text-neutralDark-neutral20 text-center">
            Once, a passion for algorithms, AI, ML, and music birthed an idea:
            to teach AI to play the piano. But not just any piano with a flat
            sound. A piano filled with emotion, and the nuance of pressure on
            each key—just like a real person.
          </h6>
        </div>
      </div>
      {/* TODO- during adding media querries pay attantion on proper display- elements may come into the center */}
      <div className="flex flex-col xl:mx-[12.625rem] relative gap-[2rem]">
        {stepsData.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row md: relative${
              index % 2 === 0 ? "" : "md:flex-row-reverse"
            }`}
          >
            <div
              className="hidden md:block h-full w-0.5 absolute left-1/2 transform -translate-x-1/2 bg-neutralLight-neutral90 dark:bg-neutralDark-neutral90"
              style={{ height: "100%", top: "0" }}
            ></div>
            <div
              className={`flex ${index % 2 === 0 ? "" : "flex-row-reverse"}`}
            >
              <div
                className={`hidden md:flex-shrink-0 w-10 h-10 items-center justify-center md:inline-flex absolute z-10 left-1/2 transform -translate-x-1/2`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8">
                  <rect width="8" height="8" fill="#B3B3B3" />
                </svg>
              </div>
              <div
                className={`flex flex-col gap-[1rem] md:flex-grow md:max-w-[50%] ${
                  index % 2 === 0
                    ? "md:pr-[1.5rem] xl:pr-[4.875rem]"
                    : "md:pl-[1.5rem] xl:pl-[4.875rem]"
                }`}
              >
                <p className=" p1SB text-blueLight-blue50">{step.step}</p>
                <h4 className=" h5 xl:h4 text-neutralLight-neutral10 dark:text-neutralDark-neutral10 tracking-wider">
                  {step.title}
                </h4>
                <h6 className=" h6 text-neutralLight-neutral20 dark:text-neutralDark-neutral20">
                  {step.description}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* {/* <div className="flex flex-col md:flex-row gap-[1.5rem] xl:px-[12.62rem] pt-[5rem] ld:pt-[5.88rem] justify-center items-center">
        <div className="rounded-[1rem]  bg-neutralLight-neutral90  dark:bg-neutralDark-neutral90 py-[4rem] px-[1.5rem] flex flex-col items-center gap-[2.75rem] w-full max-w-[31.625rem]">
          <div className=" h3SB text-center md:text-[2.75rem] md:leading-[3.3rem] xl:text-[3.25rem] xl:leading-[3.9rem] ">
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
                  key={index}
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
          <div className=" h3SB text-center md:text-[2.75rem] md:leading-[3.3rem] xl:text-[3.25rem] xl:leading-[3.9rem]">
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
                  key={index}
                  name={icon.name}
                  className="transition-transform duration-300 transform hover:scale-125"
                  color="black"
                  size={{ width: icon.size.width, height: icon.size.height }}
                />
              </Link>
            ))}
          </div>
        </div>
      </div> */}
      <StayUpToDate />
    </section>
  );
};

export default StoryComponent;
