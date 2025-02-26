"use client";
import React from "react";
import { BtnList } from "../../app/data";
import NavButton from "./NavButton";
import useScreenSize from "../Hooks/useScreenSize";
import ResponsiveComponent from "../ResponsiveComponent";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const Navigation = () => {
  const angleIncrement = 360 / BtnList.length;

  const size = useScreenSize();

  const isLargeScreen = size > 1024;
  const isMediumScreen = size > 768 && size <= 1024;

  return (
    <div className="w-full fixed h-screen flex items-center justify-center">
      <ResponsiveComponent>
        {({ size }) => {
          return size && size >= 480 ? (
            <motion.div
              variants={container}
              initial={"hidden"}
              animate={"show"}
              className="w-max flex items-center justify-center relative animate-spin-slow hover:pause group"
            >
              {BtnList.map((btn, index) => {
                const angleRad = (angleIncrement * index * Math.PI) / 180;
                const radius = isLargeScreen
                  ? "calc(20vw - 1rem)"
                  : isMediumScreen
                  ? "calc(30vw - 1rem)"
                  : "calc(40vw - 1rem)";
                const x = `calc(${radius} * ${Math.cos(angleRad)})`;
                const y = `calc(${radius} * ${Math.sin(angleRad)})`;

                return <NavButton key={btn.label} x={x} y={y} {...btn} />;
              })}
            </motion.div>
          ) : (
            <>
              <motion.div
                variants={container}
                initial={"hidden"}
                animate={"show"}
                className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col items-start xs:items-center justify-center relative group space-y-4"
              >
                {BtnList.slice(0, BtnList.length / 2).map((btn) => {
                  return <NavButton key={btn.label} x={0} y={0} {...btn} />;
                })}
              </motion.div>
              <motion.div
                variants={container}
                initial={"hidden"}
                animate={"show"}
                className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col items-end xs:items-center justify-center relative group space-y-4"
              >
                {BtnList.slice(BtnList.length / 2, BtnList.length).map(
                  (btn) => {
                    return (
                      <NavButton
                        key={btn.label}
                        x={0}
                        y={0}
                        {...btn}
                        labelDirection="left"
                      />
                    );
                  }
                )}
              </motion.div>
            </>
          );
        }}
      </ResponsiveComponent>
    </div>
  );
};

export default Navigation;
