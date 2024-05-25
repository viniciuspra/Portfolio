"use client";
import React, { useEffect, useState } from "react";

import { ExpertiseSection } from "@/components/expertise-section";
import { HeroSection } from "@/components/hero-section";
import { Loading } from "@/components/loading";
import { fetchHomePageData } from "@/sanity/sanity-utils";
import { Home as HomeProps } from "@/types/home";
import { getCurrentLanguage, Lang } from "@/utils/language";

type FormData = {
  name: string;
  email: string;
  message: string;
  button: string;
};

export default function Home() {
  const [data, setData] = useState<HomeProps | null>(null);
  const [formData, setFormData] = useState<FormData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (language: Lang) => {
    try {
      setIsLoading(true);
      const cachedData = localStorage.getItem(`homeData-${language}`);
      if (cachedData) {
        const parsedData = JSON.parse(cachedData);
        setData(parsedData.homeData);
        setFormData(parsedData.contactData.form);
        setIsLoading(false);
        const { homeData: newHomeData, contactData: newContactData } =
          await fetchHomePageData(language);
        if (
          JSON.stringify(parsedData.homeData) !== JSON.stringify(newHomeData) ||
          JSON.stringify(parsedData.contactData) !==
            JSON.stringify(newContactData)
        ) {
          setData(newHomeData);
          setFormData(newContactData.form);
          localStorage.setItem(
            `homeData-${language}`,
            JSON.stringify({
              homeData: newHomeData,
              contactData: newContactData,
            }),
          );
        }
        return;
      }
      const { homeData, contactData } = await fetchHomePageData(language);
      setData(homeData);
      setFormData(contactData.form);
      localStorage.setItem(
        `homeData-${language}`,
        JSON.stringify({ homeData, contactData }),
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(getCurrentLanguage());
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (!data || !formData) {
    return;
  }

  return (
    <>
      <HeroSection data={data} />
      <ExpertiseSection data={data} form={formData} />
    </>
  );
}
