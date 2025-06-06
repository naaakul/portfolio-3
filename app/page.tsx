"use client";

import Gradient from "@/components/section/Gradient";
import Hero from "@/components/section/Hero";
import React, { useEffect } from "react";
import Experience from "@/components/section/Experience";
import Works from "@/components/section/Works";
import Lenis from "lenis";
import Footer from "@/components/section/Footer";
import Side from "@/components/section/Side";

const Page = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const lenis = new Lenis();
      function raf(time: any) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }
  }, []);

  return (
    <div className="flex flex-col pt-4 md:pt-8 pb-4 bg-black overflow-hidden">
      <Hero />
      <Gradient />
      <Experience />
      <Works />
      <Side />
      <Footer />
    </div>
  );
};

export default Page;
