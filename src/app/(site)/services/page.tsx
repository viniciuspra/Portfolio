"use client";
import React, { useEffect, useState } from "react";

import { DivAnimation } from "@/components/div-animation";
import { Loading } from "@/components/loading";
import { PageTitle } from "@/components/page-title";
import { ServicesCard } from "@/components/services-card";
import { getServices } from "@/sanity/sanity-utils";
import { Services } from "@/types/service";
import { getCurrentLanguage, Lang } from "@/utils/language";

export default function ServicesPage() {
  const [data, setData] = useState<Services | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (language: Lang) => {
    try {
      setIsLoading(true);
      const cachedData = localStorage.getItem(`serviceData-${language}`);
      if (cachedData) {
        const parsedData = JSON.parse(cachedData);
        setData(parsedData);
        setIsLoading(false);

        const newData = await getServices(language);
        if (JSON.stringify(parsedData) !== JSON.stringify(newData)) {
          localStorage.setItem(
            `serviceData-${language}`,
            JSON.stringify(newData),
          );
          setData(newData);
        }
        return;
      }
      const newData = await getServices(language);
      localStorage.setItem(`serviceData-${language}`, JSON.stringify(newData));
      setData(newData);
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

  if (!data || !data?.services) {
    return;
  }

  return (
    <div className="flex flex-col px-5 md:px-20">
      <div className="w-full space-y-3 p-2">
        <PageTitle subtitle={data.description}>{data.title}</PageTitle>
      </div>
      <DivAnimation className="space-y-7 py-10" ChildrenAnimation>
        {data.services.map((service) => (
          <React.Fragment key={service._key}>
            <ServicesCard
              title={service.title}
              description={service.description}
              image={service.image}
              price={service.price}
            />
          </React.Fragment>
        ))}
      </DivAnimation>
    </div>
  );
}
