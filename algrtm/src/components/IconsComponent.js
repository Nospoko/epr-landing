import Image from "next/image";
import React from "react";

const IconsComponent = () => {
  return (
    <div className=" flex justify-center items-stretch gap-4 mt-[2.75rem]">
      <Image
        src="/assets/logos/python-logo.svg"
        width={24.1}
        height={24}
        alt="Python logo"
      ></Image>
      <Image
        src="/assets/logos/pandas-logo.svg"
        width={24}
        height={24}
        alt="Pandas logo"
      ></Image>

      <Image
        src="/assets/logos/numpy-logo.svg"
        width={24}
        height={24}
        alt="Numpy logo"
      ></Image>
      <Image
        src="/assets/logos/redis-logo.svg"
        width={27.93}
        height={24}
        alt="Redis logo"
      ></Image>
      <Image
        src="/assets/logos/postgreSQL-logo.svg"
        width={24}
        height={24}
        alt="PostgreSQL logo"
      ></Image>
      <Image
        src="/assets/logos/AWS-logo.svg"
        width={40.96}
        height={24}
        alt="AWS logo"
      ></Image>
      <Image
        src="/assets/logos/docker-logo.svg"
        width={33.45}
        height={24}
        alt="Docker logo"
      ></Image>
      <Image
        src="/assets/logos/pyTorch-logo.svg"
        width={24}
        height={24}
        alt="PyTorch logo"
      ></Image>
      <Image
        src="/assets/logos/streamlit-logo.svg"
        width={43.83}
        height={24}
        alt="Streamlit logo"
      ></Image>
    </div>
  );
};

export default IconsComponent;
