import React from "react";
import Image from "next/image";
import { GithubIcon } from "@/components/ui/github";
import { LinkedinIcon } from "../ui/linkedin";
import Link from "next/link";
import { InstagramIcon } from "../ui/instagram";

const Hero = () => {
  return (
    <div className="grid grid-col-1 gap-6 max-w-3xl mx-auto my-32 w-full">
      <div className="flex gap-6 justify-between">
        <Image
          src="/me.png"
          alt="me"
          height={2285}
          width={2285}
          className="size-28 rounded-3xl"
        ></Image>
        <div className="flex gap-3.5">
          <Link href={""} className="cursor-pointer size-8 select-none p-2 hover:bg-zinc-800 rounded-md transition-colors duration-200 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="scale-90 text-white"
              fill="none"
              viewBox="0 0 1200 1220"
            >
              <path
                fill="currentColor"
                d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"
              ></path>
            </svg>
          </Link>
          <GithubIcon className="text-white size-8" />
          <LinkedinIcon className="text-white size-8 " />
          <InstagramIcon className="text-white size-8 "/>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl text-white tracking-tight font-medium">hey there, I'm Nakul</h2>
          <p className="text-muted-foreground text-zinc-500 max-w-prose text-sm lg:text-base">20 M | Bhopal, India</p>
        </div>
        <p className="text-white max-w-prose text-lg">I build stuff with Next.js, dabble in Web3 and AI-ML. and take on design and freelance gigs.</p>
      </div>
    </div>
  );
};

export default Hero;
