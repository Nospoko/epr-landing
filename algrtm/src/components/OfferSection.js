"use client";

import React, { useState } from "react";
import Icon from "./shared/Icon";

const OfferSection = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [iconSrc, setIconSrc] = useState("/arrow-down-icon.svg");

  const handleOffer = () => {
    setIsTextVisible(!isTextVisible);
    setIconSrc(isTextVisible ? "/arrow-down-icon.svg" : "/arrow-up-icon.svg");
  };

  return (
    <section className="flex flex-col w-full mt-[8.5rem] gap-[2.75rem] justify-center items-center">
      <h2 className="flex h2 text-neutralLight-neutral10 leading-[4rem]">
        What we offer?
      </h2>
      <div className="flex flex-col gap-4 max-w-[78.25rem]">
        <div className="flex gap-[1.5rem]  bg-neutralLight-neutral90 py-[5.85rem] px-[6.75rem] rounded-[2rem]">
          <div className="h4 text-neutralLight-neutral10 max-w-[25.75rem] leading-[2.75rem] flex justify-start ">
            <p>Research & Discovery</p>
          </div>
          <div className="flex flex-col h6_600 text-neutralLight-neutral20 gap-[0.75rem]">
            <div className="flex flex-col border-b-[1px] border-neutralLight-neutral100">
              <div className="flex items-center gap-4 self-stretch w-full pb-4 justify-between max-w-[25.75rem]">
                <div>Exploratory Data Analysis</div>

                <div>
                  <Icon
                    src={iconSrc}
                    alt="Arrow up icon"
                    onClick={handleOffer}
                  />
                </div>
              </div>

              {isTextVisible && (
                <div className="max-w-[25.75rem]">
                  <p className="text-neutralLight-neutral20 p2 leading-[1.64rem] pb-4">
                    Our goal has always been to drive{" "}
                    <strong>positive change</strong> and make a meaningful
                    impact. We thrive on seeking out challenging endeavors. For
                    us, it's about believing in the power of algorithms, not
                    just AI. We focus on areas of machine learning from the
                    point of view of extending intelligence, rather than
                    replacing it.
                  </p>
                </div>
              )}
            </div>

            <div className="flex flex-col border-b-[1px] border-neutralLight-neutral100">
              <div className="flex items-center gap-4 self-stretch w-full pb-4 justify-between max-w-[25.75rem]">
                <div>Machine Learning Feasibility Study</div>

                <div>
                  <Icon
                    src={iconSrc}
                    alt="Arrow up icon"
                    // onClick={handleOffer}
                  />
                </div>
              </div>

              {isTextVisible && (
                <div className="max-w-[25.75rem]">
                  <p className="text-neutralLight-neutral20 p2 leading-[1.64rem] pb-4">
                    Our goal has always been to drive{" "}
                    <strong>positive change</strong> and make a meaningful
                    impact. We thrive on seeking out challenging endeavors. For
                    us, it's about believing in the power of algorithms, not
                    just AI. We focus on areas of machine learning from the
                    point of view of extending intelligence, rather than
                    replacing it.
                  </p>
                </div>
              )}
            </div>

            <div className="flex flex-col border-b-[1px] border-neutralLight-neutral100">
              <div className="flex items-center gap-4 self-stretch w-full pb-4 justify-between max-w-[25.75rem]">
                <div>Data Strategy and Architecture Planning</div>

                <div>
                  <Icon
                    src={iconSrc}
                    alt="Arrow up icon"
                    // onClick={handleOffer}
                  />
                </div>
              </div>

              {isTextVisible && (
                <div className="max-w-[25.75rem]">
                  <p className="text-neutralLight-neutral20 p2 leading-[1.64rem] pb-4">
                    Our goal has always been to drive{" "}
                    <strong>positive change</strong> and make a meaningful
                    impact. We thrive on seeking out challenging endeavors. For
                    us, it's about believing in the power of algorithms, not
                    just AI. We focus on areas of machine learning from the
                    point of view of extending intelligence, rather than
                    replacing it.
                  </p>
                </div>
              )}
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
