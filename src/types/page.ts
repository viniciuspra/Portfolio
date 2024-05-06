import { PortableTextBlock } from "next-sanity";

type Page = {
  _id: string;
  title: string;
  slug: string;
  content: PortableTextBlock[];
  _createdAt: Date;
};

type PageParams = {
  params: { page: string };
};

export type { Page, PageParams };
