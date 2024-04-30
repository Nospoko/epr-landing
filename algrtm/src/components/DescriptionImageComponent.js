import React from "react";

import Image from "next/image";

import descriptionComponentTexts from "@/data/descriptionComponentTexts";

const DescriptionImageComponent = ({ version }) => {
  const { title, subtitle, description } = descriptionComponentTexts[version];
  return (
    <section className="flex flex-col lg:flex-row gap-[1.5rem] xl:gap-16 py-[2.75rem] xl:px-[2.75rem] xl:py-[5.88rem] text-neutralLight-neutral10 dark:text-neutralDark-neutral10 items-center">
      <div className="flex flex-col items-stretch max-w-[24.53rem]">
        <h2 className="h2SB xl:h2 leading-[4rem]">{title}</h2>
        <div className="mt-6 h6_400 xl:h6 leading-[1.98rem]">{subtitle}</div>
        <div className="mt-4 p2 leading-[1.64rem]">{description}</div>
      </div>

      <div className="flex shrink-0">
        <Image
          src="/womanPlaying-image.png"
          alt="Woman playing the piano"
          width={343}
          height={355}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        ></Image>
      </div>
    </section>
  );
};

export default DescriptionImageComponent;
