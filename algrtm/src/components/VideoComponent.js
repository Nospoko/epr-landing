"use client";
import { useRef } from "react";

const VideoComponent = () => {
  const iframeRef = useRef();
  const videoUrl = "https://www.youtube.com/embed/o5BR_GvKwDg";

  return (
    <div>
      <iframe
        ref={iframeRef}
        width="342"
        height="193"
        src={videoUrl}
        frameBorder="0"
        allowFullScreen
        title="Embedded Video"
        alt="Embedded Video"
        className="rounded-[0.5rem] md:w-[43.5rem] md:h-[24.563rem] lg:w-[51.8125rem] lg:h-[29.3125rem]"
      />
    </div>
  );
};

export default VideoComponent;
