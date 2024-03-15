"use client";
import { useRef } from "react";

const VideoComponent = () => {
  const iframeRef = useRef();
  const videoUrl = "https://www.youtube.com/embed/o5BR_GvKwDg";

  return (
    <div>
      <iframe
        ref={iframeRef}
        width="560"
        height="315"
        src={videoUrl}
        frameborder="0"
        allowfullscreen
        title="Embedded Video"
      />
    </div>
  );
};

export default VideoComponent;
