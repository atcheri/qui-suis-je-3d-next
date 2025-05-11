"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { techStackIcons } from "./constants";
import TechIconCard from "./TechIconCard";
import AnchoredHeader from "@/app/components/AnchorHeader";
import { SECTION } from "@/app/components/constants";

const TeckStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      },
    );
  });

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="h-full w-full px-5 md:px-10">
        <div className="flex flex-col items-center">
          <AnchoredHeader
            anchor={SECTION.TECH_SKILLS}
            title="Key tech skills"
            subTitle="An overview of what I can do"
          />
        </div>
        <div className="tech-grid">
          {techStackIcons.map((techStackIcon) => (
            <div key={techStackIcon.name} className="card-border tech-card group overflow-hidden rounded-lg">
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <TechIconCard model={techStackIcon} />
                </div>
                <div className="padding-x w-full">
                  <p>{techStackIcon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeckStack;
