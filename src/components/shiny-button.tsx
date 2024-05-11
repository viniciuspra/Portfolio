"use client";
import React from "react";
import { motion, TargetAndTransition } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

interface InitialProperties {
  "--x": string;
  scale: number;
}

const initialProperties: InitialProperties = {
  "--x": "100%",
  scale: 1,
};

const animate = {
  "--x": "-100%",
} as TargetAndTransition;

export default function ShinyButton({ children }: Props) {
  return (
    <motion.div
      initial={{ y: 20 }}
      animate={{ y: 0 }}
      whileHover={{ scale: 0.96 }}
      transition={{
        delay: 0.5,
        ease: "easeIn",
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
      className="relative grid h-12 w-44 place-items-center before:absolute before:h-[52px] before:w-[180px] before:animate-rbg-effect before:rounded-lg before:bg-blue-500"
    >
      <motion.button
        initial={initialProperties}
        animate={animate}
        whileHover={{ scale: 0.98 }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 0.3,
          type: "spring",
          stiffness: 20,
          damping: 15,
          mass: 2,
          scale: {
            type: "spring",
            stiffness: 10,
            damping: 5,
            mass: 0.1,
          },
        }}
        className="radial-gradient relative h-full w-full rounded-md shadow-md shadow-foreground/10"
      >
        <span className="linear-mask relative flex h-full w-full items-center justify-center text-sm font-medium tracking-wide text-foreground md:text-base">
          {children}
        </span>
        <span className="linear-overlay absolute inset-0 block rounded-md p-px" />
      </motion.button>
    </motion.div>
  );
}
