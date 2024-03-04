import React from "react";

const OurStory = () => {
  return (
    <section className="bg-neutralLight-neutral90 text-neutralLight-neutral10 max-w-[78.25rem] flex flex-col items-start px-[6.75rem] py-[5.88rem] rounded-[2rem]">
      <div className="max-w-[51.75rem]">
        <div className="flex flex-col gap-8">
          <div className="h2 leading-[4rem]">Our Story</div>
          <div className="h6 leading-[1.98rem]">
            <strong>Since 2012</strong>, we've been a team of passionate
            developers dedicated to selecting
            <br /> projects that have the potential to reshape the technological
            landscape.
          </div>
        </div>

        <div className="p2 leading-[1.64rem] mt-4">
          Our goal has always been to drive <strong>positive change</strong> and
          make a meaningful impact. We thrive on seeking out
          <br /> challenging endeavors. For us, it's about believing in the
          power of algorithms, not just AI. We focus on areas
          <br /> of machine learning from the point of view of extending
          intelligence, rather than replacing it.
        </div>
      </div>
    </section>
  );
};

export default OurStory;
