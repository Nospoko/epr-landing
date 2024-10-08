// TODO add proper links
import Link from "next/link";
import React from "react";
import SocialLinksSection from "./SocialLinksSection";
import Image from "next/image";

const LinksSection = () => {
  return (
    <section className=" bg-neutralLight-neutral10 dark:bg-neutralDark-neutral90 w-full border-t-2 border-neutralLight-neutral20 dark:border-neutralDark-neutral100 flex flex-col md:flex-row justify-center items-center ">
      <div className=" w-full flex flex-col justify-between bg-neutralLight-neutral10 dark:bg-neutralDark-neutral90 px-[1rem] py-[4rem] md:mx-[2.75rem] md:mt-[4rem] md:mb-[1rem] xl:mx-[12.5rem] xl:mt-16 xl:mb-[7.75rem] gap-[3rem] md:gap-16">
        <div className=" flex flex-col justify-between md:gap-auto md:flex-row xl:gap-[11.125rem] bg-neutralLight-neutral10 dark:bg-neutralDark-neutral90 w-full">
          <div className=" flex flex-col gap-6 ">
            {/* new logo */}

            <div className=" flex w-full justify-start">
              <Image
                height={45}
                width={97.601}
                sizes="100vw"
                src="/EPR_Labs_logo_white_mono.svg"
                alt="EPR Labs logo white"
                className=""
              />
            </div>
            <div className=" p2 text-neutralLight-neutral60 dark:text-neutralDark-neutral60 max-w-[25.375rem]">
              We would love to make data science great again with machine
              learning, research and prototyping, data quality engineering,
              analytics automation, creative coding, dataset management.
            </div>
          </div>

          <div className=" flex gap-x-[0.5rem] xl:px-4 items-end max-w-[28.93rem] text-nowrap flex-wrap xl:flex-nowrap mt-[2rem] md:mt-[0] content-end">
            <Link href="https://pianoroll.io">
              <p className=" p3SB md:p3 text-neutralLight-neutral90 p-[0.625rem] pl-[0] animation">
                PianoRoll
              </p>
            </Link>
            <Link href="/custom-solutions">
              <p className="p3SB md:p3  text-neutralLight-neutral90 p-[0.625rem] animation">
                Custom Solutions
              </p>
            </Link>
            {/* TODO: add when we have blog */}
            {/* <Link
              href="#"
              className="p3SB md:p3  text-neutralLight-neutral90 p-[0.625rem] animation"
            >
              Blog & News
            </Link> */}
            <Link href="/contact-us">
              <p className="p3SB md:p3  text-neutralLight-neutral90 p-[0.625rem] pl-[0] animation">
                Contact us
              </p>
            </Link>
          </div>
        </div>

        <div>
          <hr className="w-full border-t border-neutralLight-neutral20"></hr>
        </div>

        <SocialLinksSection textColor="neutralLight-neutral90" />
      </div>
    </section>
  );
};

export default LinksSection;
