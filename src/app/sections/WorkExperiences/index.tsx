"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { workExperiences } from "./constants";
import AnchoredHeader from "@/app/components/AnchorHeader";
import { SECTION } from "@/app/components/constants";
import GlowCard from "@/app/components/GlowCard";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const WorkExperience = () => {
  useGSAP(() => {
    gsap.utils.toArray(".timeline-card").forEach((exp) => {
      gsap.from(exp as gsap.TweenTarget, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: exp as gsap.DOMTarget,
          start: "top 80%",
        },
      });
    });

    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text as gsap.TweenTarget, {
        opacity: 0,
        xPercent: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text as gsap.DOMTarget,
          start: "top 60%",
        },
      });
    }, "<");
  }, []);

  return (
    <section id="experience" className="flex-center section-padding xl:px-0">
      <div className="h-full w-full px-5 md:px-20">
        <div className="flex flex-col items-center">
          <AnchoredHeader
            anchor={SECTION.PAST_EXPERIENCE}
            title="Professional Work Experience"
            subTitle="Career Overview"
          />
        </div>
        <div className="relative mt-8">
          <div className="relative z-50 space-y-10 xl:space-y-32">
            {workExperiences.map((exp, index) => (
              <div key={`${exp.title}-${index}`} className="exp-card-wrapper">
                <div className="xl:w-2/6">
                  <GlowCard card={exp} index={index} />
                </div>
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line h-full w-1" />
                    </div>
                    <div className="expText relative z-20 flex gap-5 md:gap-10 xl:gap-20">
                      <div className="timeline-logo">
                        <Image src={exp.logoPath || ""} alt="logo" width={500} height={500} />
                      </div>
                      <div>
                        <h1 className="text-3xl font-semibold">{exp.title}</h1>
                        <h2>
                          {exp.place}, {exp.location}
                        </h2>
                        {exp.url && (
                          <Link href={exp.url} target="_blank" className="italic">
                            {exp.url}
                          </Link>
                        )}
                        <p className="text-white-50 my-5">🗓️&nbsp;{exp.period.year}</p>
                        <p className="text-[#839CB5] italic">Responsibilities</p>
                        <ul className="text-white-50 ms-5 mt-5 flex list-disc flex-col gap-5">
                          {exp.description.map((desc, index) => (
                            <li key={index} className="text-lg">
                              {desc.content}
                              {desc.url && (
                                <a
                                  href={desc.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-500 hover:underline"
                                >
                                  {" "}
                                  link
                                </a>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
