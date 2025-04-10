import React from "react";
import Image from "next/image";
import { GithubIcon } from "@/components/ui/github";
import { LinkedinIcon } from "../ui/linkedin";
import Link from "next/link";
import { InstagramIcon } from "../ui/instagram";
import { RiTwitterXLine } from "react-icons/ri";

const Hero = () => {
  return (
    <div className="grid grid-col-1 gap-6 max-w-3xl mx-auto px-4 sm:px-0 my-28 w-full">
      <div className="flex gap-6 justify-between">
        <Image
          src="/me.png"
          alt="me"
          height={2285}
          width={2285}
          className="size-28 rounded-3xl"
        ></Image>
        <div className="flex gap-3.5">
          <Link
            target="_blank"
            href={"https://x.com/_naaakul"}
            className="size-8 select-none text-white hover:bg-zinc-800 rounded-md transition-colors duration-200 flex items-center justify-center"
          >
            <RiTwitterXLine />
          </Link>
          <Link target="_blank" href={"https://github.com/naaakul"}>
            <GithubIcon className="text-white size-8" />
          </Link>
          <Link target="_blank" href={"https://linkedin.com/in/nakul-chouksey/"}>
            <LinkedinIcon className="text-white size-8 " />
          </Link>
          <Link target="_blank" href={"https://instagram.com/_naakul/"}>
            <InstagramIcon className="text-white size-8 " />
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl text-white tracking-tight font-medium">
            hey there, I'm Nakul
          </h2>
          <p className="text-muted-foreground text-zinc-500 max-w-prose text-sm lg:text-base">
            20 M | Bhopal, India | Builder at <Link target="_blank" href={"https://numbersdao.fun/"}>@NumbersDAO</Link> 
          </p>
        </div>
        <p className="text-white max-w-prose text-lg">
          I build stuff with Next.js, dabble in Web3 and AI-ML. and take on
          design and freelance gigs.
        </p>
      </div>
    </div>
  );
};

export default Hero;
