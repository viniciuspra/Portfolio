import { PortableTextBlock } from "sanity";

type ProjectPage = {
  _id: string;
  title: string;
  description: string;
  _createdAt: Date;
};

type Project = {
  _id: string;
  title: string;
  description: string;
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

export type { Project, ProjectParams, ProjectPage };
