"use client";
import { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

import { DivAnimation } from "@/components/div-animation";
import { FavoriteCarousel } from "@/components/favorite-carousel";
import { Loading } from "@/components/loading";
import { PageTitle } from "@/components/page-title";
import { getFavoriteData } from "@/sanity/sanity-utils";
import { Favorite } from "@/types/favorite";
import { getCurrentLanguage, Lang } from "@/utils/language";

export default function FavoritesPage() {
  const [lang, setLang] = useState<Lang>("en");
  const [subtitle, setSubtitle] = useState("");
  const [data, setData] = useState<Favorite[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (language: Lang) => {
    try {
      setIsLoading(true);
      const cachedData = localStorage.getItem(`favoriteData-${language}`);
      if (cachedData) {
        const parsedData = JSON.parse(cachedData);
        setData(parsedData);
        setIsLoading(false);

        const newData = await getFavoriteData(language);
        if (JSON.stringify(parsedData) !== JSON.stringify(newData)) {
          localStorage.setItem(
            `favoriteData-${language}`,
            JSON.stringify(newData),
          );
          setData(newData);
        }
        return;
      }
      const newData = await getFavoriteData(language);
      localStorage.setItem(`favoriteData-${language}`, JSON.stringify(newData));
      setData(newData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const currentLanguage = getCurrentLanguage();
    setLang(currentLanguage);
    setSubtitle(
      currentLanguage === "en"
        ? "Sites that inspire and assist my web development."
        : "Sites que inspiram e auxiliam no meu desenvolvimento web.",
    );
  }, []);

  useEffect(() => {
    fetchData(lang);
  }, [lang]);

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return null;
  }

  return (
    <div className="flex w-full flex-col gap-5 px-5 md:px-10 lg:px-20">
      <div className="w-full space-y-3 py-2">
        <PageTitle subtitle={subtitle}>
          {lang === "en" ? "Favorites" : "Favoritos"}
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
