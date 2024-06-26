type Page = {
  _id: string;
  title: string;
  icon: string;
  slug: string;
  group: string;
  _createdAt: Date;
};

type PageParams = {
  params: { page: string };
};

export type { Page, PageParams };
