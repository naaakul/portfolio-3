import React from "react";
import Image from "next/image";
import Link from "next/link";

interface info {
  img: string;
  link: string;
  name: string;
  des: string;
}

const SideCard = ({ name, link, img, des }: info) => {
  return (
    <Link href={`https://${link}`} target="_blank" rel="noopener noreferrer">
      <div className="group my-5 cursor-pointer w-full rounded-2xl overflow-hidden relative inline-block bg-[conic-gradient(at_center,_#001152,_#1271FF,_#64DCFF,_#001152,_#1271FF,_#64DCFF,_#001152,_#1271FF,_#64DCFF,#001152)]">
        <Image
          className="w-full h-auto block transition duration-300 group-hover:blur-sm"
          src={img}
          alt="img"
          width={4000}
          height={2000}
        />

        <p className="text-sm text-white font-medium px-3 py-1.5 bg-zinc-800/85 rounded-full absolute bottom-[-1.25rem] opacity-0 left-4 group-hover:bottom-4 group-hover:opacity-100 transition-all duration-300">
          from {link}
        </p>
      </div>

      <div className="flex flex-col gap-1 px-4 text-white">
        <h3 className="text-lg font-semibold flex items-center gah3-1 line-clamp-2">
          {name}
        </h3>
        <p className="line-clamp-2">{des}</p>
      </div>
    </Link>
  );
};

export default SideCard;
