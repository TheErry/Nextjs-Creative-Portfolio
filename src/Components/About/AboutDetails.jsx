"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import ItemLayout from "./ItemLayout";

const FireAnimation = dynamic(() => import("./FireAnimation"), {
  ssr: false,
  loading: () => <div className="h-64 w-64" aria-hidden />,
});

const storySectionClass = "min-h-[70vh] flex items-center justify-center py-10";

const StorySection = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <section className={storySectionClass}>{children}</section>;
  }

  return (
    <motion.section
      className={storySectionClass}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: false,
        amount: 0.2,
        margin: "-30% 0px -30% 0px",
      }}
      transition={{ duration: 0.65, ease: "easeInOut" }}
    >
      {children}
    </motion.section>
  );
};

const StorySpacer = () => <div aria-hidden className="h-[18vh] shrink-0" />;

const AboutDetails = () => {
  return (
    <section className="py-20 w-full max-w-3xl mx-auto">
      <div className="flex flex-col">
        <StorySection>
          <p className="font-light text-xl sm:text-xl md:text-2xl">
            Want to hear my story? Well sit down by the fire and I’ll tell you.
          </p>
        </StorySection>
        <StorySpacer />
        <StorySection>
          <p className="font-light text-xl sm:text-base md:text-2xl">
            {"I've been building worlds since before I knew what to call it."}
            {"As a kid, I filled notebooks with characters, stories, and maps of places that didn't exist yet."}
            And honestly, not much has changed. The notebooks are digital now, and some of the worlds are still there.
          </p>
        </StorySection>
        <StorySpacer />
        <StorySection>
          <p className="font-light text-xl sm:text-base md:text-2xl">
            My own path here has never been a straight line.
            It started with game design and animation on Gotland, and then it led to film and scriptwriting in London, then later came back to game development,
            which also expanded to include programming. Code, animation, film, scripts, comics, illustrations. The medium never matters if as long as I get to create.
          </p>
        </StorySection>
        <StorySpacer />
        <StorySection>
          <p className="font-light text-xl sm:text-base md:text-2xl">
            My stories often have a very humorous foundation, with the occasional tragic gut punch. My goal is to make people laugh, make people cry,
            {"make them feel something they won't forget."}
            And a fair warning; I have a deep and slightly alarming love for unexpected endings. The kind that recontextualizes everything before them.
            {"The tragic ones especially. If I ever recommend you a film, a book, or a series... maybe keep some tissues nearby. You've been warned."}
          </p>
        </StorySection>
        <StorySpacer />
        <StorySection>
          <p className="font-light text-xl sm:text-base md:text-2xl">
            These days I work at the intersection of game development, animation, and storytelling,
            {"and with a technical toolkit that's grown considerably messier and more interesting over the years."}
            Find me by the computer, over the drawing pad, in the corner with a guitar, on a park bench with a notebook in hand,
            on the train listening to my fellow travellers’ stories. What drives me isn’t any title, it’s the love of creation.
          </p>
        </StorySection>        
        <div className="relative w-80 mx-auto">
          <FireAnimation />
        </div>
        {/*  
        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Wanna make games?
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            I am a passionate frontend developer, game developer and animator,
            blending creativity with technology to craft engaging digital
            experiences. With a strong eye for design and smooth interactions, I
            build intuitive user interfaces, immersive games, and dynamic
            animations that bring ideas to life. Whether it’s coding responsive
            web applications, developing interactive games, or animating fluid
            motion graphics, I thrive on creating visually stunning and
            functional experiences
          </p>
        </ItemLayout>
        <ItemLayout className={"lg:col-span-4 xs:col-span-6 col-span-full"}>
          <p className="font-semibold w-full text-left sm:text-5xl text-2xl text-accent flex lg:items-center md:items-center sm:items-center">
            +4{" "}
            <sub className="font-semibold text-base mx-2">
              years of experience
            </sub>
          </p>
        </ItemLayout>
        <ItemLayout className={"lg:col-span-4 xs:col-span-6 col-span-full"}>
          <p className="font-semibold w-full text-left sm:text-5xl text-2xl text-accent flex lg:items-center md:items-center sm:items-center">
            +35{" "}
            <sub className="font-semibold text-base mx-2">
              years of existence
            </sub>
          </p>
        </ItemLayout>
        <ItemLayout
          className={"col-span-full sm:col-span-full md:col-span-4 p-0!"}
        >
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=theerry&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="Erikas stats"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full md:col-span-8 p-0!"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=theerry&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="Erikas stats"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=js,html,css,ae,atom,babel,bash,blender,bootstrap,codepen,discord,docker,express,figma,firebase,gamemakerstudio,git,gitlab,heroku,ai,jenkins,kubernetes,less,linkedin,mongodb,netlify,nextjs,nodejs,npm,ps,postman,powershell,py,react,redux,stackoverflow,svg,tailwind,threejs,ts,vscode,yarn"
            alt="Erikas known programmes"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full md:col-span-6 p-0!"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-streak-stats.herokuapp.com?user=theerry&theme=dark&hide_border=true&type=svg&background=762A2A00&ring-3=FEFE5B"
            alt="Erikas streaks stats"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full md:col-span-6"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/pin/?username=theerry&repo=snake_pygame&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="Erikas known programmes"
            loading="lazy"
          />
        </ItemLayout>
        */}
      </div>
    </section>
  );
};

export default AboutDetails;
