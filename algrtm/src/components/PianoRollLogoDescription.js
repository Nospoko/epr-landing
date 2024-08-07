import Image from "next/image";
import React from "react";

const PianoRollLogoDescription = () => {
  return (
    <div className="lg:flex-row flex flex-col max-w-[64.75rem] items-center gap-[2rem] md:gap-[4.5rem] my-[7.19rem] px-4">
      <div className="bg-neutralLight-neutral90 rounded-[2rem] w-full md:w-[36.25rem] h-[29.875rem] flex flex-col md:flex-row justify-center items-center gap-[0.625rem]">
        <Image width={86.965} height={94} src="/pianoRollLogo.svg" />
        <Image width={218.057} height={38.198} src="/PianoRoll.svg" />
      </div>
      <div className="flex flex-col gap-[0.625rem] items-start w-full md:w-auto max-w-[24rem]">
        <p className="h5_500 text-neutralLight-neutral10">
          Audio, images and text already benefit from well-established deep
          learning architectures and processing pipelines that consistently
          yield amazing results.
        </p>
        <p className="text-neutralLight-neutral10">
          Recording piano performances in MIDI format introduces a new and
          exciting area of research, combining challenges from text, image and
          audio into a single modality. MIDI format services as a bridge,
          capturing numerous nuances of piano performances in a structured data
          format.
        </p>
      </div>
    </div>
  );
};

export default PianoRollLogoDescription;
