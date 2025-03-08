"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import React from "react";
import WorkCard from "../ui/WorkCard";

interface info {
  name: string;
  link: string;
  gitLink: string;
  date: string;
  des: string;
}

const cardData: info[] = [
  {
    name: "Numbers DAO",
    link: "https://numbersdao.com/",
    gitLink: "https://numbersdao.com/",
    date: "Feb 2025 - Present",
    des: "Numbers DAO helps builders grow in the crypto space by providing personalized tools, ecosystem connections, and tailored opportunities. I'm primarily working on the development of the Numbers DAO website and cummunity.",
  },
  {
    name: "Numbers DA",
    link: "https://numbersdao.com/",
    gitLink: "https://numbersdao.com/",
    date: "Feb 2025 - Present",
    des: "Numbers DAO helps builders grow in the crypto space by providing personalized tools, ecosystem connections, and tailored opportunities. I'm primarily working on the development of the Numbers DAO website and cummunity.",
  },
  {
    name: "Numbers DO",
    link: "https://numbersdao.com/",
    gitLink: "https://numbersdao.com/",
    date: "Feb 2025 - Present",
    des: "Numbers DAO helps builders grow in the crypto space by providing personalized tools, ecosystem connections, and tailored opportunities. I'm primarily working on the development of the Numbers DAO website and cummunity.",
  },
  {
    name: "Numbers AO",
    link: "https://numbersdao.com/",
    gitLink: "https://numbersdao.com/",
    date: "Feb 2025 - Present",
    des: "Numbers DAO helps builders grow in the crypto space by providing personalized tools, ecosystem connections, and tailored opportunities. I'm primarily working on the development of the Numbers DAO website and cummunity.",
  },
];

const Works = () => {
  const boxRef = useRef(null);
  
    useEffect(() => {
      let ctx = gsap.context(() => {
        gsap.fromTo(
          boxRef.current,
          { y: 100 },
          {
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: boxRef.current,
              start: "-20% 80%",
              end: "-20% 50%",
              scrub: true,
            },
          }
        );
      });
  
      return () => ctx.revert();
    }, []);

  return (
    <div ref={boxRef} className="grid grid-cols-1 px-4 sm:px-0 gap-6 max-w-3xl mx-auto w-full">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl text-white tracking-tighter font-bold uppercase">
          Works
        </h2>
      </div>
      <div className="flex flex-col gap-10">
        {cardData.map((e) => (
          <WorkCard
            key={e.name}
            name={e.name}
            link={e.link}
            gitLink={e.gitLink}
            des={e.des}
          />
        ))}
      </div>
    </div>
  );
};

export default Works;