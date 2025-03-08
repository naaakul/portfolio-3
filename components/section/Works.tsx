"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import React from "react";
import WorkCard from "../ui/WorkCard";

interface info {
  name: string;
  link?: string;
  gitLink: string;
  des: string;
  // 35 words ka description hone kaa
}

const cardData: info[] = [
  {
    name: "Wizzzard",
    link: "https://waizard.nakul.space/auth/signup",
    gitLink: "https://github.com/naaakul/Wizzzard",
    des: "Wizard is a Solana-powered quiz application where users participate in weekly quizzes, earn points, and compete on leaderboards. It ensures fair play with features like tab-switch detection and randomized questions for each participant.",
  },
  {
    name: "Numbers DAO",
    link: "https://numbersdao.fun/",
    gitLink: "https://github.com/Akshatmaurya25/Numbers-DAO",
    des: "Numbers DAO Website — Contributed to developing and optimizing the official website of Numbers DAO, focusing on web performance, UI/UX, and seamless user experience to represent the decentralized community effectively.",
  },
  {
    name: "YC-Directory",
    gitLink: "https://github.com/naaakul/YC-Directory",
    des: "YC Directory — Built a Next.js application that aggregates and showcases recently pitched YC (Y Combinator) startup details, providing quick access to their founders, products, and market insights for enthusiasts and investors.",
  },
  {
    name: "Google Gemini Clone",
    link: "https://gemini-clone-ten-mauve.vercel.app/",
    gitLink: "https://github.com/naaakul/Gemini-Clone",
    des: "Google Gemini Clone — Developed a Gemini AI clone using React.js and Google Gemini API, enabling users to generate text, answer queries, and interact with AI models similar to Google's Gemini platform.",
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
    <div ref={boxRef} className="grid grid-cols-1 px-4 sm:px-0 mb-16 gap-6 max-w-3xl mx-auto w-full">
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