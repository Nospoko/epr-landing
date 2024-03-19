import React from "react";
import VideoComponent from "./VideoComponent";

const PianoRollPlay = () => {
  return (
    <section className="flex flex-col items-center gap-[5.875rem] my-[7.19rem]">
      <div className="text-neutralLight-neutral10 h5 px-[4rem] flex items-center max-w-[43.88rem]">
        <p>
          PianoRoll is a central element in 'Piano for AI,' our ambitious global
          research initiative. Through this venture, we gather data to design an
          AI tool that{" "}
          <span className="text-blueLight-blue50 h5">
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
