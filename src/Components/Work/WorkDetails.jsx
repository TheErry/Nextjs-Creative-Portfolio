"use client";

import React from "react";
import ItemLayout from "@/Components/About/ItemLayout";
import ImageGallery from "@/Components/Work/ImageGallery";

const roleMetaClass = "font-semibold text-xs sm:text-sm md:text-base";

const WorkDetails = () => {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-40 bg-black/40"
      />
      <section className="py-20 w-full max-w-3xl mx-auto">
      <div className="flex flex-col gap-8 w-full">
        <h1 className="text-4xl md:text-5xl w-full capitalize text-accent text-center py-10">
          Previous work
        </h1>
        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <div className="space-y-1 w-full">
            <h2 className="text-xl md:text-2xl text-left w-full capitalize text-accent">
              Thunderkick
            </h2>
            <p className={roleMetaClass}>
              {"Game developer | August 2025 - Present"}
            </p>
          </div>
          <p className="font-light text-xs sm:text-sm md:text-base">
            {"Game client developer on the frontend team, building and maintaining interactive casino games using the company's proprietary engine. My role spans gameplay implementation, Spine animation integration, particle effects, and internal AI tooling. Most work is under NDA — but 3 Wildos is live and playable"}
          </p>
          <ImageGallery
            media={[
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
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <div className="space-y-1 w-full">
            <h2 className="text-xl md:text-2xl text-left w-full capitalize text-accent">
              Svenska Spel
            </h2>
            <p className={roleMetaClass}>
              {"Software developer | March 2022 - March 2025"}
            </p>
          </div>
          <p className="font-light text-xs sm:text-sm md:text-base">
            Worked on online lottery products and iGaming titles, primarily Triss
            and the digital Christmas calendars. Built dynamic animations with
            Spine, GSAP and Pixi.js, and designed an iLottery game that was picked
            up by the LEIA project group
          </p>
          <ImageGallery
            media={[
              { type: "image", src: "/assets/svenskaspel1.png", alt: "Svenska Spel screenshot 1" },
              { type: "image", src: "/assets/svenskaspel2.png", alt: "Svenska Spel screenshot 2" },
              { type: "image", src: "/assets/svenskaspel3.png", alt: "Svenska Spel screenshot 3" },
              { type: "image", src: "/assets/svenskaspel4.png", alt: "Svenska Spel screenshot 4" },
              { type: "image", src: "/assets/svenskaspel5.png", alt: "Svenska Spel screenshot 5" },
              {
                type: "video",
                src: "https://www.youtube.com/embed/9h3kwbOevaE",
                alt: "Svenska Spel trailer",
              },
            ]}
          />
          <p>Some games can still be found on Svenska Spels web page:{" "}
          <a
              className="text-accent"
              href="https://www.svenskaspel.se/tur?refs=vattendelaren"
              target="_blank"
              rel="noopener noreferrer"
            >
              Turspel
            </a>
          </p>
        </ItemLayout>
        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <div className="space-y-1 w-full">
            <h2 className="text-xl md:text-2xl text-left w-full capitalize text-accent">
              Walkabout
            </h2>
            <p className={roleMetaClass}>{"Game designer and animator"}</p>
          </div>
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
            media={[
              { type: "image", src: "/assets/walkabout1.jpg", alt: "Walkabout screenshot 1" },
              { type: "image", src: "/assets/walkabout2.jpg", alt: "Walkabout screenshot 2" },
              { type: "image", src: "/assets/walkabout3.jpg", alt: "Walkabout screenshot 3" },
              { type: "image", src: "/assets/walkabout4.jpg", alt: "Walkabout screenshot 4" },
              { type: "image", src: "/assets/walkabout5.jpg", alt: "Walkabout screenshot 5" },
              {
                type: "video",
                src: "https://www.youtube.com/embed/26bY3s-x3D8",
                alt: "Walkabout trailer",
              },
            ]}
          />
          <p>
            Read more about the game here:{" "}
            <a
              className="text-accent"
              href="https://game.speldesign.uu.se/projects/arcade-games/walkabout/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Walkabout
            </a>
          </p>
        </ItemLayout>
        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <div className="space-y-1 w-full">
            <h2 className="text-xl md:text-2xl text-left w-full capitalize text-accent">
              Midnight
            </h2>
            <p className={roleMetaClass}>{"Game designer and animator"}</p>
          </div>
          <p className="font-light text-xs sm:text-sm md:text-base">
            A three-player real-time strategy game built around rock-paper-scissors
            — Rocks, Papers and Scissors as living factions in a nocturnal world,
            each in a predator/prey relationship with the others. Stealth, deception
            and ambushing over numbers and micromanagement. Awarded Best
            Presentation at Gotland Game Awards 2010.
          </p>
          <ImageGallery
            media={[
              { type: "image", src: "/assets/rock.jpg", alt: "Midnight — Rocks faction" },
              { type: "image", src: "/assets/paper.jpg", alt: "Midnight — Papers faction" },
              { type: "image", src: "/assets/scissor.jpg", alt: "Midnight — Scissors faction" },
              { type: "image", src: "/assets/midnight1.jpg", alt: "Midnight screenshot 1" },
              { type: "image", src: "/assets/midnight2.jpg", alt: "Midnight screenshot 2" },
              { type: "image", src: "/assets/midnight3.jpg", alt: "Midnight screenshot 3" },
              {
                type: "video",
                src: "https://www.youtube.com/embed/MlRK4PRoHm8?si=medFJv173-Z9Phf1",
                alt: "Midnight trailer",
              },
            ]}
          />
          <p>
            Read more about the game here:{" "}
            <a
              className="text-accent"
              href="https://game.speldesign.uu.se/projects/3d-games/midnight/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Midnight
            </a>
          </p>
        </ItemLayout>
        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <div className="space-y-1 w-full">
            <h2 className="text-xl md:text-2xl text-left w-full capitalize text-accent">
              Adventure League
            </h2>
            <p className={roleMetaClass}>{"Animator"}</p>
          </div>
          <p className="font-light text-xs sm:text-sm md:text-base">
            A four-player co-op game where players explore ancient ruins, solve
            traps and puzzles that require the whole group to cooperate — without
            being able to communicate directly. Won the Pwnage Award at Gotland
            Game Conference 2011.
          </p>
          <ImageGallery
            media={[
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
            Read more about the game here:{" "}
            <a
              className="text-accent"
              href="https://game.speldesign.uu.se/projects/3d-games/adventure-league/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Adventure League
            </a>
          </p>
        </ItemLayout>
        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <div className="space-y-1 w-full">
            <h2 className="text-xl md:text-2xl text-left w-full capitalize text-accent">
              Uppsala University
            </h2>
            <p className={roleMetaClass}>{"Graphic designer | 2017-2019"}</p>
          </div>
          <p className="font-light text-xs sm:text-sm md:text-base">
            {"I was hired as a graphic designer mainly during 2017-2019 and made graphics and videos for the game development department and the Gotland Game Conference. This included graphics for the website, presskit, presentations and social media as well as printed materials like roll ups, pamphlets, lanyards, event badges, tickets, notebooks, t-shirts and posters. I also made videos for big screens, commercials and presentations."}
          </p>
          <ImageGallery
            media={[
              { type: "image", src: "/assets/ggc1.png", alt: "GGC 1" },
              { type: "image", src: "/assets/ggc4.jpg", alt: "GGC 4" },
              { type: "image", src: "/assets/ggc8.png", alt: "GGC 8" },
              { type: "image", src: "/assets/ggc10.png", alt: "GGC 10" },
              { type: "image", src: "/assets/ggc11.jpg", alt: "GGC 10" },
              { type: "image", src: "/assets/ggc12.jpg", alt: "GGC 12" },
              { type: "image", src: "/assets/ggc16.jpg", alt: "GGC 16" },
              { type: "image", src: "/assets/ggc16.png", alt: "GGC 17" },
              { type: "image", src: "/assets/ggc19.png", alt: "GGC 19" },
              { type: "image", src: "/assets/ggc20.jpg", alt: "GGC 20" },
              { type: "image", src: "/assets/ggc22.png", alt: "GGC 22" },
              { type: "image", src: "/assets/ggc23.png", alt: "GGC 23" },
              { type: "image", src: "/assets/ggc24.png", alt: "GGC 24" },
              {
                type: "video",
                src: "https://www.youtube.com/embed/CNIc5GpFTjw",
                alt: "Svenska Spel trailer",
              },

            ]}
          />
        </ItemLayout>
        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <div className="space-y-1 w-full">
            <h2 className="text-xl md:text-2xl text-left w-full capitalize text-accent">
              Swedish Game Awards
            </h2>
            <p className={roleMetaClass}>{"Video editor | 2017"}</p>
          </div>
          <p className="font-light text-xs sm:text-sm md:text-base">
            {"I was hired as a video editor for the Swedish Game Awards and created ceremony videos, sponsor presentations and social media content for the 2017 awards."}
          </p>
          <ImageGallery
            media={[
              {
                type: "video",
                src: "https://www.youtube.com/embed/4UCneRogets",
                alt: "SGA Best Art 2017",
              },
              {
                type: "video",
                src: "https://www.youtube.com/embed/K26L_iMgJfk",
                alt: "SGA Best Narrative 2017",
              },
              {
                type: "video",
                src: "https://www.youtube.com/embed/lokSsrZBFoI",
                alt: "SGA Best Game 2017",
              },
            ]}
          />
        </ItemLayout>
      </div>
    </section>
    </>
  );
};

export default WorkDetails;
