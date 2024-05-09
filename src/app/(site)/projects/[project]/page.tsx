import { PortableText } from "next-sanity";
import { getProject } from "@/sanity/sanity-utils";

import { ProjectParams } from "@/types/project";
import Link from "next/link";
import { ProjectImageBorder } from "@/components/project-image-border";
import { PageTitle } from "@/components/page-title";
import { ArrowLeft, Github } from "lucide-react";
import { Button } from "@/components/button";

export default async function Project({ params }: ProjectParams) {
  const slug = params.project;
  const project = await getProject(slug);
  return (
    <div className="mx-auto h-full max-w-4xl px-10 xl:max-w-5xl">
      <div className="h-full w-full pb-5">
        <header className="flex w-full flex-col items-start justify-between gap-3 sm:flex-row sm:items-center md:gap-0">
          <div className="relative">
            <Button variant="link" className="hover absolute -left-4 -top-12">
              <ArrowLeft className="underline" size={20} /> Back
            </Button>
            <PageTitle>{project.name}</PageTitle>
          </div>
          <div className="flex h-full items-center gap-5">
            <Link
              href={project.url}
              target="_blank"
              className="font-medium uppercase text-gray-400 transition hover:text-primary/90 md:text-lg"
              title="View Project Website"
            >
              View Project
            </Link>
            <Link
              href={project.github}
              target="_blank"
              title="View Source Code on GitHub"
            >
              <div className="relative flex h-7 w-24 items-center justify-center rounded-lg border bg-gradient-to-r from-black to-zinc-900 shadow before:absolute before:-inset-0.5 before:-z-10 before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:animate-shadow-rgb before:rounded-lg before:bg-gradient-shadow before:bg-400 before:blur-sm before:duration-300 after:absolute after:-inset-0.5 after:-z-10 after:h-[calc(100%+4px)] after:w-[calc(100%+4px)] after:animate-shadow-rgb after:rounded-lg after:bg-gradient-shadow after:bg-400 hover:bg-accent hover:before:blur-md">
                <Github className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all md:h-[1.2rem] md:w-[1.2rem]" />
                <span className="sr-only">View Source Code on GitHub</span>
              </div>
            </Link>
          </div>
        </header>
        <div className="flex h-full w-full flex-col items-center gap-5 pt-10">
          <div className="leading-relaxed text-slate-100/80">
            <PortableText value={project.content} />
          </div>
          <Link
            href={project.url}
            target="_blank"
            title="Click to open the project website in a new tab."
          >
            <ProjectImageBorder image={project.image} name={project.name} />
          </Link>
        </div>
      </div>
    </div>
  );
}
