"use client";

import React from "react";
import ItemLayout from "@/Components/About/ItemLayout";
import Image from "next/image";

const ComingDetails = () => {
  return (
    <section className="py-20 w-full max-w-3xl mx-auto">
      <div className="flex flex-col gap-8 w-full">
      <h1 className="text-4xl md:text-5xl w-full capitalize text-accent text-center py-10">
          In development
        </h1>
        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize text-accent">
            Wanderkin
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
          {"I'm working on the frontend team, building the client of the games. I started at the company in august 2025 and so far "}
          3 Wildos is only game that has been released. The other games and work are so far under NDA.
          </p>
          <Image src="/assets/3wildos.png" alt="3 Wildos screenshot" width={500} height={500} className=""/>
          <p>The game can be tested on the official site: <a className="text-accent" href="https://www.thunderkick.com/games/3-wildos/" target="_blank" rel="noopener noreferrer">Thunderkick</a></p>
        </ItemLayout>
        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize text-accent">
            Whatever Remains
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
          {"I'm working on the frontend team, building the client of the games. I started at the company in august 2025 and so far "}
          3 Wildos is only game that has been released. The other games and work are so far under NDA.
          </p>
          <Image src="/assets/3wildos.png" alt="3 Wildos screenshot" width={500} height={500} />
          <p>The game can be tested on the official site: <a className="text-accent" href="https://www.thunderkick.com/games/3-wildos/" target="_blank" rel="noopener noreferrer">Thunderkick</a></p>
        </ItemLayout>
        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize text-accent">
            Kipanya
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
          {"I'm working on the frontend team, building the client of the games. I started at the company in august 2025 and so far "}
          3 Wildos is only game that has been released. The other games and work are so far under NDA.
          </p>
          <Image src="/assets/3wildos.png" alt="3 Wildos screenshot" width={500} height={500} />
          <p>The game can be tested on the official site: <a className="text-accent" href="https://www.thunderkick.com/games/3-wildos/" target="_blank" rel="noopener noreferrer">Thunderkick</a></p>
        </ItemLayout>
        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize text-accent">
            Biocide
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
          {"I'm working on the frontend team, building the client of the games. I started at the company in august 2025 and so far "}
          3 Wildos is only game that has been released. The other games and work are so far under NDA.
          </p>
          <Image src="/assets/3wildos.png" alt="3 Wildos screenshot" width={500} height={500} />
          <p>The game can be tested on the official site: <a className="text-accent" href="https://www.thunderkick.com/games/3-wildos/" target="_blank" rel="noopener noreferrer">Thunderkick</a></p>
        </ItemLayout>
        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize text-accent">
            Pitches
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
          {"I'm working on the frontend team, building the client of the games. I started at the company in august 2025 and so far "}
          3 Wildos is only game that has been released. The other games and work are so far under NDA.
          </p>
          <Image src="/assets/3wildos.png" alt="3 Wildos screenshot" width={500} height={500} />
          <p>The game can be tested on the official site: <a className="text-accent" href="https://www.thunderkick.com/games/3-wildos/" target="_blank" rel="noopener noreferrer">Thunderkick</a></p>
        </ItemLayout>
      </div>
    </section>
  );
};

export default ComingDetails;
