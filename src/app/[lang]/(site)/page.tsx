import React from "react";

import { ExpertiseSection } from "@/components/expertise-section";
import { HeroSection } from "@/components/hero-section";
import { fetchHomePageData } from "@/sanity/sanity-utils";
import { Lang } from "@/utils/language";

type Props = {
  params: { lang: Lang };
};

export default async function Home({ params: { lang } }: Props) {
  const { homeData, contactData } = await fetchHomePageData(lang);

  if (!homeData || !contactData) {
    return <div>Error loading page data. Please try again later.</div>;
  }

  return (
    <>
      <HeroSection data={homeData} />
      <ExpertiseSection data={homeData} form={contactData.form} />
    </>
  );
}
