"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface StackProps {
  image: string;
  title: string;
  side?: "left" | "right";
}

export function StackCard({ image, title, side = "left" }: StackProps) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          translateX: side === "left" ? -100 : side === "right" ? 100 : 0,
        },
        visible: { opacity: 1, translateX: 0 },
      }}
      className="flex w-full cursor-pointer items-center gap-4 rounded-md border p-3 transition-all ease-linear hover:border-foreground/80"
      title={title}
    >
      <div>
        <Image
          src={image}
          width={40}
          height={40}
          alt=""
          className="rounded-full"
        />
      </div>
      <div>
        <h2>{title}</h2>
      </div>
    </motion.div>
  );
}
