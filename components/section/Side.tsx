"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import React from "react";
import SideCard from "../ui/SideCard";

interface info {
  img: string;
  link: string;
  name: string;
  des: string;
}

const cardData: info[] = [
  {
    img: "/side0.png",
    link: "guupost.xyz",
    name: "Guupost - The shit you like",
    des: "Guupost lets you create viral, meme-style posts using AI Built for creators, shitposters, and anyone who loves chaotic internet energy.",
  },
];

const Side = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        boxRef.current,
        { y: 100 },
        {
          y: -10,
          duration: 1,
          scrollTrigger: {
            trigger: boxRef.current,
            start: "-40% 80%",
            end: "-40% 50%",
            scrub: true,
            // markers: true
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={boxRef}
      className="grid grid-cols-1 px-4 sm:px-0 gap-6 max-w-3xl mx-auto w-full mb-16"
    >
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl text-white tracking-tighter font-bold uppercase">
          On Side
        </h2>
      </div>
      <div className="flex flex-col gap-10">
        {cardData.map((e) => (
          <SideCard
            key={e.name}
            name={e.name}
            link={e.link}
            img={e.img}
            des={e.des}
          />
        ))}
      </div>
    </div>
  );
};

export default Side;
