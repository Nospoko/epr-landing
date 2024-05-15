import externalLinks from "@/data/externalLinks";
import Link from "next/link";
import React from "react";
import Star from "./icons/Star";
import StarEmpty from "./icons/StarEmpty";

const SocialLinksSection = (textColor, textDarkColor) => {
  return (
    <div
      className={`flex gap-[2.75rem] flex-center justify-center text-${textColor} dark:text-${textDarkColor} p3 w-full`}
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
        className={`text-${textColor} animation`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </Link>
      <div className={` flex text-${textColor}`}>
        {/* TODO- add link when we create account */}
        <Link
          href={externalLinks.Clutch}
          className={`text-${textColor} animation mr-2`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Clutch{" "}
        </Link>
        {/* right now stars are static, don't come from Clutch ;) */}
        <Star color="black" />
        <Star color="black" />
        <Star color="black" />
        <Star color="black" />
        <StarEmpty color="black" />
        4.9
      </div>
    </div>
  );
};

export default SocialLinksSection;
