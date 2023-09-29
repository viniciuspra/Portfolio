"use client";
import Image from "next/image";
import ContactPageImg from "@/assets/contact-page.svg";
import ContactPageIllustration from "@/assets/contact-illustration.svg";

import { Button, InputLabel, Reveal } from "@/components";

import { motion } from "framer-motion";

import { fadeIn, scale } from "@/utils/variants";
import { transition } from "@/utils/transition";

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

        <motion.div
          variants={fadeIn("up")}
          transition={transition()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="flex-1 flex flex-col gap-6 w-full max-w-[696px]"
        >
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <InputLabel labelText="Seu Nome" placeholderText="Nome" />
            <InputLabel labelText="Seu E-mail" placeholderText="E-mail" />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <InputLabel
              labelText="Sua Mensagem"
              placeholderText="Mensagem"
              textarea
            />
          </div>

          <Button secondary>Enviar Mensagem</Button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" />
    </div>
  );
}
