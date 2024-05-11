import { motion } from "framer-motion";

const svgIconVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(59, 130, 246,0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(59, 130, 246,1)",
  },
};

export function RocketSvgAnimated() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="rgb(59 130 246)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <motion.path
        d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
        variants={svgIconVariants}
        initial="hidden"
        animate="visible"
        transition={{
          fill: {
            duration: 1,
            ease: "easeIn",
          },
          default: {
            duration: 1,
            ease: "easeInOut",
          },
        }}
      />
      <motion.path
        d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"
        variants={svgIconVariants}
        initial="hidden"
        animate="visible"
        transition={{
          fill: {
            duration: 1,
            ease: "easeIn",
          },
          default: {
            duration: 1,
            ease: "easeInOut",
          },
        }}
      />
      <motion.path
        d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"
        variants={svgIconVariants}
        initial="hidden"
        animate="visible"
        transition={{
          fill: {
            duration: 1,
            ease: "easeIn",
          },
          default: {
            duration: 1,
            ease: "easeInOut",
          },
        }}
      />
      <motion.path
        d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"
        variants={svgIconVariants}
        initial="hidden"
        animate="visible"
        transition={{
          fill: {
            duration: 1,
            ease: "easeIn",
          },
          default: {
            duration: 1,
            ease: "easeInOut",
          },
        }}
      />
    </motion.svg>
  );
}
