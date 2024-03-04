import React from "react";
import Icon from "./shared/Icon";

const OfferSection = () => {
  return (
    <section className="flex flex-col max-w-[78.35rem] mt-[8.5rem] gap-[2.75rem] justify-center items-center">
      <h2 className="flex text-center h2 text-neutralLight-neutral10 leading-[4rem]">
        What we offer?
      </h2>
      <div className="flex flex-col gap-4 max-w-[78.25rem]">
        <div className="flex gap-[1.5rem] bg-neutralLight-neutral90 py-[5.85rem] px-[6.75rem] rounded-[2rem]">
          <div className="h4 text-neutralLight-neutral10 max-w-[25.1875rem] leading-[2.75rem]">
            <p>Research & Discovery</p>
          </div>
          <div className="flex flex-col h6_600 text-neutralLight-neutral20">
            <div className="flex gap-4 items-center justify-between self-stretch pb-4">
              <div>Exploratory Data Analysis</div>
              <div>
                <Icon src="/arrow-down-icon.svg" alt="Arrow up icon" />
              </div>
            </div>

            <div className="flex gap-4 items-center justify-between self-stretch pb-4">
              <div>Machine Learning Feasibility Study</div>
              <div>
                <Icon src="/arrow-down-icon.svg" alt="Arrow up icon" />
              </div>
            </div>

            <div className="flex gap-4 items-center justify-between self-stretch pb-4">
              <div>Data Strategy and Architecture Planning</div>
              <div>
                <Icon src="/arrow-down-icon.svg" alt="Arrow up icon" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-[1.5rem] py-[5.85rem] px-[6.75rem]">
          <div className="h4 text-neutralLight-neutral10 max-w-[25.1875rem] leading-[2.75rem]">
            <p>Prototyping & Development</p>
          </div>
          <div className="flex flex-col h6_600 text-neutralLight-neutral20">
            <div className="flex gap-4 items-center justify-between self-stretch pb-4">
              <div>Tailored Data Quality & Model Training Pipelines</div>
              <div>
                <Icon src="/arrow-down-icon.svg" alt="Arrow up icon" />
              </div>
            </div>

            <div className="flex gap-4 items-center justify-between self-stretch pb-4">
              <div>End-To-End Machine Learning Development</div>
              <div>
                <Icon src="/arrow-down-icon.svg" alt="Arrow up icon" />
              </div>
            </div>

            <div className="flex gap-4 items-center justify-between self-stretch pb-4">
              <div>Performance Enhancement and Scaling</div>
              <div>
                <Icon src="/arrow-down-icon.svg" alt="Arrow up icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
