"use client";

import Header from "@/components/Header";
import Map from "@/components/Map";
import { use, useEffect, useState } from "react";

export default function Home() {
  const [position, setPosition] = useState<[number, number] | null>(null);
  const [address, setAddress] = useState<string>('');

  useEffect(() => {
    console.log('Position:', position);
    console.log('Address:', address);
  }
    , [position, address]);

  return (
    <main className="min-h-screen">
      <div className="sm:h-[25vh]">
        <Header setPosition={setPosition} setAddress={setAddress} />
      </div>
      <div className="sm:h-[75vh]">
        <Map position={position} address={address} />
      </div>
    </main>
  );
}
