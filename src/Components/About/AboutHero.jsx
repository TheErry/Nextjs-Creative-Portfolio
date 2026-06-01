"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AboutHero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.7], [0, -40]);

  return (
    <div
      ref={ref}
      className="relative w-full h-screen flex flex-col items-center justify-center"
    >
      <motion.div
        style={{ opacity, y }}
        className="flex flex-col items-center justify-center text-center px-2 sm:px-4"
      >
        <h1 className="font-bold text-6xl text-accent xs:text-7xl sm:text-8xl lg:text-9xl">
          Erika A. Porath
        </h1>
        <p className="font-light text-foreground text-xl md:text-4xl">
          Game developer, animator, artist, and storyteller
        </p>
      </motion.div>
    </div>
  );
};

export default AboutHero;
