import React from "react";
import VideoComponent from "./VideoComponent";

const PianoRollPlay = () => {
  return (
    <section className="flex flex-col items-center gap-[2.75rem] md:gap-[5.88rem] my-[4rem] md:my-[7.19rem] w-full">
      <div className="text-neutralLight-neutral10 dark:text-neutralDark-neutral10 h5_small lg:h5_500 md:px-[7.75rem] xl:px-[4rem] flex items-center max-w-[51.875rem] w-full">
        <p>
          PianoRoll is a central element in 'Piano for AI,' our ambitious global
          research initiative. Through this venture, we gather data to design an
          AI tool that{" "}
          <span className="text-blueLight-blue50 h5_small lg:h5_500">
            mirrors human-like music performance{" "}
          </span>
          skills. The entirety of this groundbreaking project is spearheaded by
          the team at algrtm.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <VideoComponent />
      </div>
    </section>
  );
};

export default PianoRollPlay;
