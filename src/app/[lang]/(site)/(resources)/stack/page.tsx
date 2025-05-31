import type { Metadata } from "next";
import React from "react";

import { DivAnimation } from "@/components/div-animation";
import { PageTitle } from "@/components/page-title";
import { StackCard } from "@/components/stack-card";
import { getStackData } from "@/sanity/sanity-utils";
import { Stack } from "@/types/stack";
import { Lang } from "@/utils/language";

type Props = {
  params: { lang: Lang };
};

export async function generateMetadata({
  params: { lang },
}: Props): Promise<Metadata> {
  const data: Stack | null = await getStackData(lang);

  const title = data?.title ?? (lang === "pt" ? "Minha Stack" : "My Stack");
  const description =
    data?.subtitle ??
    (lang === "pt"
      ? "Tecnologias e ferramentas que utilizo no desenvolvimento de aplicações web."
      : "Technologies and tools I use in web application development.");

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: `https://portfolio-viniciuspra.vercel.app/${lang}/stack`,
      locale: lang === "pt" ? "pt_BR" : "en_US",
    },
  };
}

export default async function StackPage({ params: { lang } }: Props) {
  const data: Stack | null = await getStackData(lang);

  if (!data || !data.technologies || data.technologies.length === 0) {
    return (
      <div className="flex w-full flex-col px-5 md:px-10 lg:px-20">
        <PageTitle
          subtitle={
            lang === "pt"
              ? "Informações sobre tecnologias não disponíveis."
              : "Technology information not available."
          }
        >
          {lang === "pt" ? "Minha Stack" : "My Stack"}
        </PageTitle>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col px-5 md:px-10 lg:px-20">
      <div className="w-full space-y-3 py-2">
        <PageTitle subtitle={data.subtitle}>{data.title}</PageTitle>
      </div>
      <DivAnimation className="space-y-10">
        {data.technologies.map((category) => (
          <div key={category.category} className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-slate-700/85 first-letter:uppercase dark:text-blue-100/95">
              {category.category}
            </h3>
            <DivAnimation
              duration={0.2}
              ChildrenAnimation
              className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {category.technologies.map((technology) => (
                <StackCard
                  key={technology.title}
                  image={technology.image}
                  title={technology.title}
                />
              ))}
            </DivAnimation>
          </div>
        ))}
      </DivAnimation>
    </div>
  );
}
