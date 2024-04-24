"use client";
import React, { useContext } from "react";
import Image from "next/image";
import externalLinks from "@/data/externalLinks";
import Link from "next/link";
import CustomLink from "./shared/CustomLink";
import "../styles/globals.css";
import CustomIcon from "./shared/CustomIcon";

const AlgorithmicMusicSection = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-[1.5rem] xl:gap-16 py-[2.75rem] xl:px-[2.75rem] xl:py-[5.88rem] text-neutralLight-neutral10 dark:text-neutralDark-neutral10 items-center">
      <div className="flex flex-col items-stretch max-w-[24.53rem]">
        <h2 className="h2SB xl:h2 leading-[4rem]">Algorithmic Music</h2>
        <div className="mt-6 h6_400 xl:h6 leading-[1.98rem]">
          Music is at the core of our{" "}
          <strong>machine intelligence and creativity research</strong>. We pay
          special attention to piano music because of its richness of emotional
          expression, and relative simplicity of data structures.
        </div>
        <div className="mt-4 p2 leading-[1.64rem]">
          We developed <strong>PianoRoll</strong> - a social platform for Human
          and AI Pianists alike. We curated the largest database with expressive
          piano{" "}
          <Link
            href={externalLinks.Hugglingface}
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>MIDI files.</strong>
          </Link>
        </div>
        <div className="flex gap-4 justify-start mt-8">
          <CustomLink variant="primary" text="Read more" href="/pianoRoll" />

          <CustomLink
            variant="secondary"
            href="/customSolutions"
            text="Custom solutions"
            customIcon={<CustomIcon name="ArrowUpRight" color="black" />}
            alt="arrow up icon"
          />
        </div>
      </div>

      <div className="flex shrink-0">
        <Image
          src="/womanPlaying-image.png"
          alt="Woman playing the piano"
          width={343}
          height={355}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        ></Image>
      </div>
    </section>
  );
};

export default AlgorithmicMusicSection;
