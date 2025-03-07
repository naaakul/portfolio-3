"use client";

import Gradient from "@/components/section/Gradient";
import Hero from "@/components/section/Hero";
import React, { useEffect } from "react";
import Experience from "@/components/section/Experience";
import Works from "@/components/section/Works";
import Lenis from "lenis";
import Footer from "@/components/section/Footer";

const Page = () => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="flex flex-col gap-16 py-4 md:py-8 bg-black overflow-hidden">
      <Hero />
      <Gradient />
      <Experience />
      <Works />
      <Footer />
    </div>
  );
};

export default Page;
