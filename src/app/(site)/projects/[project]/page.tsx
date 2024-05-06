import { PortableText } from "next-sanity";
import { getProject } from "@/sanity/sanity-utils";

import { ProjectParams } from "@/types/project";
import Image from "next/image";
import Link from "next/link";

export default async function Project({ params }: ProjectParams) {
  const slug = params.project;
  const project = await getProject(slug);
  return (
    <div className="mx-auto h-screen max-w-7xl">
      <div className="h-full w-full py-5">
        <header className="flex w-full items-center justify-between">
          <h1 className="w-fit bg-gradient-to-r from-yellow-500 via-red-500 to-purple-500 bg-clip-text text-6xl font-extrabold text-transparent">
            {project.name}
          </h1>
          <Link
            href={project.url}
            target="_blank"
            className="text-lg font-medium uppercase text-gray-400 transition hover:text-white"
          >
            Ver Projeto
          </Link>
        </header>
        <div className="grid h-full w-full grid-cols-2 items-center justify-center gap-5 py-10">
          <Image
            src={project.image}
            width={1366}
            height={768}
            alt=""
            priority
            className="rounded-lg border-2 border-gray-400"
          />
          <div className="px-10 leading-relaxed">
            <PortableText value={project.content} />
          </div>
        </div>
      </div>
    </div>
  );
}
