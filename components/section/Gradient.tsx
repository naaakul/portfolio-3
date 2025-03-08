"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import React from "react";
import {BackgroundGradientAnimation3} from "../ui/Background2";
import AnimatedText from "../ui/AnimatedText";

const Gradient = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        boxRef.current,
        { y: 0, scaleX: 1.25 },
        {
          y: -100,
          scaleX: 0.95,
          duration: 1,
          transformOrigin: "center center", 
          scrollTrigger: {
            trigger: boxRef.current,
            start: "top 70%",
            end: "top 10%",
            scrub: true,
          },
        }
      );
    });
  
    return () => ctx.revert();
  }, []);

  return (
    <div ref={boxRef} className="relative h-screen z-[53] mb-16">
      <div className="pointer-events-none z-[52] absolute w-full h-full inset-0 flex justify-center items-center">
        <AnimatedText/> 
      </div>
      <div className="g-[#000044] absolute z-[50] top-0 left-1/2 -translate-x-1/2 w-full h-[94vh] rounded-[36px] overflow-hidden flex justify-center items-center">
        <BackgroundGradientAnimation3 />
      </div>
    </div>
  );
};

export default Gradient;
