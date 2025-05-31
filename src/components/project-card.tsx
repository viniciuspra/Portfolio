"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "next-sanity";
import { useEffect, useRef } from "react";

import { Project } from "@/types/project";
import { Lang } from "@/utils/language";

interface Props {
  projects: Project[];
  lang: Lang;
}

export function ProjectCard({ projects, lang }: Props) {
  const containerRef = useRef(null);

  const isInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.25,
            delay: 0.3,
            delayChildren: 0.4,
            ease: "linear",
          },
        },
      }}
      initial="hidden"
      animate={mainControls}
      ref={containerRef}
      className="h-full w-full space-y-5 py-10 sm:px-10 lg:px-0"
    >
      {projects.map((project) => {
        const projectLink = `/${lang}/projects/${project.slug}`;

        return (
          <motion.div
            key={project._id}
            variants={{
              hidden: {
                opacity: 0,
                translateX: "100%",
                radius: "12px",
              },
              visible: {
                opacity: 1,
                translateX: 0,
                transition: {
                  ease: "easeIn",
                  duration: 0.5,
                },
              },
            }}
          >
            <Link
              href={projectLink}
              className="group flex w-full flex-col items-center gap-5 rounded-xl border p-4 transition-all duration-500 md:items-start md:border-transparent md:hover:border-foreground lg:flex-row lg:p-2"
            >
              <div className="lg:w-1/3 lg:min-w-40 lg:px-0">
                <Image
                  src={project.image}
                  width={1366}
                  height={768}
                  alt={`Representative image of ${project.name} project`}
                  className="aspect-auto rounded-lg transition-all group-hover:brightness-75"
                />
              </div>
              <div className="flex flex-col gap-5 p-5 md:w-[450px] lg:w-[560px] xl:w-[690px]">
                <h1 className="w-fit text-xl font-bold">{project.name}</h1>
                <div className="line-clamp-1 text-sm">
                  <PortableText value={project.content} />
                </div>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
