import { Github } from "lucide-react";
import Link from "next/link";
import { PortableText } from "next-sanity";

import { BackButton } from "@/components/back-button";
import { DivAnimation } from "@/components/div-animation";
import { PageTitle } from "@/components/page-title";
import { ProjectImageBorder } from "@/components/project-image-border";
import { getProject } from "@/sanity/sanity-utils";
import { ProjectParams } from "@/types/project";
import { getCurrentLanguage } from "@/utils/language";

export default async function Project({ params }: ProjectParams) {
  const slug = params.project;
  const project = await getProject(slug, getCurrentLanguage());

  return (
    <div className="mx-auto h-full max-w-4xl px-10 xl:max-w-5xl">
      <div className="h-full w-full pb-5">
        <header className="flex w-full flex-col items-start justify-between gap-3 pt-10 sm:flex-row sm:items-center md:gap-0">
          <div className="relative">
            <BackButton href="/projects" />
            <PageTitle>{project.name}</PageTitle>
          </div>
          <DivAnimation className="flex h-full items-center gap-5" x={100}>
            <Link
              href={project.url}
              target="_blank"
              className="font-medium uppercase text-gray-400 transition hover:text-primary/90 md:text-lg"
              title="View Project Website"
            >
              Ver Projeto
            </Link>
            <Link
              href={project.github}
              target="_blank"
              title="View Source Code on GitHub"
            >
              <div className="relative flex h-7 w-24 items-center justify-center rounded-lg border bg-gradient-to-r from-white to-gray-100 shadow before:absolute before:-inset-0.5 before:-z-10 before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:animate-shadow-rgb before:rounded-lg before:bg-gradient-shadow before:bg-400 before:blur-sm before:duration-300 after:absolute after:-inset-0.5 after:-z-10 after:h-[calc(100%+4px)] after:w-[calc(100%+4px)] after:animate-shadow-rgb after:rounded-lg after:bg-gradient-shadow after:bg-400 hover:bg-accent hover:before:blur-md dark:from-black dark:to-zinc-900">
                <Github className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:text-white md:h-[1.2rem] md:w-[1.2rem]" />
                <span className="sr-only">View Source Code on GitHub</span>
              </div>
            </Link>
          </DivAnimation>
        </header>
        <div className="flex h-full w-full flex-col items-center gap-5 pt-10">
          <DivAnimation
            className="leading-relaxed text-foreground/80 dark:text-slate-100/80"
            y={100}
          >
            <PortableText value={project.content} />
          </DivAnimation>

          <Link
            href={project.url}
            target="_blank"
            title="Click to open the project website in a new tab."
          >
            <DivAnimation
              className="leading-relaxed text-slate-100/80"
              y={110}
              delay={0.5}
            >
              <ProjectImageBorder image={project.image} name={project.name} />
            </DivAnimation>
          </Link>
        </div>
      </div>
    </div>
  );
}
