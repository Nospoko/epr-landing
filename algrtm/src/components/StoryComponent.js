import socialIconsArray from "@/data/socialIconsArray";
import Image from "next/image";
import React from "react";

const StoryComponent = () => {
  return (
    <section className="py-[7.75rem] mt-[7.19rem]">
      <div className="flex flex-col gap-[1.5rem] items-center justify-center mb-[7.75rem]">
        <h2 className="h2 leading-[4rem] text-neutralLight-neutral10">
          What’s the story?
        </h2>
        <div>
          <h6 className="h6 text-neutralLight-neutral20">
            Once, a passion for algorithms, AI, ML, and music birthed an idea:
            to teach AI to play the piano. But not just any piano with a flat
            sound. A piano filled with emotion, and the nuance of pressure on
            each key—just like a real person.
          </h6>
        </div>
      </div>

      <div></div>
      <div className="flex gap-[1.5rem] px-[12.62rem] py-[5.88rem]">
        <div className="rounded-md bg-neutralLight-neutral90 py-[4rem] px-[1.5rem] flex flex-col items-center gap-[2.75rem]">
          <div className="text-[3.25rem] font-semibold text-center">
            <p className="text-neutralLight-neutral10">
              Stay up to date with
              <p className="text-blueLight-blue50">PianoRoll</p>
            </p>{" "}
          </div>
          <div className="flex items-center justify-center gap-[1.5rem]">
            {socialIconsArray.slice(0, 3).map((image) => (
              <Image
                key={image.name}
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
            ))}
          </div>
        </div>
        <div className="rounded-md bg-neutralLight-neutral90 py-[4rem] px-[1.5rem] flex flex-col items-center gap-[2.75rem] max-w-[31.625rem]">
          <div className="text-[3.25rem] font-semibold text-center">
            <p className="text-neutralLight-neutral10">
              Stay up to date <br />
              with Piano for AI
            </p>
          </div>
          <div className="flex items-center justify-center gap-[1.5rem]">
            {socialIconsArray.slice(3, 6).map((image) => (
              <Image
                key={image.name}
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryComponent;
