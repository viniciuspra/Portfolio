"use client";

import { motion } from "framer-motion";

interface DivAnimationProps {
  children: React.ReactNode;
  className?: string;
  x?: number;
  y?: number;
  delay?: number;
  ChildrenAnimation?: boolean;
}

export function DivAnimation({
  children,
  x,
  y,
  className,
  delay = 0.3,
  ChildrenAnimation = false,
}: DivAnimationProps) {
  const ChildrenVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delay: 0.3,
        delayChildren: 0.3,
      },
    },
  };

  const DefaultVariant = {
    hidden: { opacity: 0, y, x },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.3, ease: "easeIn", delay },
    },
  };
  return (
    <motion.div
      variants={ChildrenAnimation ? ChildrenVariant : DefaultVariant}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {children}
    </motion.div>
  );
}
