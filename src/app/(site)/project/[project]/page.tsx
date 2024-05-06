import { PortableText } from "next-sanity";
import { getProject } from "@/sanity/sanity-utils";

import { ProjectParams } from "@/types/project";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeftCircle } from "lucide-react";

export default async function Project({ params }: ProjectParams) {
  const slug = params.project;
  const project = await getProject(slug);
  return (
    <div className="max-w-7xl mx-auto h-screen">
      <div className="w-full h-full py-5">
        <header className="w-full flex items-center justify-between">
          <h1 className="text-6xl font-extrabold bg-gradient-to-r from-yellow-500 via-red-500 to-purple-500 bg-clip-text text-transparent w-fit">
            {project.name}
          </h1>
          <Link
            href={project.url}
            target="_blank"
            className="text-lg text-gray-400 hover:text-white transition font-medium uppercase"
          >
            Ver Projeto
          </Link>
        </header>
        <div className="w-full h-full grid grid-cols-2 items-center justify-center gap-5 py-10">
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
