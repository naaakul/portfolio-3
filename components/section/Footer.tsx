import React from "react";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";

const Footer = () => {
  return (
    <footer className="w-full p-4 md:p-8 items-center justify-center h-full overflow-hidden z-30">
      <div
        className="sticky z-30 bottom-0 bg-[#3B82F6] rounded-[36px] left-0 w-full h-80 flex justify-center items-center overflow-hidden"
        style={{ opacity: 1, transform: "none" }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 blur-[100px]">
            <BackgroundGradientAnimation />
          </div>
          <div className="relative overflow-hidden w-full h-full flex justify-end px-12 text-right items-start py-12 text-white">
            <div className="flex justify-between w-full sm:text-lg md:text-xl">
                <p className="text-white/60 text-sm">Last updated: 26-02-2025</p>
                <ul>
                    <li className="hover:underline cursor-pointer">
                        <a target="_blank" href="https://x.com/heynakul">X</a>
                    </li>
                    <li className="hover:underline cursor-pointer">
                        <a target="_blank" href="https://x.com/heynakul">Github</a>
                    </li>
                    <li className="hover:underline cursor-pointer">
                        <a target="_blank" href="https://x.com/heynakul">Linkedin</a>
                    </li>
                </ul>
            </div>
            <h2 className="absolute bottom-0 left-0 translate-y-1/3 sm:text-[192px] text-[128px] text-white font-extrabold tracking-tighter">NAKUL.</h2>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
