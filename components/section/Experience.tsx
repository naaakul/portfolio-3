"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import React from "react";
import ExpCard from "../ui/ExpCard";

interface info {
  name: string;
  link: string;
  date: string;
  des: string;
}

const cardData: info[] = [
  {
    name: "Numbers DAO",
    link: "https://numbersdao.com/",
    date: "Feb 2025 - Present",
    des: "Numbers DAO helps builders grow in the crypto space by providing personalized tools, ecosystem connections, and tailored opportunities. I'm primarily working on the development of the Numbers DAO website and cummunity.",
  },
];

const Experience = () => {
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
            start: "top 80%",
            end: "top 50%",
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
          Experience
        </h2>
      </div>
      <div className="flex flex-col gap-10">
        {cardData.map((e) => (
          <ExpCard
            key={e.name}
            name={e.name}
            link={e.link}
            date={e.date}
            des={e.des}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
