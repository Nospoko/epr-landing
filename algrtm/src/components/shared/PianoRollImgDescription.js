import Image from "next/image";
import React from "react";

const PianoRollImgDescription = () => {
  return (
    <div className="mt-[3.94rem]">
      <Image
        width={1252}
        height={420}
        sizes="100vw"
        src="/PianoRollDescriptionImage.png"
        alt="Woman playing digital piano"
        className=""
      />
    </div>
  );
};

export default PianoRollImgDescription;
