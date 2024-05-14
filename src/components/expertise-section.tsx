"use client";
import React, { useEffect, useRef } from "react";
import { Service } from "@/types/home";
import { motion, useAnimation, useInView } from "framer-motion";
import { ContactForm } from "./contact-form";
import { ServicesCard } from "./services-card";

interface Props {
  slogan: string;
  services: Service[];
  formTitle: string;
  form: {
    name: string;
    email: string;
    message: string;
    button: string;
  };
}

export function ExpertiseSection({ services, slogan, formTitle, form }: Props) {
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
      <div className="flex min-w-fit flex-wrap justify-center text-wrap sm:px-10 lg:min-w-0 2xl:w-4/5">
        <motion.h2
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, ease: "easeIn" }}
          className="text-center text-lg font-extrabold leading-tight -tracking-wide opacity-90 md:px-20 md:text-xl lg:text-2xl xl:text-3xl"
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
          <React.Fragment key={service._key}>
            <ServicesCard
              title={service.title}
              description={service.description}
              image={service.image}
            />
          </React.Fragment>
        ))}
        <div className="pt-8">
          <motion.h1
            variants={{
              hidden: { opacity: 0, translateY: 100 },
              visible: {
                opacity: 1,
                translateY: 0,
                transition: { ease: "linear" },
              },
            }}
            className="w-full text-center text-4xl font-bold text-slate-950/80 dark:text-primary/95"
          >
            {formTitle}
          </motion.h1>
          <motion.div
            variants={{
              hidden: { opacity: 0, translateY: 100 },
              visible: {
                opacity: 1,
                translateY: 0,
                transition: { ease: "linear" },
              },
            }}
          >
            <ContactForm form={form} />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
