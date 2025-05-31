import { Mail, Phone } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { ContactForm } from "@/components/contact-form";
import { DivAnimation } from "@/components/div-animation";
import { PageTitle } from "@/components/page-title";
import { getContactData } from "@/sanity/sanity-utils";
import { Contact } from "@/types/contact";
import { Lang } from "@/utils/language";

type Props = {
  params: { lang: Lang };
};

export async function generateMetadata({
  params: { lang },
}: Props): Promise<Metadata> {
  const data: Contact | null = await getContactData(lang);

  const title = data?.title ?? (lang === "pt" ? "Contato" : "Contact");
  const description =
    data?.subtitle ??
    (lang === "pt"
      ? "Entre em contato para discutir projetos, oportunidades ou apenas para dizer oi."
      : "Get in touch to discuss projects, opportunities, or just to say hi.");

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      locale: lang === "pt" ? "pt_BR" : "en_US",
    },
  };
}

export default async function ContactPage({ params: { lang } }: Props) {
  const data: Contact | null = await getContactData(lang);

  if (!data) {
    return (
      <DivAnimation className="relative min-h-screen px-10 md:max-w-[800px] xl:max-w-[1200px]">
        <div>Error loading contact information. Please try again later.</div>
      </DivAnimation>
    );
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
          href={`tel:${data.phone.replace(/\s+/g, "")}`}
          className="flex w-fit gap-3 py-2 font-medium text-primary/80 transition-all hover:text-foreground"
        >
          <Phone /> {data.phone}
        </Link>
      </DivAnimation>
      <DivAnimation>
        <ContactForm form={data.form} />
      </DivAnimation>
    </DivAnimation>
  );
}
