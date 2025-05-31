import type { Metadata } from "next";
import React from "react";

import { PageTitle } from "@/components/page-title";
import { ProjectCard } from "@/components/project-card";
import { fetchProjectsData } from "@/sanity/sanity-utils";
import { Project, ProjectPage } from "@/types/project";
import { Lang } from "@/utils/language";

type Props = {
  params: { lang: Lang };
};

export async function generateMetadata({
  params: { lang },
}: Props): Promise<Metadata> {
  const { projectsPage }: { projectsPage: ProjectPage | null } =
    await fetchProjectsData(lang);

  const title =
    projectsPage?.title ?? (lang === "pt" ? "Projetos" : "Projects");
  const description =
    projectsPage?.description ??
    (lang === "pt" ? "Explore meus projetos." : "Explore my projects.");

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: `https://portfolio-viniciuspra.vercel.app/${lang}/projects`,
      locale: lang === "pt" ? "pt_BR" : "en_US",
    },
  };
}

export default async function ProjectsPage({ params: { lang } }: Props) {
  const {
    projectsPage,
    projects,
  }: { projectsPage: ProjectPage | null; projects: Project[] | null } =
    await fetchProjectsData(lang);

  if (!projectsPage || !projects) {
    return (
      <div className="flex flex-col px-5 md:px-20">
        <PageTitle
          subtitle={
            lang === "pt"
              ? "Não foi possível carregar os dados dos projetos."
              : "Could not load project data."
          }
        >
          {lang === "pt" ? "Projetos" : "Projects"}
        </PageTitle>
      </div>
    );
  }

  return (
    <div className="flex flex-col px-5 md:px-20">
      <div className="w-full space-y-3 p-2">
        <PageTitle subtitle={projectsPage.description}>
          {projectsPage.title}
        </PageTitle>
      </div>
      {projects.length > 0 && <ProjectCard projects={projects} lang={lang} />}
      {projects.length === 0 && (
        <p className="py-10 text-center text-muted-foreground">
          {lang === "pt" ? "Nenhum projeto encontrado." : "No projects found."}
        </p>
      )}
    </div>
  );
}
