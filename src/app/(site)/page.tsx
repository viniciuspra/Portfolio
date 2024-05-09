import React from "react";

import { getHomeData } from "@/sanity/sanity-utils";

import { HeroSection } from "@/components/hero-section";
import { ExpertiseSection } from "@/components/expertise-section";

export default async function Home() {
  const data = await getHomeData();
  const { position, services, slogan, specialization, title } = data[0];

  return (
    <>
      <HeroSection
        position={position}
        specialization={specialization}
        title={title}
      />
      <ExpertiseSection services={services} slogan={slogan} />
    </>
  );
}
