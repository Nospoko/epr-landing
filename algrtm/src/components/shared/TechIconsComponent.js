import imagesArray from "@/data/imagesArray";
import Image from "next/image";
import React from "react";

const TechIconsComponent = ({
  size = "large",
  color = true,
  justifyBetween = true,
  gap = true,
}) => {
  const containerStyle = {
    justifyContent: justifyBetween ? "space-between" : "center",
  };
  return (
    <div
      className={`flex items-stretch mt-[2.75rem] w-full ${gap ? "gap-4" : ""}`}
      style={containerStyle}
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
