import React from "react";

const OurStory = () => {
  return (
    <div className="bg-neutralLight-neutral90 text-neutralLight-neutral10 max-w-[78.25rem] flex justify-center items-center mx-[5.88rem] flex-col px-[6.75rem] py-[5.88rem] rounded-[2rem]">
      <div className="flex flex-col gap-8">
        <div className="h2 leading-[3.25rem]">Our Story</div>
        <div className="h6 leading-[1.8rem]">
          <strong>Since 2012</strong>, we've been a team of passionate
          developers dedicated to selecting
          <br /> projects that have the potential to reshape the technological
          landscape.
        </div>
      </div>
      <div className="flex flex-col mt-4"></div>
      <div className="p2 leading-[1.64rem]">
        Our goal has always been to drive <strong>positive change</strong> and
        make a meaningful impact. We thrive on seeking out
        <br /> challenging endeavors. For us, it's about believing in the power
        of algorithms, not just AI. We focus on areas
        <br /> of machine learning from the point of view of extending
        intelligence, rather than replacing it.
      </div>
    </div>
  );
};

export default OurStory;
