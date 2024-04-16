// TODO add proper links

import Image from "next/image";
import Link from "next/link";
import React from "react";
import externalLinks from "@/data/externalLinks";

const LinksSection = () => {
  return (
    <section className=" bg-neutralLight-neutral10 dark:bg-neutralDark-neutral90 w-full border-t-1 border-neutralLight-neutral20 dark:border-neutralDark-neutral100 flex flex-col md:flex-row justify-center items-center ">
      <div className=" w-full flex flex-col justify-between bg-neutralLight-neutral10 dark:bg-neutralDark-neutral90 px-[1rem] py-[4rem] md:mx-[2.75rem] md:mt-[4rem] md:mb-[7.75rem] xl:mx-[12.5rem] xl:mt-16 xl:mb-[7.75rem] gap-[3rem] md:gap-16">
        <div className=" flex flex-col justify-between md:gap-auto md:flex-row xl:gap-[11.125rem] bg-neutralLight-neutral10 dark:bg-neutralDark-neutral90 w-full">
          <div className=" flex flex-col gap-6 ">
            <div className=" flex w-full justify-start h5">
              <p className=" text-neutralLight-neutral100 h5">EPR</p>
            </div>
            <div className=" p2 text-neutralLight-neutral60 dark:text-neutralDark-neutral60 max-w-[25.375rem]">
              We develop algorithmic solutions with Machine Learning, Research
              and Prototyping, Data Quality Engineering, Analytics Automation,
              Creative Coding, Dataset Management.
            </div>
          </div>

          <div className=" flex gap-x-[0.5rem] xl:px-4 items-end max-w-[28.93rem] text-nowrap flex-wrap xl:flex-nowrap mt-[2rem] md:mt-[0] content-end">
            <Link href="/pianoRoll">
              <p className=" p3SB md:p3 text-neutralLight-neutral90 p-[0.625rem] pl-[0]animation">
                PianoRoll
              </p>
            </Link>
            <Link href="/customSolutions">
              <p className="p3SB md:p3  text-neutralLight-neutral90 p-[0.625rem] animation">
                Custom Solutions
              </p>
            </Link>
            <Link
              href="#"
              className="p3SB md:p3  text-neutralLight-neutral90 p-[0.625rem] animation"
            >
              Blog & News
            </Link>
            <Link href="/contactUs">
              <p className="p3SB md:p3  text-neutralLight-neutral90 p-[0.625rem] pl-[0]animation">
                Contact us
              </p>
            </Link>
          </div>
        </div>

        <div>
          <hr className="w-full border-t border-neutralLight-neutral20"></hr>
        </div>

        <div className="flex gap-[2.75rem] flex-center justify-center text-neutralLight-neutral90 p3SB w-full">
          <Link
            href={externalLinks.linkedin}
            className="text-neutralLight-neutral90 p3 animation"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </Link>
          <Link
            href={externalLinks.github}
            className="text-neutralLight-neutral90 p3 animation"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </Link>
          <div className="flex">
            {/* TODO- add link when we create account */}
            <Link
              href={externalLinks.clutch}
              className="text-neutralLight-neutral90 p3 mr-2 animation"
              target="_blank"
              rel="noopener noreferrer"
            >
              Clutch{" "}
            </Link>
            {/* right now stars are static, don't come from Clutch ;) */}
            <Image
              width={14}
              height={15}
              src="/assets/icons/star.svg"
              alt="starIcon"
            />
            <Image
              width={14}
              height={15}
              src="/assets/icons/star.svg"
              alt="starIcon"
            />
            <Image
              width={14}
              height={15}
              src="/assets/icons/star.svg"
              alt="starIcon"
            />
            <Image
              width={14}
              height={15}
              src="/assets/icons/star.svg"
              alt="starIcon"
            />
            <Image
              width={14}
              height={15}
              src="/assets/icons/starEmpty.svg"
              alt="Empty starIcon"
            />
            4.9
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinksSection;
