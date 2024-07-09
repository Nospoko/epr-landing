import React from "react";
import TechIconsComponent from "./shared/TechIconsComponent";

const TechnologiesSection = () => {
  return (
    <section className="flex flex-col justify-center xl:px-[5.875rem] my-[4rem] md:my-[7.19rem] xl:mt-[2.38rem] mb-[5.88rem] gap-6 items-start w-full">
      <h2 className="h4 md:h2SB xl:h2 text-neutralLight-neutral10 dark:text-neutralDark-neutral10 ">
        Our technologies
      </h2>
      <div className="flex flex-col gap-[2.75rem] md:gap-[4.5rem] w-full">
        <div className=" text-neutralLight-neutral20 dark:text-neutralDark-neutral20 h6_400 xl:h6 max-w-[51.75rem]">
          <p>
            We use industry-leading software tools to build robust and scalable
            data pipelines. Our solutions integrate seamlessly with both
            cloud-based and <br />
            on-premises infrastructures, ensuring flexibility and reliability.
          </p>
        </div>
        <div className="w-full">
          <TechIconsComponent size="large" classNames="justify-between" />
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
