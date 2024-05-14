import { createClient, groq } from "next-sanity";
import clientConfig from "@/sanity/config/client-config";

import { Project, ProjectPage } from "@/types/project";
import { Page } from "@/types/page";
import { Home } from "@/types/home";
import { Services } from "@/types/service";
import { Contact } from "@/types/contact";
import { Stack } from "@/types/stack";

async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
      _id,
      title, 
      subtitle,
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

async function getProjectsPage(): Promise<ProjectPage> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "projectPage"][0]{
      _id,
      title, 
      description,
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
      "image": image.asset->url,
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
      buttonText,
      slogan,
      "services": services[]{
        _key,
        title,
        description,
        "image": image.asset->url
      },
      formTitle,
      _createdAt
    }`,
  );
}

async function getServices(): Promise<Services> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "service"][0]{
      _id,
      title,
      description,
      "services": services[]{
        _key,
        title,
        description,
        price,
        "image": image.asset->url
      },
      _createdAt
    }`,
  );
}

async function getContactData(): Promise<Contact> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "contact"][0]{
      _id,
      title,
      subtitle,
      "form": {
        "name": form.name,
        "email": form.email,
        "message": form.message,
        "button": form.button
      }
    }`,
  );
}

async function getStackData(): Promise<Stack> {
  return createClient(clientConfig).fetch(groq`
      *[_type == "stackPage"][0]{
        _id,
        title,
        subtitle,
        "technologies": technologies[]{
          category,
          "technologies": technologies[]{
            title,
            image
          }
        }
      }
    `);
}

export {
  getProjects,
  getProject,
  getProjectsPage,
  getPages,
  getPage,
  getHomeData,
  getServices,
  getContactData,
  getStackData,
};
