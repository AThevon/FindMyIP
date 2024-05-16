import { InfosTitleType } from "./Header";

type InfobarProps = {
  infos: InfosTitleType[];
};

const Infobar: React.FC<InfobarProps> = ({ infos }) => {
  return (
    <section className="bg-neutral-50 p-6 w-full max-w-[80rem] mx-auto text-black lg:rounded-xl pointer-events-auto shadow-lg">
      <ul className="grid sm:grid-cols-2 md:grid-cols-4 w-full h-full justify-between gap-4 text-start">
        {infos.map((info, idx) => (
          <li key={idx} className="flex justify-between px-6 h-full">
            <div className="flex flex-col gap-2">
              <h2 className="text-md font-normal text-neutral-600">
                {info.title}
              </h2>
              <p className="text-xl font-bold">
                {info.content}
              </p>
            </div>
            {idx < infos.length - 1 && (
              <div className="hidden sm:block ml-4 border-r border-neutral-200 h-full" />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Infobar;
