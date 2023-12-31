"use client";
import Image from "next/image";
import ContactPageImg from "@/assets/contact-page.svg";
import ContactPageIllustration from "@/assets/contact-illustration.svg";

import { motion } from "framer-motion";

import { scale } from "@/utils/variants";
import { transition } from "@/utils/transition";
import { ContactForm, Reveal } from "@/components";

export function Contact() {
  return (
    <div
      id="contact"
      className="flex min-h-screen relative items-center justify-center"
      style={{
        backgroundImage: `url(${ContactPageImg.src})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between items-center xl:items-start gap-12 w-full pt-20 pb-20 sm:pb-16 px-12">
        <div className="flex-1 flex flex-col gap-4 md:gap-8">
          <Reveal>
            <h2 className="text-textPrimary text-center xl:text-start text-4xl sm:text-5xl lg:text-6xl font-bold">
              Contact <span className="text-secondary ">me</span>
            </h2>
          </Reveal>

          <motion.div
            variants={scale()}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <Image
              src={ContactPageIllustration}
              alt="illustration image"
              className="max-w-full sm:max-w-[401px] max-h-[350px]"
              width={1000}
              height={1000}
            />
          </motion.div>
        </div>

        <ContactForm />  
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" />
    </div>
  );
}
