"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import AnchoredHeader from "../components/AnchorHeader";
import { SECTION } from "../components/constants";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const WorkShowCase = () => {
  const sectionRef = useRef(null);
  const devExRef = useRef(null);
  const sdkRef = useRef(null);
  const cliRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 });
    const cards = [devExRef.current, sdkRef.current, cliRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        },
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="flex flex-col items-center">
          <AnchoredHeader
            anchor={SECTION.RECENT_PROJECTS}
            title="Recent Projects"
            subTitle="What I have been working on"
          />
        </div>
        <div className="showcaselayout mt-8">
          <div ref={devExRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <Image src="/images/affinidi-devex-portal.png" alt="Dev-Ex portal" width={500} height={500} />
            </div>
            <div className="text-content">
              <h2>An interactive interface enabling developers integrate Affinidi Login into their application.</h2>
              <p className="text-white-50 md:text-xl">
                Built with React, Cloudscape, Express on AWS with a focus on developer-friendly experience.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={sdkRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <Image
                  src="/images/affinidi-vault-profile-create.gif"
                  alt="Affinidi Vault"
                  width={500}
                  height={500}
                  unoptimized
                />
              </div>
              <h2>
                Vault enables discovering, collecting, storing, sharing, and monetising data in a fragmented world
              </h2>
            </div>
            <div className="project" ref={cliRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <Image
                  src="/images/affinidi-cli.png"
                  alt="Affinidi CLI"
                  className="rounded-4xl"
                  width={500}
                  height={500}
                />
              </div>
              <h2>CLI to easily manage projects and integrate with Affinidi services using the command line</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkShowCase;
