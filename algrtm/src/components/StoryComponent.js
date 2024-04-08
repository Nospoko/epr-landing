// TODO add, all links
import externalLinks from "@/data/externalLinks";
import socialIconsArray from "@/data/socialIconsArray";
import stepsData from "@/data/stepsData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const StoryComponent = () => {
  return (
    <section className="pt-[2.75rem] pb-[7.75rem] lg:pt-[7.75rem] lg:pb-[7.75rem] w-full">
      <div className="flex flex-col items-center justify-center mb-[7.75rem] gap-[1.5rem]">
        <h2 className="h4 md:h2SB lg:h2 text-neutralLight-neutral10">
          What’s the story?
        </h2>
        <div className="md:mx-[9.5rem] lg:mx-[22.5rem] max-w-[45rem]">
          <h6 className="h6 text-neutralLight-neutral20 text-center">
            Once, a passion for algorithms, AI, ML, and music birthed an idea:
            to teach AI to play the piano. But not just any piano with a flat
            sound. A piano filled with emotion, and the nuance of pressure on
            each key—just like a real person.
          </h6>
        </div>
      </div>
      {/* TODO- during adding media querries pay attantion on proper display- elements may come into the center */}
      <div className="flex flex-col lg:mx-[12.625rem] relative gap-[2rem]">
        {stepsData.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row md: relative${
              index % 2 === 0 ? "" : "md:flex-row-reverse"
            }`}
          >
            <div
              className="hidden md:block h-full w-0.5 absolute left-1/2 transform -translate-x-1/2 bg-neutralLight-neutral90"
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
                className={`flex flex-col md:flex-grow md:max-w-[50%] ${
                  index % 2 === 0
                    ? "md:pr-[1.5rem] lg:pr-[4.875rem]"
                    : "md:pl-[1.5rem] lg:pl-[4.875rem]"
                }`}
              >
                <p className=" p1SB text-blueLight-blue50">{step.step}</p>
                <h4 className=" h5 lg:h4 text-neutralLight-neutral10 tracking-wider">
                  {step.title}
                </h4>
                <h6 className=" h6 text-neutralLight-neutral20">
                  {step.description}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-[1.5rem] lg:px-[12.62rem] pt-[5.88rem] justify-center items-center">
        <div className="rounded-[1rem]  bg-neutralLight-neutral90 py-[4rem] px-[1.5rem] flex flex-col items-center gap-[2.75rem] w-full max-w-[31.625rem]">
          <div className=" text-[2.25rem] md:h4 lg:text-[3.25rem] font-semibold text-center">
            <p className="text-neutralLight-neutral10">
              Stay up to date <br />
              with <span className="text-blueLight-blue50">PianoRoll</span>
            </p>
          </div>
          <div className="flex items-center justify-center gap-[1.5rem]">
            {socialIconsArray.slice(0, 3).map((image) => {
              return (
                <Link
                  key={image.name}
                  href={externalLinks[image.name]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={`/assets/social/${image.name
                      .toLowerCase()
                      .split(" ")
                      .join("-")}-logo.svg`}
                    width={image.size.width}
                    height={image.size.height}
                    alt={`${
                      image.name.charAt(0).toUpperCase() + image.name.slice(1)
                    } logo`}
                    className="transition-transform duration-300 transform hover:scale-125"
                  />
                </Link>
              );
            })}
          </div>
        </div>
        <div className="rounded-[1rem] bg-neutralLight-neutral100 py-[4rem] px-[1.5rem] flex flex-col items-center gap-[2.75rem] border border-neutralLight-neutral90 w-full max-w-[31.625rem]">
          <div className=" text-[2.25rem] md:h4 lg:text-[3.25rem] font-semibold text-center">
            <p className="text-neutralLight-neutral10">
              Stay up to date <br />
              with Piano for AI
            </p>
          </div>
          <div className="flex items-center justify-center gap-[1.5rem]">
            {socialIconsArray.slice(3, 6).map((image, index) => (
              <Link
                key={index}
                href={externalLinks[image.name]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={`assets/social/${image.name
                    .toLowerCase()
                    .split(" ")
                    .join("-")}-logo.svg`}
                  width={image.size.width}
                  height={image.size.height}
                  alt={`${
                    image.name.charAt(0).toUpperCase() + image.name.slice(1)
                  } logo`}
                  className="transition-transform duration-300 transform hover:scale-125"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryComponent;
