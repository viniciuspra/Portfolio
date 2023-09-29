import { ReactNode } from "react";

import { transition } from "@/utils/transition";
import { reveal } from "@/utils/variants";

import { motion } from "framer-motion";

interface RevealProps {
  children: ReactNode;
}

export function Reveal({ children }: RevealProps) {
  return (
    <div className="relative">
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={transition()}
      >
        {children}
      </motion.div>
      <motion.div
        variants={reveal()}
        initial="hidden"
        transition={{ duration: 0.7, ease: "easeIn" }}
        whileInView="visible"
        viewport={{ once: false }}
        className="absolute inset-0 bg-secondary z-10"
      ></motion.div>
    </div>
  );
}
