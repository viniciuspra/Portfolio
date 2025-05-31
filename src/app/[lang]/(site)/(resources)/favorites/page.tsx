import type { Metadata } from "next";
import React from "react";

import { DivAnimation } from "@/components/div-animation";
import { FavoriteCarousel } from "@/components/favorite-carousel";
import { PageTitle } from "@/components/page-title";
import { getFavoriteData } from "@/sanity/sanity-utils";
import { Favorite } from "@/types/favorite";
import { Lang } from "@/utils/language";

type Props = {
  params: { lang: Lang };
};

export async function generateMetadata({
  params: { lang },
}: Props): Promise<Metadata> {
  const title = lang === "pt" ? "Favoritos" : "Favorites";
  const description =
    lang === "pt"
      ? "Sites, ferramentas e recursos que inspiram e auxiliam no meu desenvolvimento web."
      : "Sites, tools, and resources that inspire and assist my web development.";

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: `https://portfolio-viniciuspra.vercel.app/${lang}/favorites`,
      locale: lang === "pt" ? "pt_BR" : "en_US",
    },
  };
}

export default async function FavoritesPage({ params: { lang } }: Props) {
  const data: Favorite[] | null = await getFavoriteData(lang);

  const subtitle =
    lang === "pt"
      ? "Sites que inspiram e auxiliam no meu desenvolvimento web."
      : "Sites that inspire and assist my web development.";

  if (!data || data.length === 0) {
    return (
      <div className="flex w-full flex-col gap-5 px-5 md:px-10 lg:px-20">
        <div className="w-full space-y-3 py-2">
          <PageTitle subtitle={subtitle}>
            {lang === "pt" ? "Favoritos" : "Favorites"}
          </PageTitle>
        </div>
        <p className="text-center text-gray-500 dark:text-gray-400">
          {lang === "pt"
            ? "Nenhum favorito encontrado."
            : "No favorites found."}
        </p>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-5 px-5 md:px-10 lg:px-20">
      <div className="w-full space-y-3 py-2">
        <PageTitle subtitle={subtitle}>
          {lang === "pt" ? "Favoritos" : "Favorites"}
        </PageTitle>
      </div>
      <DivAnimation
        duration={0.4}
        delay={0.5}
        y={20}
        className="flex flex-col gap-10"
      >
        <FavoriteCarousel data={data} />
      </DivAnimation>
    </div>
  );
}
