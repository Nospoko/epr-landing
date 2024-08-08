import React from "react";
import CustomLink from "./shared/CustomLink";
import pythonToolsData from "@/data/pythonToolsData";

const PythonToolsSection = () => {
  return (
    <section className="w-full flex flex-col gap-[4.5rem] justify-center items-center text-center mt-[2.75rem] px-[1rem] md:px-[4.56rem] xl:px-[5.88rem] bg-neutralLight-neutral100 dark:bg-neutralDark-neutral100">
      <h4 className="h4 lg:h2 text-neutralLight-neutral10 dark:text-neutralDark-neutral10 self-start md:self-center max-w-[45rem]">
        Python Tools for MIDI Processing
      </h4>
      <div className="flex flex-wrap justify-center items-center w-full gap-[1.5rem] md:gap-[2rem] mt-[2rem]">
        {Object.values(pythonToolsData).map((tool, index) => (
          <div
            key={index}
            className="flex flex-col justify-start items-center w-full sm:w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)] h-[35rem] bg-neutralLight-neutral90 dark:bg-neutralDark-neutral90 rounded-[2rem] overflow-hidden"
          >
            <img
              src={tool.image}
              alt={tool.title}
              className="rounded-t-[2rem] w-full h-[15rem] object-cover"
            />
            <div className="flex flex-col justify-start items-start text-left w-full gap-[0.5rem] md:gap-[1.5rem] px-[1.5rem] py-[2.75rem]">
              <h5 className="h5_small text-left text-neutralLight-neutral10 dark:text-neutralDark-neutral10">
                {tool.title}
              </h5>
              <ul className="list-disc list-inside text-neutralLight-neutral10 dark:text-neutralDark-neutral10">
                {tool.description.map((point, index) => (
                  <li key={index} className="p2">
                    {point}
                  </li>
                ))}
              </ul>
              <div className="flex items-start mt-auto">
                <CustomLink
                  variant="primary"
                  text="Learn more"
                  alt="arrow up icon"
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PythonToolsSection;
