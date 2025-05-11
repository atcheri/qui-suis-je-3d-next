"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import type { FC } from "react";
import { Fade } from "react-awesome-reveal";

import CodeSnippets from "./CodeSnippets";
import { RESUME_URL, words } from "./constants";
import Button from "@/app/components/Button";
import Link from "next/link";
import Image from "next/image";

const delayUnit = 500;

const Hero: FC = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 2, ease: "power2.inOut" },
    );
  });

  return (
    <section id="hero">
      <div className="absolute top-0 left-0 z-10">
        <Image src="/images/bg.png" alt="hero-background" />
      </div>

      <div className="hero-layout">
        <div className="grid gap-10 md:grid-cols-2 md:gap-6">
          <header className="flex w-screen flex-col justify-center px-5 md:w-full md:px-20">
            <div className="flex flex-col gap-7">
              <div className="hero-text">
                <h1>
                  Crafting
                  <span className="slide">
                    <span className="wrapper">
                      {words.map((word, index) => (
                        <span key={index} className="flex items-center gap-1 pb-2 md:gap-3">
                          <Image
                            src={word.imgPath}
                            alt="person"
                            className="bg-white-50 size-7 rounded-full p-1 md:size-10 md:p-2 xl:size-12"
                          />
                          <span>{word.text}</span>
                        </span>
                      ))}
                    </span>
                  </span>
                </h1>
                <h1>To fuel business growth today</h1>
                <h1>With next gen decentralized tools</h1>
              </div>

              <p className="text-white-50 relative z-10 md:text-xl">
                Hi, I&apos;m Atsuhiro. <br />
                You can find my{" "}
                <Link href={RESUME_URL} className="font-bold underline" target="_blank">
                  Resume here
                </Link>
                , or
              </p>
              <Button text="Discover my work" className="h-12 w-60 md:h-16 md:w-80" id="work" />
            </div>
          </header>
          <Fade delay={3 * delayUnit} className="max-md:hidden">
            <CodeSnippets />
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Hero;
