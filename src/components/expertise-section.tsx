"use client";
import React, { useEffect, useRef } from "react";
import { Service } from "@/types/home";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { ContactForm } from "./contact-form";

interface Props {
  slogan: string;
  services: Service[];
}

export function ExpertiseSection({ services, slogan }: Props) {
  const containerRef = useRef(null);

  const isInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div className="flex flex-col items-center gap-10 overflow-y-hidden px-10 pt-8">
      <div className="flex w-2/3 flex-wrap px-5 sm:px-10">
        <motion.h2
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, ease: "easeIn" }}
          className="track px-20 text-center text-lg font-extrabold leading-tight -tracking-wide opacity-90 md:px-0 md:text-xl lg:text-2xl xl:text-3xl"
        >
          {slogan}
        </motion.h2>
      </div>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.25,
              delay: 0.3,
              delayChildren: 0.3,
            },
          },
        }}
        initial="hidden"
        animate={mainControls}
        ref={containerRef}
        className="space-y-7 px-5"
      >
        {services.map((service) => (
          <motion.div
            key={service._key}
            variants={{
              hidden: { opacity: 0, translateX: -100 },
              visible: { opacity: 1, translateX: 0 },
            }}
            className="relative mx-auto grid h-[200px] w-[300px] cursor-pointer place-items-center rounded-lg border bg-background before:absolute before:-z-10 before:h-[165px] before:rounded-xl hover:before:transition-all sm:h-[165px] sm:w-[450px] md:w-[650px] md:before:w-[650px] md:before:animate-rbg-effect md:hover:before:h-[172px] md:hover:before:w-[657px] md:hover:before:bg-blue-500 lg:w-[750px] lg:before:w-[750px] lg:hover:before:w-[757px] xl:w-[800px] xl:before:w-[800px] xl:hover:before:w-[807px]"
          >
            <div className="flex h-full w-full flex-col items-start justify-center gap-1.5 px-6">
              <div className="space-y-1">
                <Image src={service.image} width={24} height={24} alt="" />
                <h3 className="font-bold opacity-95">{service.title}</h3>
              </div>
              <p className="text-justify text-muted-foreground/80">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}

        <ContactForm />
      </motion.div>
    </motion.div>
  );
}
