"use client";
import Image from "next/image";
import homePageImg from "@/assets/home-page.svg";
import homePageIllustration from "@/assets/hero-illustration.svg";
import downloadIcon from "@/assets/download-btn-icon.svg";

import { Button } from "@/components";

import { motion } from "framer-motion";

import { fadeIn, scale } from "@/utils/variants";
import { transition } from "@/utils/transition";

import { Typewriter } from "react-simple-typewriter";

export function Hero() {
  return (
    <div
      id="home"
      className="flex min-h-screen relative items-center justify-center"
      style={{
        backgroundImage: `url(${homePageImg.src})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between items-center xl:items-start gap-12 w-full py-16 px-12">
        <div className="w-full xl:w-fit">
          <motion.h1
            variants={fadeIn("down")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="w-full xl:w-fit text-textPrimary text-center xl:text-start text-4xl sm:text-6xl lg:text-8xl font-bold uppercase"
          >
            Hello i&apos;am
            <br />
            <span className="text-secondary max-w-screen-xl md:max-w-lg lg:max-w-xl xl:max-w-4xl overflow-hidden inline-block">
              <Typewriter
                words={["Vinicius Pra", "Web Developer", "Full-Stack"]}
                cursor
                cursorStyle="|"
                typeSpeed={150}
                deleteSpeed={100}
                loop
              />
            </span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="text-textPrimary text-center text-sm xl:max-w-2xl xl:text-start md:text-lg xl:text-xl leading-relaxed mt-6 font-medium justify-center"
          >
            <span className="text-secondary">Desenvolvedor web full stack</span>
            , apaixonado por criar aplicações modernas. Sempre em busca de novos{" "}
            <span className="text-secondary">desafios</span> e{" "}
            <span className="text-secondary">oportunidades</span> para melhorar
            meu código.
          </motion.p>
          <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="my-12 flex flex-col sm:flex-row items-center gap-6 justify-center xl:justify-start"
          >
            <Button secondary>Hire Me</Button>
            <Button icon={downloadIcon}>Download cv</Button>
          </motion.div>
        </div>

        <motion.div
          variants={scale()}
          transition={transition()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <Image
            src={homePageIllustration}
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
