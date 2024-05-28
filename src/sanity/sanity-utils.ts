import { createClient, groq } from "next-sanity";

import { Lang } from "@/components/language-selector";
import clientConfig from "@/sanity/config/client-config";
import { Contact } from "@/types/contact";
import { Home } from "@/types/home";
import { Page } from "@/types/page";
import { Project, ProjectPage } from "@/types/project";
import { Services } from "@/types/service";
import { Stack } from "@/types/stack";

async function getProjectsPage(lang: Lang): Promise<ProjectPage> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "projectPage"][0]{
      _id,
      "title": title[$lang], 
      "description": description[$lang],
      _createdAt
    }`,
    { lang },
  );
}

async function getProjects(lang: Lang): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]| order(name asc){
      _id,
      name,
      "subtitle": subtitle[$lang],
      "slug": slug.current,
      "content": content[$lang],
      url,
      github, 
      "image": image.asset->url,
      _createdAt
    }`,
    { lang },
  );
}

async function getProject(slug: string, lang: Lang): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      name,
      "slug": slug.current,
      "content": content[$lang],
      url,
      github, 
      "image": image.asset->url,
      _createdAt
    }`,
    { slug, lang },
  );
}

async function getPages(lang: Lang): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"] | order(_createdAt asc){
      _id,
      "title": title[$lang],
      icon,
      "slug": slug.current,
      "group": groups[0].groupName,
      _createdAt
    }`,
    { lang },
  );
}

async function getHomeData(lang: Lang): Promise<Home> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "homePage"][0]{
      _id,
      "title": title[$lang],
      "position": position[$lang],
      "specialization": specialization[$lang],
      "buttonText": buttonText[$lang],
      "slogan": slogan[$lang],
      "services": services[]{
        _key,
        "title": title[$lang],
        "description": description[$lang],
        "image": image.asset->url
      },
       "formTitle": formTitle[$lang],
      _createdAt
    }`,
    { lang },
  );
}

async function getContactData(lang: Lang): Promise<Contact> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "contact"][0]{
      _id,
      "title": title[$lang],
      "subtitle": subtitle[$lang],
      "phone": phone[$lang],
      "form": {
        "name": form.name[$lang],
        "email": form.email[$lang],
        "message": form.message[$lang],
        "button": form.button[$lang]
      }
    }`,
    { lang },
  );
}

async function getServices(lang: Lang): Promise<Services> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "service"][0]{
      _id,
      "title": title[$lang],
      "description": description[$lang],
      "services": services[]{
        _key,
        "title": title[$lang],
        "description": description[$lang],
        "price": price[$lang],
        "image": image.asset->url
      },
      _createdAt
    }`,
    { lang },
  );
}

async function getStackData(lang: Lang): Promise<Stack> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "stackPage"][0]{
        _id,
        "title": title[$lang],
        "subtitle": subtitle[$lang],
        "technologies": technologies[]{
          "category": category[$lang],
          "technologies": technologies[]{
             title,
             image
          }
        }
      }
    `,
    { lang },
  );
}

async function fetchHomePageData(
  lang: Lang,
): Promise<{ homeData: Home; contactData: Contact }> {
  const [homeData, contactData] = await Promise.all([
    getHomeData(lang),
    getContactData(lang),
  ]);
  return { homeData, contactData };
}

async function fetchProjectsData(
  lang: Lang,
): Promise<{ projectsPage: ProjectPage; projects: Project[] }> {
  const [projectsPage, projects] = await Promise.all([
    getProjectsPage(lang),
    getProjects(lang),
  ]);
  return { projectsPage, projects };
}

export {
  fetchHomePageData,
  fetchProjectsData,
  getContactData,
  getHomeData,
  getPages,
  getProject,
  getProjects,
  getProjectsPage,
  getServices,
  getStackData,
};
