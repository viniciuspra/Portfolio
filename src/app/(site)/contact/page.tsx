import { ContactForm } from "@/components/contact-form";
import { DivAnimation } from "@/components/div-animation";
import { PageTitle } from "@/components/page-title";

import { getContactData } from "@/sanity/sanity-utils";

import { Mail, Phone } from "lucide-react";

import Link from "next/link";

export default async function ContactPage() {
  const data = await getContactData();

  return (
    <DivAnimation className="relative min-h-screen px-10 md:max-w-[800px] xl:max-w-[1200px]">
      <PageTitle subtitle={data.subtitle}>{data.title}</PageTitle>

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
