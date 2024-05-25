"use client";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { ContactForm } from "@/components/contact-form";
import { DivAnimation } from "@/components/div-animation";
import { Loading } from "@/components/loading";
import { PageTitle } from "@/components/page-title";
import { getContactData } from "@/sanity/sanity-utils";
import { Contact } from "@/types/contact";
import { getCurrentLanguage, Lang } from "@/utils/language";

export default function ContactPage() {
  const [data, setData] = useState<Contact | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (language: Lang) => {
    try {
      setIsLoading(true);
      const cachedData = localStorage.getItem(`serviceData-${language}`);
      if (cachedData) {
        const parsedData = JSON.parse(cachedData);
        setData(parsedData);
        setIsLoading(false);

        const newData = await getContactData(language);
        if (JSON.stringify(parsedData) !== JSON.stringify(newData)) {
          localStorage.setItem(
            `serviceData-${language}`,
            JSON.stringify(newData),
          );
          setData(newData);
        }
        return;
      }
      const newData = await getContactData(language);
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

  if (!data) {
    return;
  }

  return (
    <DivAnimation className="relative min-h-screen px-10 md:max-w-[800px] xl:max-w-[1200px]">
      <div className="pb-3 lg:pb-5">
        <PageTitle subtitle={data.subtitle}>{data.title}</PageTitle>
      </div>
      <DivAnimation>
        <Link
          href="mailto:vinicius.cascaesp@gmail.com"
          className="flex w-fit gap-3 py-2 font-medium text-primary/80 transition-all hover:text-foreground"
        >
          <Mail /> vinicius.cascaesp@gmail.com
        </Link>
        <Link
          href="tel:+5548991753796"
          className="flex w-fit gap-3 py-2 font-medium text-primary/80 transition-all hover:text-foreground"
        >
          <Phone /> Celular
        </Link>
      </DivAnimation>
      <DivAnimation>
        <ContactForm form={data.form} />
      </DivAnimation>
    </DivAnimation>
  );
}
