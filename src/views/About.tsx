"use client";
import Image from "next/image";
import aboutPageImg from "@/assets/about-me-page.svg";
import aboutPageIllustration from "@/assets/about-illustration.svg";

import linkedinIcon from "@/assets/linkedin-icon.svg";
import githubIcon from "@/assets/github-icon.svg";

import { Reveal, SocialMediaIcon } from "@/components";

import { fadeIn, scale } from "@/utils/variants";
import { transition } from "@/utils/transition";

import { motion } from "framer-motion";

export function About() {
  return (
    <div
      id="about"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${aboutPageImg.src})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between items-center xl:items-start gap-12 w-full py-16 px-12">
        <div className="flex-1 flex flex-col gap-4">
          <Reveal>
            <h2 className="text-textPrimary text-center xl:text-start text-4xl sm:text-5xl lg:text-6xl font-bold">
              Sobre <span className="text-secondary ">Mim</span>
            </h2>
          </Reveal>

          <Reveal>
            <p className="text-textPrimary text-justify text-sm xl:max-w-2xl xl:text-start md:text-lg xl:text-xl leading-relaxed mt-4 px-4 lg:px-0">
              Sou um{" "}
              <span className="text-secondary ">
                desenvolvedor web full stack
              </span>{" "}
              com experiência sólida em tecnologias front-end, incluindo{" "}
              <span className="text-secondary ">
                React, Vite, styled-components
              </span>{" "}
              e <span className="text-secondary ">Tailwind CSS</span>.
              Recentemente, concluí com sucesso um abrangente curso de
              desenvolvimento full stack na{" "}
              <span className="text-secondary ">Rocketseat</span>.<br /> <br />{" "}
              Adquirindo conhecimentos em{" "}
              <span className="text-secondary ">
                Node.js, Express, SQLite com Knex
              </span>{" "}
              e outras tecnologias back-end. Estou comprometido em aprimorar
              minhas habilidades, atualmente focado em{" "}
              <span className="text-secondary ">Typescript, Next.js</span> e
              exploração de tecnologias como{" "}
              <span className="text-secondary ">
                Prisma, Fastify e PostgreSQL
              </span>
              . <br /> <br /> Minha paixão pela aprendizagem e busca pela
              excelência impulsionam minha carreira como desenvolvedor web.
            </p>
          </Reveal>

          <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="flex items-center justify-center xl:justify-start gap-6 mt-4"
          >
            <SocialMediaIcon
              title="Github"
              imgSrc={githubIcon}
              href="https://github.com/Viniciuspra"
            />
            <SocialMediaIcon
              title="Linkedin"
              imgSrc={linkedinIcon}
              href="https://www.linkedin.com/in/vinicius-cascaes-pra"
            />
          </motion.div>
        </div>

        <motion.div
          variants={scale()}
          transition={transition()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="flex-1 flex items-center justify-center"
        >
          <Image
            src={aboutPageIllustration}
            alt="illustration image"
            className="max-w-full sm:max-w-[401px]"
            width={1000}
            height={1000}
          />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" />
    </div>
  );
}
