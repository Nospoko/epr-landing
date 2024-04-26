import Image from "next/image";
import React from "react";

const OurWork = () => {
  return (
    <section className="mt-[2.75rem] w-full self-stretch max-w-[78.25rem] flex flex-col gap-6 items-start mx-[1rem] md:max-w-[54.875rem] md:mt-[7.75rem md:mx-[4.56rem] xl:m-[5.88rem] bg-neutralLight-neutral100 dark:bg-neutralDark-neutral100">
      <h4 className="h4 lg:h2">Our work</h4>
      <div className="flex flex-col lg:flex-row w-full self-stretch gap-[1.5rem] md:flex-row xl:gap-[2rem] mt-[2rem]">
        <div className="rounded-[2rem] bg-neutralLight-neutral10 w-[21.44rem] h-[24.98rem]"></div>
        <div className="rounded-[2rem] bg-neutralLight-neutral10 w-[21.44rem] h-[24.98rem]"></div>
        <div className="rounded-[2rem] bg-neutralLight-neutral10 w-[21.44rem] h-[24.98rem]"></div>
      </div>
      <div className="mt-[1.5rem] flex flex-col gap-[1rem] items-center px-[1.5rem] md:px-[3.38rem] xl:mx-[6.75rem] py-[5.88rem]  text-neutralLight-neutral10 dark:text-neutralDark-neutral10 bg-neutralLight-neutral90 dark:bg-neutralDark-neutral90 rounded-[2rem]">
        <h5 className="h5_500">No chatbots</h5>
        <h6 className="h6_600">
          We love and appreciate all of our AI chatting friends, but if you’re
          looking to build one for yourself, go somewhere else
        </h6>
      </div>
    </section>
  );
};

export default OurWork;
