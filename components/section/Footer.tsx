"use client";

import { useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import React from "react";
import { BackgroundGradientAnimation4 } from "../ui/Background3";
import { BackgroundGradientAnimation3 } from "../ui/Background2";
import {
  BackgroundGradientAnimation1,
  BackgroundGradientAnimation2,
} from "../ui/Background1";

const Footer = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        boxRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
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

  const animations = [
    BackgroundGradientAnimation1,
    BackgroundGradientAnimation2,
    BackgroundGradientAnimation2,
    BackgroundGradientAnimation2,
    BackgroundGradientAnimation2,
    BackgroundGradientAnimation2,
    BackgroundGradientAnimation3,
    BackgroundGradientAnimation4,
  ];

  const RandomBackground = useMemo(
    () => animations[Math.floor(Math.random() * animations.length)],
    []
  );

  return (
    <footer
      ref={boxRef}
      className="w-full p-4 md:p-8 items-center justify-center h-full overflow-hidden z-50"
    >
      <div
        className="sticky z-30 bottom-0 bg-[#3B82F6] rounded-[36px] left-0 w-full h-80 flex justify-center items-center overflow-hidden"
        style={{ opacity: 1, transform: "none" }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 blur-[100px]">
            <RandomBackground />
          </div>
          <div className="relative overflow-hidden w-full h-full flex justify-end px-12 text-right items-start py-12 text-white">
            <div className="flex justify-between w-full sm:text-lg md:text-xl">
              <p className="text-white/60 text-sm">Last updated: 30-03-2025</p>
              <ul>
                <li className="hover:underline cursor-pointer">
                  <a target="_blank" href="https://x.com/heynakul">
                    X
                  </a>
                </li>
                <li className="hover:underline cursor-pointer">
                  <a target="_blank" href="https://x.com/heynakul">
                    Github
                  </a>
                </li>
                <li className="hover:underline cursor-pointer">
                  <a target="_blank" href="https://x.com/heynakul">
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
            <h2 className="absolute -bottom-4 josefin-sans left-0 translate-y-1/3 sm:text-[192px] text-[128px] text-white font-black tracking-tighter">
              NAKUL.
            </h2>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
