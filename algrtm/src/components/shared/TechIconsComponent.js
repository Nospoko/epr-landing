import imagesArray from "@/data/imagesArray";
import CustomIcon from "./CustomIcon";

const TechIconsComponent = ({
  size = "large",
  color = true,
  classNames = "justify-between gap-auto",
}) => {
  return (
    <div
      className={`flex flex-wrap items-stretch w-full gap-x-[1.88rem] gap-y-[1.25rem] md:gap-[0] ${classNames} ${
        size === "small" ? "homepage" : ""
      }`}
    >
      {imagesArray.map((image, index) => {
        return (
          <CustomIcon
            key={index}
            name={image.name}
            width={image[size].width}
            height={image[size].height}
            className={`transition-transform duration-300 transform hover:scale-125 ${
              size === "large" ? image.name.toLowerCase() : ""
            } ${!color && "grayscale"} 
           `}
          />
        );
      })}
    </div>
  );
};

export default TechIconsComponent;
