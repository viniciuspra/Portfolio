import { PortableTextBlock } from "sanity";

type Project = {
  _id: string;
  name: string;
  subtitle: string;
  url: string;
  github: string;
  slug: string;
  _createdAt: Date;
  image: string;
  content: PortableTextBlock[];
};

type ProjectParams = {
  params: { project: string };
};

export type { Project, ProjectParams };
