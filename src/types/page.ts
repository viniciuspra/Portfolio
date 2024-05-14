import { PortableTextBlock } from "sanity";

type Page = {
  _id: string;
  title: string;
  slug: string;
  image: string;
  _createdAt: Date;
};

type PageParams = {
  params: { page: string };
};

export type { Page, PageParams };
