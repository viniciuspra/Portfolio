import { transition } from "@/utils/transition";
import { fadeIn } from "@/utils/variants";
import { motion } from "framer-motion";
import { Button } from "@/components";

import { ValidationError, useForm } from "@formspree/react";

export function ContactForm() {
  const [state, handleSubmit] = useForm("mpzgojee");
  if (state.succeeded) {
    if (typeof window !== "undefined") {
      window.alert("Obrigado por entrar em contato comigo!");
      window.location.reload();
    }
    return null;
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      variants={fadeIn("up")}
      transition={transition()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      className="flex-1 flex flex-col gap-6 w-full max-w-[696px]"
    >
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <div className="flex flex-col gap-2.5 flex-1 w-full">
          <label
            htmlFor="name"
            className="text-textPrimary text-base sm:text-lg font-bold"
          >
            Nome
          </label>
          <input
            type="name"
            id="name"
            name="name"
            placeholder="Seu nome"
            className="bg-accent rounded-2xl py-4 px-6 text-textPrimary text-base sm:text-lg placeholder-textSecondary outline-none resize-none border border-transparent focus:border-hoverSecondary"
          />
        </div>
        <div className="flex flex-col gap-2.5 flex-1 w-full">
          <label
            htmlFor="email"
            className="text-textPrimary text-base sm:text-lg font-bold"
          >
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Seu e-mail"
            className="bg-accent rounded-2xl py-4 px-6 text-textPrimary text-base sm:text-lg placeholder-textSecondary outline-none resize-none border border-transparent focus:border-hoverSecondary"
          />
        </div>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <div className="flex flex-col gap-2.5 flex-1 w-full">
          <label
            htmlFor="message"
            className="text-textPrimary text-base sm:text-lg font-bold"
          >
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            rows={9}
            placeholder="Sua mensagem"
            className="bg-accent rounded-2xl py-4 px-6 text-textPrimary text-base sm:text-lg placeholder-textSecondary outline-none resize-none border border-transparent focus:border-hoverSecondary"
          />
        </div>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      <Button type="submit" disabled={state.submitting} secondary>
        Enviar Mensagem
      </Button>
    </motion.form>
  );
}
