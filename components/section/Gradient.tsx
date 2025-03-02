import React from "react";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";

const Gradient = () => {
  return (
    <div className="relative h-screen z-30">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[94vh] rounded-[36px] overflow-hidden flex justify-center items-center">
        <BackgroundGradientAnimation />
      </div>
    </div>
  );
};

export default Gradient;
