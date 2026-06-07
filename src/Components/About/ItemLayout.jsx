"use client";
import clsx from "clsx";
import React from "react";
import { motion } from "framer-motion";

const ItemLayout = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={clsx(
        "w-full custom-bg-no-shadow p-6 sm:p-8 rounded-xl flex items-center justify-center space-y-8 text-foreground",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default ItemLayout;
