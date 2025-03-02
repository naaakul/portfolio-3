import React from "react";
import { MdArrowOutward } from "react-icons/md";

interface info {
  name: string;
  link: string;
  date: string;
  des: string;
}

const cardData: info[] = [
  {
    name: "Numbers DAO",
    link: "https://numbersdao.com/",
    date: "Feb 2025 - Present",
    des: "Numbers DAO helps builders grow in the crypto space by providing personalized tools, ecosystem connections, and tailored opportunities. I'm primarily working on the development of the Numbers DAO website and cummunity.",
  },
];

const Experience = () => {
  return (
    <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto w-full">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl text-white tracking-tighter font-bold uppercase">
          Experience
        </h2>
      </div>
        {cardData.map((e) => (
          <Cards key={e.name} name={e.name} link={e.link} date={e.date} des={e.des}/>
        ))}
      <div className="flex flex-col gap-8"></div>
    </div>
  );
};

const Cards = ({
  name,
  link,
  date,
  des,
}: {
  name: string;
  link: string;
  date: string;
  des: string;
}) => {
  return (
    <div className="flex flex-col gap-2 text-white border-b border-b-zinc-600 pb-5">
      <a href={link}>
        <p className="flex items-center text-lg gap-2 font-medium">
          <MdArrowOutward className="text-xl" />
          {name}
        </p>
      </a>
      <p className="text-sm text-zinc-600">{date}</p>
      <p className="">{des}</p>
    </div>
  );
};

export default Experience;
