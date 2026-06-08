"use client";

import React from "react";
import ItemLayout from "@/Components/About/ItemLayout";
import ImageGallery from "@/Components/Work/ImageGallery";

const roleMetaClass = "font-semibold text-xs sm:text-sm md:text-base";

const ComingDetails = () => {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-40 bg-black/40"
      />
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
            <div className="space-y-1 w-full">
              <h2 className="text-xl md:text-2xl text-left w-full capitalize text-accent">
                Wanderkin
              </h2>
              <p className={roleMetaClass}>
              {"Game · In early development"}
            </p>
            </div>
            <p className="font-light text-xs sm:text-sm md:text-base">
              {"Wanderkin is a web-based multiplayer RPG with focus on social and relaxing gaming. As a player, you’ll gather resources, complete quests, fight mobs, trade and build villages and cities together with other players. You’re free to customize your character with the clothes and hairstyles you get and decorate your house. If you don’t like the place you’re currently living at or perhaps want to explore a new area or start your own village, feel free to pull your house up and move it somewhere else. You can also be a part of village and city-based events with all the other villagers, to work toward a common goal."}
            </p>
            <p className="font-light text-xs sm:text-sm md:text-base">
              {"This is the first game I’m making as a solo developer and will be completely free to play on the web and with 2D graphics. A love letter to Club Penguin, RuneScape and the games we grew up with and the kind of game you log into just to hang out."}
            </p>
            <p className="font-light text-xs sm:text-sm md:text-base">
              {"It’s still in early development but a very first development video is available below."}
            </p>
            <ImageGallery
              media={[
                {
                  type: "video",
                  src: "https://www.youtube.com/embed/NWZd1Kl_U2A",
                  alt: "Wanderkin first look",
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
                Whatever Remains
              </h2>
              <p className={roleMetaClass}>
              {"Graphic novel · In early development"}
            </p>
            </div>
            <p className="font-light text-xs sm:text-sm md:text-base">
              {"A story about rock music, chasing fame, finding stability and the things people leave behind."}
            </p>
            <p className="font-light text-xs sm:text-sm md:text-base">
              {"Regina “Reggie” Voss is a freelance metal guitarist with a complicated past and a fiercely independent streak. Magnus Tapio is a legendary guitarist who has been quietly stepping back from the spotlight, for reasons he would rather not explain. They keep crossing paths at venues across Europe. Then one night, they don't part ways."}
            </p>
            <p className="font-light text-xs sm:text-sm md:text-base">
              {"Whatever Remains follows their relationship across decades; through music, loss, and the kind of love that doesn't always know how to say itself out loud. It has humour on the surface and something much heavier underneath. The kind of story where you laugh, and then the laugh catches in your throat."}
            </p>
            <p className="font-light text-xs sm:text-sm md:text-base">
              {"Planned to be a printed graphic novel as well as posted online."}
            </p>
            <ImageGallery
              media={[
                { type: "image", src: "/assets/reggie1.PNG", alt: "Regina Voss sheet 1" },
                { type: "image", src: "/assets/reggie2.PNG", alt: "Regina Voss sheet 2" },
                { type: "image", src: "/assets/magnus1.PNG", alt: "Magnus Tapio sheet 1" },
                { type: "image", src: "/assets/magnus2.PNG", alt: "Magnus Tapio sheet 2" },
                { type: "image", src: "/assets/tobi.PNG", alt: "Tobi sheet" },
                { type: "image", src: "/assets/tommy.PNG", alt: "Tommy sheet" },
                { type: "image", src: "/assets/kingmaker.PNG", alt: "Kingmaker sheet" },
                { type: "image", src: "/assets/wrongcrowd.PNG", alt: "Wrong Crowd sheet" },
                { type: "image", src: "/assets/stormfall.PNG", alt: "Stormfall sheet" },

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
                Kipanya
              </h2>
              <p className={roleMetaClass}>
              {"Graphic novel · In development"}
            </p>
            </div>
            <p className="font-light text-xs sm:text-sm md:text-base">
              {"Kipanya is a classic hero story where we’re following the little mouse Nuru on her journey to save her clan and find out what happened to her older brother Moto. She must fight through hordes of mysterious zombie-mice, feral cats and rival critters while gathering a group of friends to help along the way, and to finally solve the mystery of what is happening to the world she once knew. With her father’s swords on her side and stories about the legendary warrior forged in fire she goes on a journey no mouse would ever forget."}
            </p>
            <p className="font-light text-xs sm:text-sm md:text-base">
              {"I started this years ago as a project to make a printed graphic novel. It has been postponed for a bit, but I'm planning to pick it up soon again."}
            </p>
            <ImageGallery
              media={[
                { type: "image", src: "/assets/kipanya1.jpg", alt: "Kipanya sheet 1" },
                { type: "image", src: "/assets/kipanya2.png", alt: "Kipanya sheet 2" },
                { type: "image", src: "/assets/kipanya3.jpg", alt: "Kipanya sheet 3" },
                { type: "image", src: "/assets/kipanya4.png", alt: "Kipanya sheet 4" },
                { type: "image", src: "/assets/kipanya5.jpg", alt: "Kipanya sheet 5" },
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
                Germicide
              </h2>
              <p className={roleMetaClass}>
              {"Game · In early development"}
            </p>
            </div>
            <p className="font-light text-xs sm:text-sm md:text-base">
              {"A mobile game that mixes rhythm with bullet hell. You, a germ that has flown from the dance floor into the nose of a DJ in full action now needs to dodge the waves of white blood cells that will eliminate you with one touch. So follow the rhythm, find the patterns and get your groove on and see just how long you can survive."}
            </p>
            <p className="font-light text-xs sm:text-sm md:text-base">
              {"It’s still in early development but a very first development video of how the gameplay will look like is available below."}
            </p>
            <ImageGallery
              media={[
                {
                  type: "video",
                  src: "https://www.youtube.com/embed/csvfe6ilYCM/",
                  alt: "Germicide first look",
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
                Pitches
              </h2>
            </div>
            <div>
            <p className={roleMetaClass}>
              {"Dear Deer"}
            </p>
            <p className="font-light text-xs sm:text-sm md:text-base">
              {"A deer simulator where you live your life as a deer, facing the challanges of nature and humans while trying to live your life in peace. Live your life in the best way you can while nature does what it always do. Similar feeling to Firewatch, but you're a deer."}
            </p>
            </div>
            <div>
            <p className={roleMetaClass}>
              {"Roaches"}
            </p>
            <p className="font-light text-xs sm:text-sm md:text-base">
              {"Have you ever wondered what it would be like to be a roach? No? Perhaps you should. Gather your roach friends around the house and throw your best roach party while the environment quietly tells the real story."}
            </p>
            </div>
          </ItemLayout>
        </div>
      </section>
    </>
  );
};

export default ComingDetails;
