import React from "react";
// import IconsComponent from "./IconsComponent";
// import IconsColoredComponent from "./IconsColoredComponent";
import TechIconsComponent from "./shared/TechIconsComponent";

const TechnologiesSection = () => {
  return (
    <section className="flex flex-col justify-center max-w-[78.25rem] mt-[2.38rem] mb-[5.88rem] mx-[5.88rem] gap-6 items-start w-full">
      <h2 className="h2 text-neutralLight-neutral10 leading-[5.375rem]">
        Our technologies
      </h2>
      <div className="flex flex-col gap-[4.5rem] w-full">
        <div className="leading-[1.98rem] text-neutralLight-neutral20 h6 max-w-[51.75rem]">
          <p>
            By harnessing MIDI data from our users, combined with intricate
            algorithms, we're on a journey to find the optimal approach.
          </p>
        </div>
        {/* TODO refactor Icons Component */}
        <div className="w-full">
          {/* <IconsColoredComponent /> */}
          <TechIconsComponent size="large" />
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
