"use client";
import { useRef, useEffect } from "react";
import { useInView, useAnimation } from "framer-motion";
import { Project } from "@/types/project";

import Image from "next/image";
import { PortableText } from "next-sanity";
import Link from "next/link";

interface Props {
  projects: Project[];
}

export function ProjectCard({ projects }: Props) {
  const containerRef = useRef(null);

  const isInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div
      className="w-full space-y-5 py-10 sm:px-10 lg:px-0"
      suppressHydrationWarning
    >
      {projects.map((project) => (
        <Link href={`/projects/${project.slug}`} key={project._id}>
          <div className="group flex w-full flex-col items-center gap-5 rounded-xl border p-4 transition-all duration-500 md:items-start md:border-transparent md:hover:border-foreground lg:flex-row lg:p-2">
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
          </div>
        </Link>
      ))}
    </div>
  );
}
