import { Github } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { PortableText } from "next-sanity";
import React from "react";

import { BackButton } from "@/components/back-button";
import { DivAnimation } from "@/components/div-animation";
import { PageTitle } from "@/components/page-title";
import { ProjectImageBorder } from "@/components/project-image-border";
import { getProject } from "@/sanity/sanity-utils";
import { Project } from "@/types/project";
import { Lang } from "@/utils/language";

type Props = {
  params: { lang: Lang; project: string };
};

export async function generateMetadata({
  params: { lang, project: slug },
}: Props): Promise<Metadata> {
  const projectData: Project | null = await getProject(slug, lang);

  const title =
    projectData?.name ??
    (lang === "pt" ? "Detalhes do Projeto" : "Project Details");
  const description =
    projectData?.subtitle ??
    (lang === "pt"
      ? `Detalhes sobre o projeto ${projectData?.name ?? slug}`
      : `Details about the ${projectData?.name ?? slug} project`);

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: `https://portfolio-viniciuspra.vercel.app/${lang}/projects/${slug}`,
      locale: lang === "pt" ? "pt_BR" : "en_US",
      images: projectData?.image ? [{ url: projectData.image }] : [],
    },
  };
}

export default async function ProjectPage({
  params: { lang, project: slug },
}: Props) {
  const projectData = await getProject(slug, lang);

  if (!projectData) {
    return (
      <div className="mx-auto h-full max-w-4xl px-10 xl:max-w-5xl">
        <div className="h-full w-full pb-5 pt-10">
          <BackButton href={`/${lang}/projects`} />
          <p className="mt-4 text-center text-muted-foreground">
            {lang === "pt" ? "Projeto não encontrado." : "Project not found."}
          </p>
        </div>
      </div>
    );
  }

  const projectsLink = `/${lang}/projects`;
  const viewProjectText = lang === "pt" ? "Ver Projeto" : "View Project";

  return (
    <div className="mx-auto h-full max-w-4xl px-10 xl:max-w-5xl">
      <div className="h-full w-full pb-5">
        <header className="flex w-full flex-col items-start justify-between gap-3 pt-10 sm:flex-row sm:items-center md:gap-0">
          <div className="relative">
            <BackButton href={projectsLink} />
            <PageTitle>{projectData.name}</PageTitle>
          </div>
          <DivAnimation className="flex h-full items-center gap-5" x={100}>
            {projectData.url && (
              <Link
                href={projectData.url}
                target="_blank"
                className="font-medium uppercase text-gray-400 transition hover:text-primary/90 md:text-lg"
                title={viewProjectText}
              >
                {viewProjectText}
              </Link>
            )}
            {projectData.github && (
              <Link
                href={projectData.github}
                target="_blank"
                title="View Source Code on GitHub"
              >
                <div className="relative flex h-7 w-24 items-center justify-center rounded-lg border bg-gradient-to-r from-white to-gray-100 shadow before:absolute before:-inset-0.5 before:-z-10 before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:animate-shadow-rgb before:rounded-lg before:bg-gradient-shadow before:bg-400 before:blur-sm before:duration-300 after:absolute after:-inset-0.5 after:-z-10 after:h-[calc(100%+4px)] after:w-[calc(100%+4px)] after:animate-shadow-rgb after:rounded-lg after:bg-gradient-shadow after:bg-400 hover:bg-accent hover:before:blur-md dark:from-black dark:to-zinc-900">
                  <Github className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:text-white md:h-[1.2rem] md:w-[1.2rem]" />
                  <span className="sr-only">View Source Code on GitHub</span>
                </div>
              </Link>
            )}
          </DivAnimation>
        </header>
        <div className="flex h-full w-full flex-col items-center gap-5 pt-10">
          {projectData.content && (
            <DivAnimation
              className="prose prose-lg dark:prose-invert max-w-none leading-relaxed text-foreground/80 dark:text-slate-100/80"
              y={100}
            >
              <PortableText value={projectData.content} />
            </DivAnimation>
          )}
          {projectData.image && projectData.url && (
            <Link
              href={projectData.url}
              target="_blank"
              title="Click to open the project website in a new tab."
            >
              <DivAnimation
                className="leading-relaxed text-slate-100/80"
                y={110}
                delay={0.5}
              >
                <ProjectImageBorder
                  image={projectData.image}
                  name={projectData.name}
                />
              </DivAnimation>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
