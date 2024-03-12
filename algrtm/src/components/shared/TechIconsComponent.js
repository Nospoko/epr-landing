import imagesArray from "@/data/imagesArray";
import Image from "next/image";
import React from "react";

const TechIconsComponent = ({ size = "large", color = true }) => {
  return (
    <div className="flex justify-between items-stretch mt-[2.75rem] w-full">
      {imagesArray.map((image) => {
        console.log(image.name);
        return (
          <Image
            key={image.name}
            src={`/assets/logos/coloredLogos/${image.name
              .toLowerCase()
              .split(" ")
              .join("-")}-logo.svg`}
            width={image[size].width}
            height={image[size].height}
            alt={`${image.name.toUpperCase()} logo`}
            className={`transition-transform duration-300 transform hover:scale-125 ${
              !color && "grayscale"
            }`}
          />
        );
      })}
    </div>
  );
};

export default TechIconsComponent;
