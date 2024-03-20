import Image from "next/image";
import React from "react";

const PianoRollDescription = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full px-[12.625rem] mt-[3.94rem]">
      <div className="flex gap-[4.5rem] items-center justify-center">
        <div className="flex flex-col gap-4 max-w-[24.03rem] w-full">
          <h1 className="h1 text-neutralLight-neutral10 leading-[6.02rem]">
            PianoRoll
          </h1>
          <div>
            <p className="h6 text-neutralLight-neutral20 leading-[1.98rem]">
              At its surface, PianoRoll serves as a{" "}
              <strong>
                platform for pianists to track and share their progress
              </strong>{" "}
              with friends and the broader community. Yet, it’s so much more
              than that.
            </p>
          </div>
        </div>
        <div className="bg-neutralLight-neutral90 rounded-[2rem] w-[36.56rem] h-[29.875rem] overflow-hidden">
          <Image
            height={478}
            width={585}
            src="/PianoRollScreen.png"
            alt="Piano Roll App Screen"
          />
        </div>
      </div>
    </section>
  );
};

export default PianoRollDescription;
