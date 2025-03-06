import React from "react";
import { MdArrowOutward } from "react-icons/md";

interface info {
  name: string;
  link: string;
  gitLink: string;
  date: string;
  des: string;
}

const cardData: info[] = [
  {
    name: "Numbers DAO",
    link: "https://numbersdao.com/",
    gitLink: "https://numbersdao.com/",
    date: "Feb 2025 - Present",
    des: "Numbers DAO helps builders grow in the crypto space by providing personalized tools, ecosystem connections, and tailored opportunities. I'm primarily working on the development of the Numbers DAO website and cummunity.",
  },
  {
    name: "Numbers DA",
    link: "https://numbersdao.com/",
    gitLink: "https://numbersdao.com/",
    date: "Feb 2025 - Present",
    des: "Numbers DAO helps builders grow in the crypto space by providing personalized tools, ecosystem connections, and tailored opportunities. I'm primarily working on the development of the Numbers DAO website and cummunity.",
  },
  {
    name: "Numbers DO",
    link: "https://numbersdao.com/",
    gitLink: "https://numbersdao.com/",
    date: "Feb 2025 - Present",
    des: "Numbers DAO helps builders grow in the crypto space by providing personalized tools, ecosystem connections, and tailored opportunities. I'm primarily working on the development of the Numbers DAO website and cummunity.",
  },
  {
    name: "Numbers AO",
    link: "https://numbersdao.com/",
    gitLink: "https://numbersdao.com/",
    date: "Feb 2025 - Present",
    des: "Numbers DAO helps builders grow in the crypto space by providing personalized tools, ecosystem connections, and tailored opportunities. I'm primarily working on the development of the Numbers DAO website and cummunity.",
  },
];

const Works = () => {
  return (
    <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto w-full">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl text-white tracking-tighter font-bold uppercase">
          Works
        </h2>
      </div>
      <div className="flex flex-col gap-5">
        {cardData.map((e) => (
          <Cards
            key={e.name}
            name={e.name}
            link={e.link}
            gitLink={e.gitLink}
            des={e.des}
          />
        ))}
      </div>
      <div className="flex flex-col gap-8"></div>
    </div>
  );
};

const Cards = ({
  name,
  link,
  des,
  gitLink,
}: {
  name: string;
  link?: string;
  des: string;
  gitLink: string;
}) => {
  return (
    <div className="flex flex-col gap-2 text-white border-b border-b-zinc-600 pb-5">
      <div className="flex gap-10">
        <a href={link ? link : gitLink}>
          <p className="flex items-center text-lg gap-2 font-medium">
            <MdArrowOutward className="text-xl" />
            {name}
          </p>
        </a>
        {link && (
          <a href={gitLink}>
            <p className="flex items-center text-lg gap-2 font-medium">
              <MdArrowOutward className="text-xl" />
              Source Code
            </p>
          </a>
        )}
      </div>
      <p className="">{des}</p>
    </div>
  );
};

export default Works;
