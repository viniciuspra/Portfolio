import React from "react";

import { getContactData, getHomeData } from "@/sanity/sanity-utils";

import { HeroSection } from "@/components/hero-section";
import { ExpertiseSection } from "@/components/expertise-section";

export default async function Home() {
  const data = await getHomeData();
  const {
    position,
    services,
    slogan,
    specialization,
    title,
    buttonText,
    formTitle,
  } = data[0];

  const formData = (await getContactData()).form;

  return (
    <>
      <HeroSection
        position={position}
        specialization={specialization}
        title={title}
        buttonText={buttonText}
      />
      <ExpertiseSection
        services={services}
        slogan={slogan}
        formTitle={formTitle}
        form={formData}
      />
    </>
  );
}
