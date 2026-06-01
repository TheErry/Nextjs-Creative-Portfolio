"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const AboutScrollGradient = () => {
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.45, 0.7], [1, 0.75, 0.65, 0.50]);

  return (
    <motion.div
      aria-hidden
      style={{ opacity }}
      className="pointer-events-none fixed inset-0 -z-40 bg-gradient-to-b from-black/100 via-black/80 to-black/50"
    />
  );
};

export default AboutScrollGradient;
