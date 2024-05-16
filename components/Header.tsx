"use client";

import Image from "next/image";
import { useState } from "react";
import Infobar from "./Infobar";
import { info } from "console";

type HeaderProps = {
  setPosition: (position: [number, number]) => void;
  setAddress: (address: string) => void;
};

export type InfosTitleType = {
  title: string;
  content: string;
};

const Header: React.FC<HeaderProps> = ({ setPosition, setAddress }) => {
  const [search, setSearch] = useState<string>("");
  const [infos, setInfos] = useState<InfosTitleType[]>([]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!search) return;
    const response = await fetch(`https://ipapi.co/${search}/json/`);
    const data = await response.json();

    if (data && data.latitude && data.longitude) {
      setPosition([data.latitude, data.longitude]);
      setAddress(data.city ? `${data.city}, ${data.country_name}` : search);

      setInfos([
        { title: "IP Address", content: data.ip },
        { title: "Location", content: `${data.city}, ${data.region}, ${data.country_name}` },
        { title: "Timezone", content: data.timezone },
        { title: "ISP", content: data.org },
      ]);
      setSearch("");
    } else {
      alert('Invalid IP address or not available...');
    }
  }

  async function getMyIp() {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    setSearch(data.ip);
  }

  return (
    <>
      <header className="relative h-full flex flex-col justify-start items-center">
        <Image
          className="absolute w-full h-full top-0 left-0 right-0 bottom-0 -z-20 object-contain"
          src="/images/pattern-bg.png"
          alt=""
          width={2000}
          height={2000}
        />
        <div className="w-full max-w-[40rem] flex flex-col gap-6 mt-5">
          <h1
            className="text-xl md:text-3xl font-bold ml-4 md:ml-0 md:text-center tracking-wide"
            onClick={getMyIp}
          >FindMyIP</h1>
          <form className="sm:rounded-2xl overflow-hidden flex justify-between" onSubmit={handleSubmit}>
            <input
              className="w-full p-4 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              type="text"
              placeholder="Search for any IP address or domain"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="w-16 bg-neutral-800 text-white font-bold py-4 transition-all duration-200 hover:bg-neutral-700 active:bg-neutral-900">
              &gt;
            </button>
          </form>
        </div>
        <button
          className="absolute top-2 lg:top-10 right-4 lg:right-10 text-sm md:text-md bg-neutral-800 text-white font-bold py-4 px-8 rounded-xl hover:bg-neutral-700 transition-all duration-200 hover:scale-105 active:scale-95"
          onClick={getMyIp}
        >
          Get My IP
        </button>
        {infos.length > 0 && (
          <div className="w-full z-10 pointer-events-none static sm:absolute mt-10 sm:mt-0 top-[11rem]">
            <Infobar infos={infos} />
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
