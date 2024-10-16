import React from "react";
import descriptionComponentTexts from "@/data/descriptionComponentTexts";
import Image from "next/image";

const DescriptionImageComponent = ({
  version,
  image,
  imageWidth,
  imageHeight,
}) => {
  const { title, subtitle, description } = descriptionComponentTexts[version];
  return (
    <section className="flex flex-col lg:flex-row gap-[1.5rem] xl:gap-16 py-[2.75rem] xl:px-[2.75rem] xl:py-[5.88rem] text-neutralLight-neutral10 dark:text-neutralDark-neutral10 items-center">
      <div className="flex flex-col items-stretch max-w-[24.03rem]">
        <h2 className="h2 lg:h1SB xl:h1 ">{title}</h2>
        <div className="mt-6 text-[1.5rem] leading-[1.86rem] font-medium lg:h5_small xl:h5_500">
          {subtitle}
        </div>
        <div className="mt-4 h6_400 xl:h6">{description}</div>
      </div>
      <div
        className="flex shrink-0 max-w-[343px] max-h-[283px] md:max-w-none md:max-h-none"
        style={{
          position: "relative",
          width: imageWidth,
          height: imageHeight,
        }}
      >
        <Image
          src={image}
          alt="Image"
          sizes={imageWidth}
          fill
          className="rounded-[2rem] "
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    </section>
  );
};

export default DescriptionImageComponent;
