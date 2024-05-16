"use client";

import Image from "next/image";
import { useState } from "react";
import Infobar from "./Infobar";

const Header = () => {
  const [search, setSearch] = useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <>
      <header className="relative h-[20rem] flex flex-col justify-start items-center">
        <Image
          className="absolute w-full h-full top-0 left-0 right-0 -z-10"
          src="/images/pattern-bg-desktop.png"
          alt=""
          width={2000}
          height={2000}
        />
        <div className="w-full max-w-[40rem] flex flex-col gap-6 mt-10">
          <h1 className="text-3xl font-bold text-center tracking-wide">FindMyIP</h1>
          <form className="rounded-2xl overflow-hidden flex justify-between" onSubmit={handleSubmit}>
            <input
              className="w-full p-4 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              type="text"
              placeholder="Search for any IP address or domain"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="w-16 bg-black text-white font-bold py-4 transition-all duration-200 hover:bg-neutral-800">
              &gt;
            </button>
          </form>
        </div>
        <div className="z-10 pointer-events-none absolute -bottom-28">
          <Infobar />
        </div>
      </header>
    </>

  );
}

export default Header;