import { MdArrowOutward } from "react-icons/md";

const WorkCard = ({
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
    <div className="flex flex-col gap-2 text-white pb-5">
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

export default WorkCard;
