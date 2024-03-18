import socialIconsArray from "@/data/socialIconsArray";
import stepsData from "@/data/stepsData";
import Image from "next/image";
import React from "react";

const StoryComponent = () => {
  return (
    <section className="mt-[7.19rem]">
      <div className="flex flex-col items-center justify-center mb-[7.75rem] gap-[1.5rem]">
        <h2 className="h2 leading-[4rem] text-neutralLight-neutral10">
          What’s the story?
        </h2>
        <div className="mx-[22.5rem]">
          <h6 className="h6 text-neutralLight-neutral20 text-center">
            Once, a passion for algorithms, AI, ML, and music birthed an idea:
            to teach AI to play the piano. But not just any piano with a flat
            sound. A piano filled with emotion, and the nuance of pressure on
            each key—just like a real person.
          </h6>
        </div>
      </div>

      <div className="flex flex-col gap-8 mx-[12.62rem]">
        {stepsData.map((step, index) => (
          <div key={index} className="flex relative pb-12">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="5" r="3"></circle>
                <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
              </svg>
            </div>
            <div className="flex-grow pl-4">
              <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                {step.title}
              </h2>
              <p className="leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-[1.5rem] px-[12.62rem] pt-[5.88rem] justify-center items-center">
        <div className="rounded-md bg-neutralLight-neutral90 py-[4rem] px-[1.5rem] flex flex-col items-center gap-[2.75rem]">
          <div className="text-[3.25rem] font-semibold text-center">
            <p className="text-neutralLight-neutral10">
              Stay up to date <br />
              with <span className="text-blueLight-blue50">PianoRoll</span>
            </p>
          </div>
          <div className="flex items-center justify-center gap-[1.5rem]">
            {socialIconsArray.slice(0, 3).map((image) => {
              return (
                <Image
                  key={image.name}
                  src={`/assets/social/${image.name
                    .toLowerCase()
                    .split(" ")
                    .join("-")}-logo.svg`}
                  width={image.size.width}
                  height={image.size.height}
                  alt={`${
                    image.name.charAt(0).toUpperCase() + image.name.slice(1)
                  } logo`}
                  className="transition-transform duration-300 transform hover:scale-125"
                />
              );
            })}
          </div>
        </div>
        <div className="rounded-md bg-neutralLight-neutral100 py-[4rem] px-[1.5rem] flex flex-col items-center gap-[2.75rem] border-1 border-neutralLight-neutral90">
          <div className="text-[3.25rem] font-semibold text-center">
            <p className="text-neutralLight-neutral10">
              Stay up to date <br />
              with Piano for AI
            </p>
          </div>
          <div className="flex items-center justify-center gap-[1.5rem]">
            {socialIconsArray.slice(3, 6).map((image) => (
              <Image
                key={image.name}
                src={`assets/social/${image.name
                  .toLowerCase()
                  .split(" ")
                  .join("-")}-logo.svg`}
                width={image.size.width}
                height={image.size.height}
                alt={`${
                  image.name.charAt(0).toUpperCase() + image.name.slice(1)
                } logo`}
                className="transition-transform duration-300 transform hover:scale-125"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  // to remove:
  // return (
  //   <section className="mt-[7.19rem]">
  //     <div className="flex flex-col items-center justify-center mb-[7.75rem] gap-[1.5rem]">
  //       <h2 className="h2 leading-[4rem] text-neutralLight-neutral10">
  //         What’s the story?
  //       </h2>
  //       <div className="mx-[22.5rem]">
  //         <h6 className="h6 text-neutralLight-neutral20 text-center">
  //           Once, a passion for algorithms, AI, ML, and music birthed an idea:
  //           to teach AI to play the piano. But not just any piano with a flat
  //           sound. A piano filled with emotion, and the nuance of pressure on
  //           each key—just like a real person.
  //         </h6>
  //       </div>
  //     </div>

  //     {/* <div className="flex flex-col gap-8 mx-[12.62rem] relative">
  //       <div className="absolute top-[10rem] left-[30rem]">
  //         <Image
  //           src="/verticalLine.svg"
  //           width={2}
  //           height={900}
  //           alt="vertical line"
  //         />
  //       </div>
  //       {/* 1 */}
  //     {/* <div className="flex flex-col items-start gap-[1rem] pr-[37.25rem]">
  //         <p className="p1SB text-blueLight-blue50">Step 01</p>
  //         <h4 className="h4 text-neutralLight-neutral10">Research</h4>
  //         <h6 className="h6 text-neutralLight-neutral20">
  //           We delved into research, determining our initial needs and the best
  //           approach. We meticulously analyzed the AI music learning process.
  //         </h6>
  //       </div> */}
  //     {/* 2 */}
  //     {/* <div className="flex flex-col items-start gap-[1rem] pl-[37.35rem]">
  //         <p className="p1SB text-blueLight-blue50">Step 02</p>
  //         <h4 className="h4 text-neutralLight-neutral10">Brainstorming</h4>
  //         <h6 className="h6 text-neutralLight-neutral20">
  //           After some brainstorming, we collaborated with several piano
  //           artists. We organized recording sessions set against stunning
  //           backdrops, featuring talented musicians, and supported by a
  //           top-notch video and sound team. We recorded thousands of songs, all
  //           for the sake of our MIDI files.
  //         </h6>
  //       </div> */}
  //     {/* 3 */}
  //     {/* <div className="flex flex-col items-start gap-[1rem] pr-[37.25rem]">
  //         <p className="p1SB text-blueLight-blue50">Step 03</p>
  //         <h4 className="h4 text-neutralLight-neutral10">Idea was born</h4>
  //         <h6 className="h6 text-neutralLight-neutral20">
  //           And thus, PianoRoll was born—a platform delivering MIDI files from
  //           pianists worldwide. It's a win-win: we obtain the MIDI files, and
  //           the pianists get a space to track their progress and compare with
  //           peers in the community.
  //         </h6>
  //       </div> */}
  //     {/* </div> */}

  //     <div className="flex gap-[1.5rem] px-[12.62rem] pt-[5.88rem] justify-center items-center">
  //       <div className="rounded-md bg-neutralLight-neutral90 py-[4rem] px-[1.5rem] flex flex-col items-center gap-[2.75rem]">
  //         <div className="text-[3.25rem] font-semibold text-center">
  //           <p className="text-neutralLight-neutral10">
  //             Stay up to date <br />
  //             with <span className="text-blueLight-blue50">PianoRoll</span>
  //           </p>
  //         </div>
  //         <div className="flex items-center justify-center gap-[1.5rem]">
  //           {socialIconsArray.slice(0, 3).map((image) => {
  //             return (
  //               <Image
  //                 key={image.name}
  //                 src={`/assets/social/${image.name
  //                   .toLowerCase()
  //                   .split(" ")
  //                   .join("-")}-logo.svg`}
  //                 width={image.size.width}
  //                 height={image.size.height}
  //                 alt={`${
  //                   image.name.charAt(0).toUpperCase() + image.name.slice(1)
  //                 } logo`}
  //                 className="transition-transform duration-300 transform hover:scale-125"
  //               />
  //             );
  //           })}
  //         </div>
  //       </div>
  //       <div className="rounded-md bg-neutralLight-neutral100 py-[4rem] px-[1.5rem] flex flex-col items-center gap-[2.75rem] border-1 border-neutralLight-neutral90">
  //         <div className="text-[3.25rem] font-semibold text-center">
  //           <p className="text-neutralLight-neutral10">
  //             Stay up to date <br />
  //             with Piano for AI
  //           </p>
  //         </div>
  //         <div className="flex items-center justify-center gap-[1.5rem]">
  //           {socialIconsArray.slice(3, 6).map((image) => (
  //             <Image
  //               key={image.name}
  //               src={`assets/social/${image.name
  //                 .toLowerCase()
  //                 .split(" ")
  //                 .join("-")}-logo.svg`}
  //               width={image.size.width}
  //               height={image.size.height}
  //               alt={`${
  //                 image.name.charAt(0).toUpperCase() + image.name.slice(1)
  //               } logo`}
  //               className="transition-transform duration-300 transform hover:scale-125"
  //             />
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );
};

export default StoryComponent;
