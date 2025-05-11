"use client";

import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { MdOutlineUnfoldLess } from "react-icons/md";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { TbDotsVertical } from "react-icons/tb";

import { testimonials, type Testimonial } from "./constants";
import AnchoredHeader from "@/app/components/AnchorHeader";
import GlowCard from "@/app/components/GlowCard";
import useShowMore from "@/app/hooks/useShowMore";

const quoteClass = "rotate-12 h-8 w-8 opacity-20 dark:opacity-30 dark:fill-white";

const Testimonials = () => {
  const { items, isMax, toggleMore } = useShowMore<Testimonial>(testimonials);

  return (
    <section id="testimonials" className="section-padding">
      <div className="flex flex-col items-center">
        <AnchoredHeader
          anchor="testimonials"
          //   title={t("testimonials.title")}
          //   subTitle={t("testimonials.sub-title")}
          title="Tertimonials"
          subTitle="How was it to work with me?"
        />
      </div>
      <div className="flex-center flex-col gap-5">
        <div className="h-full w-full px-5 md:px-10">
          <div className="mt-8 columns-1 md:columns-2 lg:columns-3">
            {items.map(({ name, title, role, content, github, linkedin }, index) => (
              <GlowCard card={{ content: "", what: "" }} key={index} index={index}>
                <div className="text-center">
                  <RiDoubleQuotesL className={`float-left ${quoteClass}`} />
                  <h3 className="mb-2 font-semibold">{title}</h3>
                  <span
                    className="leading-relaxed italic"
                    dangerouslySetInnerHTML={{
                      __html: typeof content === "string" ? content : content.join("<br />"),
                    }}
                  />
                  <RiDoubleQuotesR className={`float-right ${quoteClass}`} />
                </div>

                <div className="my-4 flex justify-center">
                  <span className="h-1 w-10 rounded bg-indigo-500" />
                </div>
                <div className="flex w-full flex-col items-end">
                  <h3 className="title-font font-rochester text-xl font-medium tracking-wider italic">{name}</h3>
                  <p className="flex gap-2">
                    {linkedin && (
                      <a href={linkedin} target="_blank">
                        <CiLinkedin className="h-6 w-6 text-blue-500" />
                      </a>
                    )}
                    {github && (
                      <a href={github} target="_blank">
                        <FaGithub className="h-5 w-5" />
                      </a>
                    )}
                    <span className="text-slate-500 dark:text-slate-300">{role}</span>
                  </p>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
        <div className="relative cursor-pointer" onClick={toggleMore}>
          <span className="absolute inline-block rounded-full bg-indigo-500 p-2 text-lg text-white">
            {isMax ? <MdOutlineUnfoldLess /> : <TbDotsVertical />}
          </span>
          {!isMax && (
            <span className="absolute top-[1px] ml-[1px] inline-block animate-[ping_2s_ease_infinite] rounded-full bg-indigo-500 p-4 text-lg text-white"></span>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
