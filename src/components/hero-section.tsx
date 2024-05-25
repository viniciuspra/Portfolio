"use client";
import { motion } from "framer-motion";
import { PortableText } from "next-sanity";
import React from "react";

import { Home } from "@/types/home";

import ShinyButton from "./shiny-button";

const divVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
    },
  },
};

type HeroProps = {
  data: Home;
};

export function HeroSection({ data }: HeroProps) {
  if (!data || !data.title) {
    return null;
  }

  return (
    <motion.div
      variants={divVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center gap-2 px-5 text-center"
    >
      <motion.h1
        variants={{
          hidden: {
            y: -100,
          },
          visible: {
            y: 0,
            transition: {
              duration: 1,
              ease: "easeIn",
            },
          },
        }}
        className="mx-auto text-3xl font-extrabold leading-tight -tracking-wide text-slate-700 dark:text-blue-100/95 md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
      >
        {data.title.split(" ").map((word, index, array) => (
          <React.Fragment key={index}>
            {word}
            {index < array.length - 1 && index === 1 && <br />}
            {index < array.length - 1 && " "}
            {index < array.length - 1 && index === 4 && <br />}
            {index < array.length - 1 && " "}
          </React.Fragment>
        ))}
      </motion.h1>

      <motion.div
        variants={{
          hidden: {
            y: 20,
          },
          visible: {
            y: 0,
            transition: {
              duration: 1,
              ease: "easeIn",
            },
          },
        }}
        className="pt-3 text-sm font-medium text-slate-900/70 dark:text-blue-50/80 md:text-base"
      >
        <PortableText value={data.position} />
      </motion.div>
      <motion.p
        variants={{
          hidden: {
            y: 25,
          },
          visible: {
            y: 0,
            transition: {
              duration: 1,
              ease: "easeIn",
            },
          },
        }}
        className="flex-wrap pb-3 text-sm font-medium text-slate-900/70 dark:text-blue-50/60 md:text-base"
      >
        {data.specialization}
      </motion.p>
      <ShinyButton href="/contact">{data.buttonText}</ShinyButton>
    </motion.div>
  );
}
