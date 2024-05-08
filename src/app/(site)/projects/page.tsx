import { getProjects } from "@/sanity/sanity-utils";
import project from "@/sanity/schemas/project-schema";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

export default async function ProjectsPage() {
  const projects = await getProjects();
  return (
    <div className="flex h-full flex-col items-center gap-20 py-20 lg:ml-64">
      <div>
        <h1>Projects</h1>
        <p>Explore a selection of my projects.</p>
      </div>
      <div className="grid gap-3">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="group flex w-[800px] gap-5 rounded-xl border border-transparent p-2 transition-all duration-500 hover:border-foreground"
          >
            <div>
              <Image
                src="https://cdn.sanity.io/images/8gvk3yjk/production/13ff6b0d8539d4cb3245b9b8e4f4114787bfe1aa-1366x768.png"
                width={300}
                height={300}
                alt=""
                className="rounded-lg transition-all group-hover:brightness-75"
              />
            </div>
            <div>
              <h1>{project.name}</h1>
              <div className="text-sm">
                <PortableText value={project.content} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
