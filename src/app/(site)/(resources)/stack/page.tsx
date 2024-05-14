import { DivAnimation } from "@/components/div-animation";
import { PageTitle } from "@/components/page-title";
import { StackCard } from "@/components/stack-card";
import { getStackData } from "@/sanity/sanity-utils";

export default async function StackPage() {
  const data = await getStackData();
  return (
    <div className="flex w-full flex-col px-5 md:px-10 lg:px-20">
      <div className="w-full space-y-3 py-2">
        <PageTitle subtitle={data.subtitle}>{data.title}</PageTitle>
      </div>
      <DivAnimation className="space-y-10">
        {data.technologies.map(
          (category, index) =>
            index === 0 && (
              <div key={category.category} className="flex flex-col gap-4">
                <h3 className="text-2xl font-bold text-blue-100/95 first-letter:uppercase">
                  {category.category}
                </h3>
                <div className="space-y-3">
                  {category.technologies.map((technology) => (
                    <StackCard
                      key={technology.title}
                      image={technology.image}
                      title={technology.title}
                    />
                  ))}
                </div>
              </div>
            ),
        )}
        <DivAnimation
          duration={0.2}
          ChildrenAnimation
          className="grid gap-10 md:grid-cols-2 md:gap-3"
        >
          {data.technologies.map(
            (category) =>
              category.category === "Front-end" && (
                <div key={category.category} className="flex flex-col gap-4">
                  <h3 className="text-2xl font-bold text-blue-100/95 first-letter:uppercase">
                    {category.category}
                  </h3>
                  <div className="space-y-3">
                    {category.technologies.map((technology) => (
                      <StackCard
                        key={technology.title}
                        image={technology.image}
                        title={technology.title}
                      />
                    ))}
                  </div>
                </div>
              ),
          )}
          {data.technologies.map(
            (category) =>
              category.category === "Back-end" && (
                <div key={category.category} className="flex flex-col gap-4">
                  <h3 className="text-2xl font-bold text-blue-100/95 first-letter:uppercase">
                    {category.category}
                  </h3>
                  <div className="space-y-3">
                    {category.technologies.map((technology) => (
                      <StackCard
                        key={technology.title}
                        image={technology.image}
                        title={technology.title}
                        side="right"
                      />
                    ))}
                  </div>
                </div>
              ),
          )}
        </DivAnimation>
      </DivAnimation>
    </div>
  );
}
