"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  subtitle?: string;
}

export function PageTitle({ children, subtitle = "" }: Props) {
  return (
    <div className={`${subtitle.trim() !== "" && "w-full space-y-3 py-2"}`}>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.3, ease: "easeIn", delay: 0.3 },
        }}
        className="text-3xl font-bold leading-tight -tracking-wider text-slate-700 dark:text-blue-100/95 md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
      >
        {children}
      </motion.h1>
      {subtitle.trim() !== "" && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, ease: "easeIn", delay: 0.55 },
          }}
          className="text-foreground/80"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
