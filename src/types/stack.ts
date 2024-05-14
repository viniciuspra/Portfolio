type Technology = {
  title: string;
  image: string;
};

type TechnologyCategory = {
  category: string;
  technologies: Technology[];
};

type Stack = {
  title: string;
  subtitle: string;
  technologies: TechnologyCategory[];
};

export type { Stack };
