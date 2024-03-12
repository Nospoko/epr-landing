import Image from "next/image";
import React from "react";

const TechIconsComponent = ({ size = "large", color = true }) => {
  const imagesArray = [
    {
      name: "python",
      large: { width: 64, height: 64 },
      small: { width: 24.1, height: 24 },
    },
    {
      name: "pandas",
      large: { width: 64, height: 64 },
      small: { width: 24, height: 24 },
    },
    {
      name: "hugging",
      large: { width: 64, height: 64 },
      small: { width: 24, height: 24 },
    },
    {
      name: "numpy",
      large: { width: 64, height: 64 },
      small: { width: 24, height: 24 },
    },
    {
      name: "redis",
      large: { width: 74.488, height: 64 },
      small: { width: 27.93, height: 24 },
    },
    {
      name: "postgreSQL",
      large: { width: 64, height: 64 },
      small: { width: 24, height: 24 },
    },
    {
      name: "AWS",
      large: { width: 109.215, height: 64 },
      small: { width: 40.96, height: 24 },
    },
    {
      name: "docker",
      large: { width: 89.2, height: 64 },
      small: { width: 33.45, height: 24 },
    },
    {
      name: "pyTorch",
      large: { width: 64, height: 64 },
      small: { width: 24, height: 24 },
    },
    {
      name: "streamlit",
      large: { width: 117.029, height: 64 },
      small: { width: 43.83, height: 24 },
    },
  ];
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
