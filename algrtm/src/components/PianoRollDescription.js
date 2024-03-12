import Image from "next/image";
import React from "react";

const PianoRollDescription = () => {
  return (
    <section className="flex flex-col gap-[7.19rem] items-center">
      <div className="flex gap-[4.5rem] items-center w-full px-[12.62rem] mt-[3.94rem] ">
        <div className="flex flex-col gap-4 max-w-[24.03rem] w-full">
          <h1 className="h1 text-neutralLight-neutral10 leading-[6.02rem]">
            PianoRoll
          </h1>
          <div>
            <p className="h6 text-neutralLight-neutral20 leading-[1.98rem]">
              At its surface, PianoRoll serves as a platform for pianists to
              track and share their progress with friends and the broader
              community. Yet, it’s so much more than that.
            </p>
          </div>
        </div>
        <div className="bg-neutralLight-neutral90 rounded-[2rem] max-w-[36.56rem] w-full h-[29.875rem] relative">
          <Image
            src="/PianoRollTmp.png"
            width={600}
            height={100}
            className="absolute top-[3.8rem] left-[3.8rem]"
          />
        </div>
      </div>
      {/* TODO font MULLISH! */}
      <div className="text-neutralLight-neutral10 h5 px-[4rem] flex items-center max-w-[43.88rem]">
        <p>
          PianoRoll is a central element in 'Piano for AI,' our ambitious global
          research initiative. Through this venture, we gather data to design an
          AI tool that{" "}
          <p className="text-blueLight-blue50 h5">
            mirrors human-like music performance{" "}
          </p>
          skills. The entirety of this groundbreaking project is spearheaded by
          the team at algrtm.
        </p>
      </div>
    </section>
  );
};

export default PianoRollDescription;
