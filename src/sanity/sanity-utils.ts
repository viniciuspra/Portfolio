import { createClient, groq } from "next-sanity";
import clientConfig from "@/sanity/config/client-config";

import { Project } from "@/types/project";
import { Page } from "@/types/page";
import { Home } from "@/types/home";

async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
      _id,
      name,
      "slug": slug.current,
      content,
      url,
      github, 
      "image": image.asset->url,
      _createdAt
    }`,
  );
}

async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      name,
      "slug": slug.current,
      content,
      url,
      github, 
      "image": image.asset->url,
      _createdAt
    }`,
    { slug },
  );
}

async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
      _id,
      title,
      "slug": slug.current,
      _createdAt
    }`,
  );
}

async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      title,
      "slug": slug.current,
      content,
      _createdAt
    }`,
    { slug },
  );
}

async function getHomeData(): Promise<Home> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "homePage"]{
      _id,
      title,
      position,
      specialization,
      slogan,
      "services": services[]{
        _key,
        title,
        description,
        "image": image.asset->url
      },
      _createdAt
    }`,
  );
}

export { getProjects, getProject, getPages, getPage, getHomeData };
