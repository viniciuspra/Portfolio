import { PortableTextBlock } from "sanity";

type Home = {
  _id: string;
  title: string;
  position: PortableTextBlock[];
  specialization: string;
  buttonText: string;
  slogan: string;
  services: Service[];
  formTitle: string;
  _createdAt: Date;
};

type Service = {
  description: string;
  _key: string;
  title: string;
  image: string;
};

export type { Home, Service };
