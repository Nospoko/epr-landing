import React from "react";
import Button from "./shared/Button";
// import Image from "next/image";

const AlgorithmicMusicSection = () => {
  return (
    <div className="flex items-center gap-16 px-[6.75rem] py-[5.88rem] text-neutralLight-neutral10">
      <div className="flex flex-col">
        <div className="h2  leading-[4rem]">Algorithmic Music</div>
        <div className="mt-6 h6_500 leading-[1.98rem]">
          Music is at the core of our machine intelligence and creativity
          research. We pay special attention to piano music because of its
          richness of emotional expression, and relative simplicity of data
          structures.
        </div>
        <div className="mt-4 p2 leading-[1.64rem]">
          We developed <strong>PianoRoll</strong> - a social platform for Human
          and AI Pianists alike. We curated the largest database with expressive
          piano MIDI files [link huggingface]
        </div>
        <div className="flex gap-4 justify-start mt-8">
          <Button variant="primary" text="Read more" />
          <Button variant="secondary" text="Custom solutions" />
        </div>
      </div>

      {/* to solve- images optymalization config */}
      {/* <div className="max-w-[36.22475rem ] max-h-[37.5rem]">
        <Image
          src="/assets/images/playingPerson-image.png"
          width={36.22475}
          height={37.5}
          alt="Woman playing the piano"
        ></Image>
      </div> */}
    </div>
  );
};

export default AlgorithmicMusicSection;
