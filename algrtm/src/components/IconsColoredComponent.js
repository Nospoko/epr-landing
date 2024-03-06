import Image from "next/image";
import React from "react";

const IconsColoredComponent = () => {
  return (
    <div className=" flex justify-between items-stretch mt-[2.75rem] w-full">
      <Image
        src="/assets/logos/coloredLogos/python-c-logo.svg"
        width={64}
        height={64}
        alt="Python logo"
        className="transition-transform duration-300 transform hover:scale-125"
      ></Image>
      <Image
        src="/assets/logos/coloredLogos/pandas-c-logo.svg"
        width={64}
        height={64}
        alt="Pandas logo"
        className="transition-transform duration-300 transform hover:scale-125"
      ></Image>
      <Image
        src="/assets/logos/hugging-logo.svg"
        width={64}
        height={64}
        alt="Huggling face logo"
        className="transition-transform duration-300 transform hover:scale-125"
      ></Image>

      <Image
        src="/assets/logos/coloredLogos/numpy-c-logo.svg"
        width={64}
        height={64}
        alt="Numpy logo"
        className="transition-transform duration-300 transform hover:scale-125"
      ></Image>
      <Image
        src="/assets/logos/coloredLogos/redis-c-logo.svg"
        width={74.488}
        height={64}
        alt="Redis logo"
        className="transition-transform duration-300 transform hover:scale-125"
      ></Image>
      <Image
        src="/assets/logos/coloredLogos/postgreSQL-c-logo.svg"
        width={64}
        height={64}
        alt="PostgreSQL logo"
        className="transition-transform duration-300 transform hover:scale-125"
      ></Image>
      <Image
        src="/assets/logos/coloredLogos/AWS-c-logo.svg"
        width={109.215}
        height={64}
        alt="AWS logo"
        className="transition-transform duration-300 transform hover:scale-125"
      ></Image>
      <Image
        src="/assets/logos/coloredLogos/docker-c-logo.svg"
        width={89.2}
        height={64}
        alt="Docker logo"
        className="transition-transform duration-300 transform hover:scale-125"
      ></Image>
      <Image
        src="/assets/logos/coloredLogos/pyTorch-c-logo.svg"
        width={64}
        height={64}
        alt="PyTorch logo"
        className="transition-transform duration-300 transform hover:scale-125"
      ></Image>
      <Image
        src="/assets/logos/coloredLogos/streamlit-c-logo.svg"
        width={117.029}
        height={64}
        alt="Streamlit logo"
        className="transition-transform duration-300 transform hover:scale-125"
      ></Image>
    </div>
  );
};

export default IconsColoredComponent;
