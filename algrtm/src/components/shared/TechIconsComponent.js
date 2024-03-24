import imagesArray from "@/data/imagesArray";
import Image from "next/image";
import React from "react";

const TechIconsComponent = ({
  size = "large",
  color = true,
  classNames = "justify-between gap-4",
}) => {
  return (
    <div
      className={`flex flex-wrap items-stretch mt-[2.75rem] w-full ${classNames}`}
    >
      {imagesArray.map((image) => {
        return (
          <Image
            key={image.name}
            src={`/assets/logos/${image.name
              .toLowerCase()
              .split(" ")
              .join("-")}-logo.svg`}
            width={image[size].width}
            height={image[size].height}
            alt={`${
              image.name.charAt(0).toUpperCase() + image.name.slice(1)
            } logo`}
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
