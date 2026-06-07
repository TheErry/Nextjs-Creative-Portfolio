"use client";

import React from "react";
import ItemLayout from "@/Components/About/ItemLayout";
import ImageGallery from "@/Components/Work/ImageGallery";

const WorkDetails = () => {
  return (
    <section className="py-20 w-full max-w-3xl mx-auto">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl w-full capitalize text-accent text-center py-10">
          Previous work
        </h1>
        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start margin-bottom-10"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize text-accent">
            Thunderkick
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            {"Game client developer on the frontend team, building and maintaining interactive casino games using the company's proprietary engine. My role spans gameplay implementation, Spine animation integration, particle effects, and internal AI tooling. Most work is under NDA — but 3 Wildos is live and playable"}
          </p>
          <ImageGallery
            images={[
              {
                src: "/assets/3wildos.png",
                alt: "3 Wildos screenshot",
              },
            ]}
          />
          <p>
            The game can be tested on the official site:{" "}
            <a
              className="text-accent"
              href="https://www.thunderkick.com/games/3-wildos/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Thunderkick
            </a>
          </p>
        </ItemLayout>
        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start margin-bottom-10"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize text-accent">
            Svenska Spel
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            Worked on online lottery products and iGaming titles, primarily Triss
            and the digital Christmas calendars. Built dynamic animations with
            Spine, GSAP and Pixi.js, and designed an iLottery game that was picked
            up by the LEIA project group
          </p>
          <ImageGallery
            images={[
              {
                src: "/assets/3wildos.png",
                alt: "Svenska Spel screenshot",
              },
            ]}
          />
          <p>Some games can still be found on Svenska Spels web page</p>
        </ItemLayout>
        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start margin-bottom-10"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize text-accent">
            Walkabout
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            An award-winning puzzle adventure where a group of small wandering
            beings travel through a vast world — controlled not by directing the
            characters themselves, but by rotating the entire world around them.
            Physics-driven mechanics with pendulums, balance boards and drawbridges
            made for a game designed to be just as beautiful to watch as to play.
            Released on iOS. Awarded the Pwnage Award at Gotland Game Awards 2009
            and exhibited at GamesCOM in Cologne.
          </p>
          <ImageGallery
            images={[
              { src: "/assets/walkabout1.jpg", alt: "Walkabout screenshot 1" },
              { src: "/assets/walkabout2.jpg", alt: "Walkabout screenshot 2" },
              { src: "/assets/walkabout3.jpg", alt: "Walkabout screenshot 3" },
              { src: "/assets/walkabout4.jpg", alt: "Walkabout screenshot 4" },
              { src: "/assets/walkabout5.jpg", alt: "Walkabout screenshot 5" },
            ]}
          />
          <p>
            The game can be tested on the official site:{" "}
            <a
              className="text-accent"
              href="https://www.thunderkick.com/games/3-wildos/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Thunderkick
            </a>
          </p>
        </ItemLayout>
        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start margin-bottom-10"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize text-accent">
            Midnight
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            A three-player real-time strategy game built around rock-paper-scissors
            — Rocks, Papers and Scissors as living factions in a nocturnal world,
            each in a predator/prey relationship with the others. Stealth, deception
            and ambushing over numbers and micromanagement. Awarded Best
            Presentation at Gotland Game Awards 2010.
          </p>
          <ImageGallery
            images={[
              { src: "/assets/rock.jpg", alt: "Midnight — Rocks faction" },
              { src: "/assets/paper.jpg", alt: "Midnight — Papers faction" },
              { src: "/assets/scissor.jpg", alt: "Midnight — Scissors faction" },
              { src: "/assets/midnight1.jpg", alt: "Midnight screenshot 1" },
              { src: "/assets/midnight2.jpg", alt: "Midnight screenshot 2" },
              { src: "/assets/midnight3.jpg", alt: "Midnight screenshot 3" },
            ]}
          />
          <p>
            The game can be tested on the official site:{" "}
            <a
              className="text-accent"
              href="https://www.thunderkick.com/games/3-wildos/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Thunderkick
            </a>
          </p>
        </ItemLayout>
        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize text-accent">
            Adventure League
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            A four-player co-op game where players explore ancient ruins, solve
            traps and puzzles that require the whole group to cooperate — without
            being able to communicate directly. Won the Pwnage Award at Gotland
            Game Conference 2011.
          </p>
          <ImageGallery
            images={[
              {
                src: "/assets/adventure1.jpg",
                alt: "Adventure League screenshot 1",
              },
              {
                src: "/assets/adventure2.jpg",
                alt: "Adventure League screenshot 2",
              },
              {
                src: "/assets/adventure3.jpg",
                alt: "Adventure League screenshot 3",
              },
              {
                src: "/assets/adventure4.jpg",
                alt: "Adventure League screenshot 4",
              },
            ]}
          />
          <p>
            The game can be tested on the official site:{" "}
            <a
              className="text-accent"
              href="https://www.thunderkick.com/games/3-wildos/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Thunderkick
            </a>
          </p>
        </ItemLayout>
      </div>
    </section>
  );
};

export default WorkDetails;
