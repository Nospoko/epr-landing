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
        className="rounded-[0.5rem]"
      />
    </div>
  );
};

export default VideoComponent;
