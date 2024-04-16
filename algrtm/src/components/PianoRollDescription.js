import Image from "next/image";
import React from "react";

const PianoRollDescription = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full xl:px-[12.625rem] mt-[4rem] md:mt-[3.94rem]">
      <div className="lg:flex-row flex flex-col gap-[4.5rem] items-center justify-center w-full">
        <div className="flex flex-col gap-4 max-w-[24.03rem] w-full">
          <h1 className="h2 leading-[4.48rem] xl:h1 text-neutralLight-neutral10 dark:text-neutralDark-neutral10 ">
            PianoRoll
          </h1>
          <div>
            <p className="h6 text-neutralLight-neutral20 dark:text-neutralDark-neutral20">
              At its surface, PianoRoll serves as a{" "}
              <strong>
                platform for pianists to track and share their progress
              </strong>{" "}
              with friends and the broader community. Yet, it’s so much more
              than that.
            </p>
          </div>
        </div>
        <div className="bg-neutralLight-neutral90 dark:bg-neutralDark-neutral90 rounded-[2rem] md:min-w-[36.225rem] overflow-hidden">
          <Image
            height={283}
            width={343}
            sizes="100vw"
            src="/PianoRollScreen.png"
            alt="Piano Roll App Screen"
            className="w-auto h-[17.678rem] md:h-[29.875rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default PianoRollDescription;
