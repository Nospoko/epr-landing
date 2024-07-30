import React from "react";
import VideoComponent from "./VideoComponent";
import CustomLink from "./shared/CustomLink";

const PydataTalkComponent = () => {
  return (
    <section className="flex flex-col items-center gap-[2.75rem] md:gap-[5.88rem] my-[4rem] md:my-[7.19rem] w-full">
      <div className="flex flex-col gap-[1.5rem] text-neutralLight-neutral10 dark:text-neutralDark-neutral10 h5_small lg:h5_500 md:px-[7.75rem] xl:px-[4rem] items-center max-w-[51.875rem] w-full">
        <h2 className="h2">Pydata Talk</h2>
        <h6 className="h6_400">
          We presented at PyData London 2024. Check out our speech on modeling
          the emotional nuances of music performances.
        </h6>
        <div className="flex items-start mt-[1.25rem]">
          <CustomLink
            variant="primary"
            text="Learn more"
            alt="arrow up icon"
            href="https://www.youtube.com/watch?v=nUmLL61OYCc"
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <VideoComponent />
      </div>
    </section>
  );
};

export default PydataTalkComponent;
