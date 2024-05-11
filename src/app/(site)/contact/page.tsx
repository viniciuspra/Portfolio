"use client";
import { ContactForm } from "@/components/contact-form";
import { PageTitle } from "@/components/page-title";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <motion.div className="relative min-h-screen px-10 md:max-w-[800px] xl:max-w-[1200px]">
      <PageTitle subtitle="Have a project in mind? Looking to partner or work together? Reach out through the form and I'll get back to you in the next 48 hours.">
        Get in Touch
      </PageTitle>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.25,
              delay: 0.3,
              delayChildren: 0.3,
            },
          },
        }}
        initial="hidden"
        animate="visible"
        className="px-0.5 py-5"
      >
        <Link href="mailto:vinicius.cascaesp@gmail.com">
          <motion.span
            variants={{
              hidden: { opacity: 0, translateX: -100 },
              visible: {
                opacity: 1,
                translateX: 0,
                transition: { duration: 0.3 },
              },
            }}
            className="flex w-fit gap-3 py-2 font-medium opacity-80"
          >
            <Mail /> vinicius.cascaesp@gmail.com
          </motion.span>
        </Link>
        <Link href="tel:+5548991753796">
          <motion.span
            variants={{
              hidden: { opacity: 0, translateX: -100 },
              visible: { opacity: 1, translateX: 0 },
            }}
            className="flex w-fit gap-3 py-2 font-medium opacity-80"
          >
            <Phone /> My phone
          </motion.span>
        </Link>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, translateY: 100 },
          visible: {
            opacity: 1,
            translateY: 0,
            transition: { ease: "linear", duration: 0.3, delay: 0.3 },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        <ContactForm />
      </motion.div>
    </motion.div>
  );
}
