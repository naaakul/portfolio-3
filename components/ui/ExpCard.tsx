import { MdArrowOutward } from "react-icons/md";

const ExpCard = ({
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
    <div className="flex flex-col gap-2 text-white pb-5">
      <a target="_blank" href={link}>
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

export default ExpCard;
