"use client";

import React, { useState } from "react";
import Icon from "./shared/Icon";

const OfferSection = () => {
  const [textVisibility, setTextVisibility] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleOffer = (index) => {
    const newTextVisibility = [...textVisibility];

    for (let i = 0; i < newTextVisibility.length; i++) {
      newTextVisibility[i] = i === index ? !newTextVisibility[i] : false;
    }

    setTextVisibility(newTextVisibility);
  };

  return (
    <section className="flex flex-col w-full mt-[8.5rem] gap-[2.75rem] justify-center items-center">
      <h2 className="flex h2 text-neutralLight-neutral10 leading-[4rem]">
        What we offer?
      </h2>
      <div className="flex flex-col gap-4 max-w-[78.25rem]">
        {/* RESEARCH & DISCOVERY */}
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
                    src={
                      textVisibility[0]
                        ? "/arrow-up-icon.svg"
                        : "/arrow-down-icon.svg"
                    }
                    alt="Arrow icon"
                    onClick={() => handleOffer(0)}
                    width={20}
                    height={20}
                  />
                </div>
              </div>

              {textVisibility[0] && (
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
                    src={
                      textVisibility[1]
                        ? "/arrow-up-icon.svg"
                        : "/arrow-down-icon.svg"
                    }
                    alt="Arrow icon"
                    onClick={() => handleOffer(1)}
                    width={20}
                    height={20}
                  />
                </div>
              </div>

              {textVisibility[1] && (
                <div className="max-w-[25.75rem]">
                  <p className="text-neutralLight-neutral20 p2 leading-[1.64rem] pb-4">
                    TEXT 1
                  </p>
                </div>
              )}
            </div>

            <div className="flex flex-col border-b-[1px] border-neutralLight-neutral100">
              <div className="flex items-center gap-4 self-stretch w-full pb-4 justify-between max-w-[25.75rem]">
                <div>Data Strategy and Architecture Planning</div>

                <div className="w-5 h-5">
                  <Icon
                    src={
                      textVisibility[2]
                        ? "/arrow-up-icon.svg"
                        : "/arrow-down-icon.svg"
                    }
                    alt="Arrow icon"
                    onClick={() => handleOffer(2)}
                    width={20}
                    height={20}
                  />
                </div>
              </div>

              {textVisibility[2] && (
                <div className="max-w-[25.75rem]">
                  <p className="text-neutralLight-neutral20 p2 leading-[1.64rem] pb-4">
                    TEXT 2
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Prototyping & Development */}
        <div className="flex gap-[1.5rem] py-[5.85rem] px-[6.75rem]">
          <div className="h4 text-neutralLight-neutral10 max-w-[25.75rem] leading-[2.75rem] flex justify-start ">
            <p>Prototyping & Development</p>
          </div>

          <div className="flex flex-col h6_600 text-neutralLight-neutral20 gap-[0.75rem]">
            <div className="flex flex-col border-b-[1px] border-neutralLight-neutral90">
              <div className="flex items-center gap-4  w-full pb-4 justify-between max-w-[25.75rem]">
                <div>Tailored Data Quality & Model Training Pipelines</div>

                <div className="w-5 h-5">
                  <Icon
                    src={
                      textVisibility[3]
                        ? "/arrow-up-icon.svg"
                        : "/arrow-down-icon.svg"
                    }
                    alt="Arrow icon"
                    onClick={() => handleOffer(3)}
                    width={20}
                    height={20}
                  />
                </div>
              </div>

              {textVisibility[3] && (
                <div className="max-w-[25.75rem]">
                  <p className="text-neutralLight-neutral20 p2 leading-[1.64rem] pb-4">
                    text 3
                  </p>
                </div>
              )}
            </div>

            <div className="flex flex-col border-b-[1px] border-neutralLight-neutral90">
              <div className="flex items-center gap-4 self-stretch w-full pb-4 justify-between max-w-[25.75rem]">
                <div>End-To-End Machine Learning Development</div>

                <div>
                  <Icon
                    src={
                      textVisibility[4]
                        ? "/arrow-up-icon.svg"
                        : "/arrow-down-icon.svg"
                    }
                    alt="Arrow icon"
                    onClick={() => handleOffer(4)}
                    width={20}
                    height={20}
                  />
                </div>
              </div>

              {textVisibility[4] && (
                <div className="max-w-[25.75rem]">
                  <p className="text-neutralLight-neutral20 p2 leading-[1.64rem] pb-4">
                    TEXT 4
                  </p>
                </div>
              )}
            </div>

            <div className="flex flex-col border-b-[1px] border-neutralLight-neutral90">
              <div className="flex items-center gap-4 self-stretch w-full pb-4 justify-between max-w-[25.75rem]">
                <div>Performance Enhancement and Scaling</div>

                <div>
                  <Icon
                    src={
                      textVisibility[5]
                        ? "/arrow-up-icon.svg"
                        : "/arrow-down-icon.svg"
                    }
                    alt="Arrow icon"
                    onClick={() => handleOffer(5)}
                    width={20}
                    height={20}
                  />
                </div>
              </div>

              {textVisibility[5] && (
                <div className="max-w-[25.75rem]">
                  <p className="text-neutralLight-neutral20 p2 leading-[1.64rem] pb-4">
                    TEXT 5
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
