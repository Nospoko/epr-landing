import externalLinks from "@/data/externalLinks";
import Link from "next/link";
import React from "react";

const SocialLinksSection = ({ textColor, textDarkColor }) => {
  return (
    <div
      className={`flex gap-[2rem] md:gap-[2.75rem] flex-center justify-center text-black dark:text-white p3 w-full`}
    >
      <Link
        href={externalLinks.Linkedin}
        className={`text-${textColor} dark:text-${textDarkColor} animation`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Linkedin
      </Link>
      <Link
        href={externalLinks.Github}
        className={`text-${textColor} dark:text-${textDarkColor} animation`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </Link>
      {/* TODO: add when we have real Clunch account */}
      {/* <div
        className={` flex justify-center items-center text-${textColor} dark:text-${textDarkColor}`}
      > */}
      {/* <Link
          href={externalLinks.Clutch}
          className={`text-${textColor} dark:text-${textDarkColor} animation mr-2`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Clutch{" "}
        </Link> */}
      {/* right now stars are static, don't come from Clutch ;) */}
      {/* <div className="flex justify-center items-center">
          <Star color={textColor} />
          <Star color={textColor} />
          <Star color={textColor} />
          <Star color={textColor} />
          <StarEmpty color={textColor} />
        </div>
        4.9
      </div> */}
    </div>
  );
};

export default SocialLinksSection;
