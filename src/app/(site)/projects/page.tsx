import React from "react";
import { PageTitle } from "@/components/page-title";
import { getProjects, getProjectsPage } from "@/sanity/sanity-utils";
import { ProjectCard } from "@/components/project-card";

export default async function ProjectsPage() {
  const projects = await getProjects();
  const pageData = await getProjectsPage();
  return (
    <div className="flex flex-col px-5 md:px-20">
      <div className="w-full space-y-3 p-2">
        <PageTitle subtitle={pageData.description}>{pageData.title}</PageTitle>
      </div>
      <ProjectCard projects={projects} />
    </div>
  );
}
