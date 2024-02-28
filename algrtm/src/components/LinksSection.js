import Image from "next/image";
import Link from "next/link";
import React from "react";
import externalLinks from "@/data/externalLinks";

const LinksSection = () => {
  return (
    <div className=" bg-neutralLight-neutral10 w-full border-t-2 border-neutralLight-neutral20">
      <div className="flex flex-col bg-neutralLight-neutral10 mx-[12.5rem] mt-16 mb-[7.75rem] gap-16">
        <div className="flex gap-[11.125rem]   bg-neutralLight-neutral10 ">
          <div className=" flex flex-col gap-6 ">
            <div className="flex w-full justify-start h5">
              <p className="text-blueLight-blue50 h5">A</p>
              <p className="text-neutralLight-neutral100 h5">lgrtm</p>
            </div>
            <div className="p2 text-neutralLight-neutral60 max-w-[25.375rem]">
              We develop algorithmic solutions with Machine
              <br /> Learning, Research and Prototyping, Data Quality
              Engineering, Analytics Automation, Creative Coding, Dataset
              Management.
            </div>
          </div>

          <div className="flex gap-[0.625rem] px-4 items-end">
            {/* <Link
              href="/pianoRoll"
              className="p3 text-neutralLight-neutral90 p-[0.625rem]"
            >
              PianoRoll
            </Link> */}
            <Link href="/pianoRoll">
              <p className="p3 text-neutralLight-neutral90 p-[0.625rem]">
                PianoRoll
              </p>
            </Link>
            <Link href="/customProjects">
              <p className="p3 text-neutralLight-neutral90 p-[0.625rem]">
                Custom Projects
              </p>
            </Link>
            <Link
              href="#"
              className="p3 text-neutralLight-neutral90 p-[0.625rem]"
            >
              Blog & News
            </Link>
            <Link href="/contactUs">
              <p className="p3 text-neutralLight-neutral90 p-[0.625rem]">
                Contact us
              </p>
            </Link>
          </div>
        </div>

        <div>
          <hr className="w-full border-t border-gray-400"></hr>
        </div>

        <div className="flex gap-11 flex-center justify-center text-neutralLight-neutral90 p3SB">
          <Link
            href={externalLinks.linkedin}
            className="text-neutralLight-neutral90 p3"
          >
            Linkedin
          </Link>
          <Link
            href={externalLinks.github}
            className="text-neutralLight-neutral90 p3"
          >
            Github
          </Link>
          <div className="flex">
            {/* TODO- add link when we create account */}
            <Link
              href={externalLinks.clutch}
              className="text-neutralLight-neutral90 p3 mr-2"
            >
              Clutch{" "}
            </Link>
            {/* right now stars are static, don't come from Clutch ;) */}
            <Image width={14} height={14} src="/assets/icons/star.svg" />
            <Image width={14} height={14} src="/assets/icons/star.svg" />
            <Image width={14} height={14} src="/assets/icons/star.svg" />
            <Image width={14} height={14} src="/assets/icons/star.svg" />
            <Image width={14} height={14} src="/assets/icons/starEmpty.svg" />
            4.9
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinksSection;
