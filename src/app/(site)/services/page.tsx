import React from "react";
import { PageTitle } from "@/components/page-title";
import { ServicesCard } from "@/components/services-card";
import { getServices } from "@/sanity/sanity-utils";
import { DivAnimation } from "@/components/div-animation";

export default async function ServicesPage() {
  const service = await getServices();

  return (
    <div className="flex flex-col px-5 md:px-20">
      <div className="w-full space-y-3 p-2">
        <PageTitle subtitle={service.description}>{service.title}</PageTitle>
      </div>
      <DivAnimation className="space-y-7 py-10" ChildrenAnimation>
        {service.services.map((service) => (
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
