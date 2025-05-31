import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

import { DivAnimation } from "@/components/div-animation";
import { PageTitle } from "@/components/page-title";
import { ServicesCard } from "@/components/services-card";
import { getServices } from "@/sanity/sanity-utils";
import { Services } from "@/types/service";
import { Lang } from "@/utils/language";

type Props = {
  params: { lang: Lang };
};

export async function generateMetadata({
  params: { lang },
}: Props): Promise<Metadata> {
  const data: Services | null = await getServices(lang);

  const title = data?.title ?? (lang === "pt" ? "Serviços" : "Services");
  const description =
    data?.description ??
    (lang === "pt"
      ? "Descubra os serviços oferecidos para ajudar a impulsionar seus projetos."
      : "Discover the services offered to help boost your projects.");

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: `https://portfolio-viniciuspra.vercel.app/${lang}/services`,
      locale: lang === "pt" ? "pt_BR" : "en_US",
    },
  };
}

export default async function ServicesPage({ params: { lang } }: Props) {
  const data: Services | null = await getServices(lang);

  if (!data || !data.services || data.services.length === 0) {
    return (
      <div className="flex flex-col px-5 md:px-20">
        <PageTitle
          subtitle={
            lang === "pt"
              ? "Nenhum serviço disponível no momento."
              : "No services available at the moment."
          }
        >
          {lang === "pt" ? "Serviços" : "Services"}
        </PageTitle>
      </div>
    );
  }

  const contactLink = `/${lang}/contact`;

  return (
    <div className="flex flex-col px-5 md:px-20">
      <div className="w-full space-y-3 p-2">
        <PageTitle subtitle={data.description}>{data.title}</PageTitle>
      </div>
      <DivAnimation className="flex flex-col gap-7 py-10" ChildrenAnimation>
        {data.services.map((service) => (
          <Link href={contactLink} key={service._key}>
            <ServicesCard
              title={service.title}
              description={service.description}
              image={service.image}
              price={service.price}
            />
          </Link>
        ))}
      </DivAnimation>
    </div>
  );
}
