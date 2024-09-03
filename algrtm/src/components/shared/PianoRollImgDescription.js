import React from "react";

const PianoRollImgDescription = () => {
  return (
    <div
      className="relative mt-[3.94rem] rounded-[2rem] p-[2rem] min-h-[428px] flex flex-col justify-center w-full max-w-[78.25rem] px-[1.5rem] md:px-[6.75rem] py-[5.88rem] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(28, 28, 28, 0.32) 0%, rgba(28, 28, 28, 0.32) 100%), url('/PianoRollImage.jpeg')",
      }}
    >
      {/* Title Text */}
      <h2 className="text-neutralLight-neutral100 h4 md:h2SB xl:h2 max-w-[43.5rem]">
        Modelling MIDI data with Machine Learning
      </h2>

      {/* Description Text */}
      <p className="text-neutralLight-neutral100 h6 mt-[1rem] max-w-[42.5rem]">
        At its surface, PianoRoll serves as a{" "}
        <strong>platform for pianists to track and share their progress</strong>{" "}
        with friends and the broader community. Yet, it’s so much more than
        that.
      </p>
    </div>
  );
};

export default PianoRollImgDescription;
