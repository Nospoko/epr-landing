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
        src="/assets/logos/pandas-logo.svg"
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
        src="/assets/logos/numpy-logo.svg"
        width={64}
        height={64}
        alt="Numpy logo"
        className="transition-transform duration-300 transform hover:scale-125"
      ></Image>
      <Image
        src="/assets/logos/redis-logo.svg"
        width={74.488}
        height={64}
        alt="Redis logo"
        className="transition-transform duration-300 transform hover:scale-125"
      ></Image>
      <Image
        src="/assets/logos/postgreSQL-logo.svg"
        width={64}
        height={64}
        alt="PostgreSQL logo"
        className="transition-transform duration-300 transform hover:scale-125"
      ></Image>
      <Image
        src="/assets/logos/AWS-logo.svg"
        width={109.215}
        height={64}
        alt="AWS logo"
        className="transition-transform duration-300 transform hover:scale-125"
      ></Image>
      <Image
        src="/assets/logos/docker-logo.svg"
        width={89.2}
        height={64}
        alt="Docker logo"
        className="transition-transform duration-300 transform hover:scale-125"
      ></Image>
      <Image
        src="/assets/logos/pyTorch-logo.svg"
        width={64}
        height={64}
        alt="PyTorch logo"
        className="transition-transform duration-300 transform hover:scale-125"
      ></Image>
      <Image
        src="/assets/logos/streamlit-logo.svg"
        width={117.029}
        height={64}
        alt="Streamlit logo"
        className="transition-transform duration-300 transform hover:scale-125"
      ></Image>
    </div>
  );
};

export default IconsColoredComponent;
