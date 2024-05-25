"use client";

import React, { useEffect, useState } from "react";

import { Loading } from "@/components/loading";
import { PageTitle } from "@/components/page-title";
import { ProjectCard } from "@/components/project-card";
import { fetchProjectsData } from "@/sanity/sanity-utils";
import { Project, ProjectPage } from "@/types/project";
import { getCurrentLanguage, Lang } from "@/utils/language";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [projectsPage, setProjectsPage] = useState<ProjectPage | undefined>(
    undefined,
  );
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (language: Lang) => {
    try {
      setIsLoading(true);
      const cachedData = localStorage.getItem(`projectsData-${language}`);
      if (cachedData) {
        const parsedData = JSON.parse(cachedData);
        setProjectsPage(parsedData.projectsPage);
        setProjects(parsedData.projects);
        setIsLoading(false);
        const { projectsPage: newProjectsPage, projects: newProjects } =
          await fetchProjectsData(language);
        if (
          JSON.stringify(parsedData.projectsPage) !==
            JSON.stringify(newProjectsPage) ||
          JSON.stringify(parsedData.projects) !== JSON.stringify(newProjects)
        ) {
          setProjectsPage(newProjectsPage);
          setProjects(newProjects);
          localStorage.setItem(
            `projectsData-${language}`,
            JSON.stringify({
              pageData: newProjectsPage,
              projects: newProjects,
            }),
          );
        }
        return;
      }
      const { projectsPage, projects } = await fetchProjectsData(language);
      setProjectsPage(projectsPage);
      setProjects(projects);
      localStorage.setItem(
        `projectsData-${language}`,
        JSON.stringify({ projectsPage, projects }),
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(getCurrentLanguage());
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (!projectsPage || !projects) {
    return;
  }

  return (
    <div className="flex flex-col px-5 md:px-20">
      <div className="w-full space-y-3 p-2">
        {projectsPage ? (
          <PageTitle subtitle={projectsPage.description}>
            {projectsPage.title}
          </PageTitle>
        ) : (
          <Loading />
        )}
      </div>
      {projects.length > 0 && <ProjectCard projects={projects} />}
    </div>
  );
}
