import { PageTitle } from "@/components/page-title";
import { StackCard } from "@/components/stack-card";

export default function StackPage() {
  return (
    <div className="flex w-full flex-col px-5 md:px-10 lg:px-20">
      <div className="w-full space-y-3 py-2">
        <PageTitle subtitle="Explore a selection of my personal projects.">
          Stack
        </PageTitle>
      </div>
      <div className="space-y-10">
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold text-blue-100/95 first-letter:uppercase">
            programming Language
          </h3>
          <div className="space-y-3">
            <StackCard
              image="https://skillicons.dev/icons?i=js"
              title="JavaScript"
            />
            <StackCard
              image="https://skillicons.dev/icons?i=ts"
              title="TypeScript"
            />
          </div>
        </div>
        <div className="grid gap-10 md:grid-cols-2 md:gap-3">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-blue-100/95 first-letter:uppercase">
              Front-end
            </h3>
            <div className="space-y-3">
              <StackCard
                image="https://skillicons.dev/icons?i=html"
                title="HTML5"
              />
              <StackCard
                image="https://skillicons.dev/icons?i=css"
                title="CSS3"
              />
              <StackCard
                image="https://skillicons.dev/icons?i=react"
                title="ReactJs"
              />
              <StackCard
                image="https://skillicons.dev/icons?i=nextjs"
                title="NextJs"
              />
              <StackCard
                image="https://skillicons.dev/icons?i=tailwindcss"
                title="Tailwind CSS"
              />
              <StackCard
                image="https://skillicons.dev/icons?i=styledcomponents"
                title="Styled-Components"
              />
              <StackCard
                image="https://skillicons.dev/icons?i=redux"
                title="Redux"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-blue-100/95 first-letter:uppercase">
              Back-end
            </h3>
            <div className="space-y-3">
              <StackCard
                image="https://skillicons.dev/icons?i=nodejs"
                title="NodeJs"
              />
              <StackCard
                image="https://skillicons.dev/icons?i=express"
                title="Express"
              />
              <StackCard
                image="https://skillicons.dev/icons?i=sqlite"
                title="SQLite"
              />
              <StackCard
                image="https://skillicons.dev/icons?i=postgres"
                title="PostgreSQL"
              />
              <StackCard
                image="https://skillicons.dev/icons?i=prisma"
                title="prisma"
              />
              <StackCard
                image="https://skillicons.dev/icons?i=docker"
                title="Docker"
              />
              <StackCard
                image="https://skillicons.dev/icons?i=jest"
                title="Jest"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
