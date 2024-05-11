import React from "react";
import { PageTitle } from "@/components/page-title";
import { getProjects } from "@/sanity/sanity-utils";
import { ProjectCard } from "@/components/project-card";
export default async function ProjectsPage() {
  const projects = await getProjects();
  return (
    <div className="flex flex-col px-5 md:px-20">
      <div className="w-full space-y-3 p-2">
        <PageTitle subtitle="Explore a selection of my personal projects.">
          Personal Projects
        </PageTitle>
      </div>
      <ProjectCard projects={projects} />
    </div>
  );
}
