import page from "@/sanity/schemas/page-schema";
import { project, projectPage } from "@/sanity/schemas/project-schema";
import home from "@/sanity/schemas/home-schema";
import service from "@/sanity/schemas/service-schema";
import favorites from "@/sanity/schemas/favorites-schema";
import contact from "@/sanity/schemas/contact-schema";
import StackPage from "@/sanity/schemas/stack-schema";
import localeString from "@/sanity/schemas/types/localeString";

const schemas = [
  project,
  page,
  home,
  service,
  projectPage,
  favorites,
  contact,
  StackPage,
  localeString,
];

export default schemas;
