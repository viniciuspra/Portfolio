"use client";
import projectPageImg from "@/assets/projects-page.svg";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";

import { projects } from "@/data";
import { useState } from "react";

type Category = "Todos" | "FullStack" | "Frontend";

export function Projects() {
  const [activeCategory, setCategory] = useState<Category>("Todos");

  const filteredProjects = () => {
    if (activeCategory === "Todos") {
      return projects.filter(
        (item) => item.category === "FullStack" || "Frontend"
      );
    } else if (activeCategory === "FullStack") {
      return projects.filter((item) => item.category === "FullStack");
    } else {
      return projects.filter((item) => item.category === "Frontend");
    }
  };

  return (
    <div
      id="projects"
      className="min-h-screen relative"
      style={{
        backgroundImage: `url(${projectPageImg.src})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-screen-2xl w-full py-16 px-12 mx-auto">
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-textPrimary text-center xl:text-start text-4xl sm:text-5xl lg:text-6xl font-bold">
            <span className="text-secondary ">Meus</span> Projetos
          </h2>

          <div className="flex items-center gap-4 justify-center xl:justify-start flex-col sm:flex-row">
            <Button
              secondary={activeCategory === "Todos" ? true : false}
              onClick={() => setCategory("Todos")}
            >
              Todos
            </Button>
            <Button
              secondary={activeCategory === "FullStack" ? true : false}
              onClick={() => setCategory("FullStack")}
            >
              Full-Stack
            </Button>
            <Button
              secondary={activeCategory === "Frontend" ? true : false}
              onClick={() => setCategory("Frontend")}
            >
              Front-end
            </Button>
          </div>

          <div className="flex gap-12 mt-12 flex-wrap justify-center">
            {filteredProjects().map((item) => (
              <Card key={item.id} imgSrc={item.img} title={item.title} url={item.url} url_github={item.url_github}/>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" />
    </div>
  );
}
