"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface ServiceProps {
  title: string;
  description: string;
  image: string;
  price?: string;
}
export function ServicesCard({
  description,
  title,
  image,
  price,
}: ServiceProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, translateX: -100 },
        visible: { opacity: 1, translateX: 0 },
      }}
      className="group relative mx-auto grid h-fit w-full cursor-pointer place-items-center rounded-lg border bg-background py-5 before:absolute before:-z-10 before:h-[165px] before:rounded-xl hover:before:h-[calc(100%+10px)] hover:before:w-[calc(100%+10px)] hover:before:transition-all sm:h-[200px] sm:w-full sm:py-0 md:w-[650px] md:before:w-[650px] md:before:animate-rbg-effect md:hover:before:bg-blue-500 lg:w-[750px] lg:before:w-[750px] xl:w-[800px]"
    >
      <div className="flex h-full w-full flex-col items-start justify-center gap-1.5 px-6">
        <div className="space-y-2">
          {price ? (
            <div className="flex items-center gap-4">
              <Image src={image} width={30} height={30} alt="" />
              <span className="rounded-md border bg-accent p-0.5 px-2 text-foreground/80 transition-all group-hover:text-foreground">
                {price}
              </span>
            </div>
          ) : (
            <Image src={image} width={24} height={24} alt="" />
          )}

          <h3 className="font-bold opacity-95">{title}</h3>
        </div>
        <p className="text-justify text-muted-foreground/80">{description}</p>
      </div>
    </motion.div>
  );
}
