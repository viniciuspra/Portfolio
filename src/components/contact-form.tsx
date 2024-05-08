"use client";
import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Modal } from "./modal";
import { motion } from "framer-motion";

export function ContactForm() {
  const [state, handleSubmit] = useForm("xwkgydle");
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setShowToast(true);
    }
  }, [state.succeeded]);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, translateY: 100 },
        visible: {
          opacity: 1,
          translateY: 0,
          transition: { ease: "linear" },
        },
      }}
      className="flex w-[800px] flex-col pt-14"
    >
      <h1 className="w-full pb-5 text-center text-4xl font-bold text-slate-950/80 dark:text-primary/95">
        Tell me about your next project
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-1 flex-col justify-center space-y-7"
      >
        <div className="flex gap-4">
          <label htmlFor="name" className="flex w-full flex-col gap-2">
            <span className="text-lg font-bold">Name</span>
            <input
              id="name"
              type="name"
              name="name"
              className="w-full rounded-md border bg-background p-2 text-slate-950/90 dark:text-primary/95"
            />
          </label>

          <label htmlFor="email" className="flex w-full flex-col gap-2">
            <span className="text-lg font-bold">Email</span>
            <input
              id="email"
              type="email"
              name="email"
              className="w-full rounded-md border bg-background p-2 text-slate-950/90 dark:text-primary/95"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-xs text-red-500 md:text-sm"
            />
          </label>
        </div>
        <label htmlFor="message" className="flex flex-col gap-2">
          <span className="text-lg font-bold">Message</span>
          <textarea
            id="message"
            name="message"
            className="min-h-40 rounded-md border bg-background px-2 py-3 text-slate-950/90 dark:text-primary/95"
          />
        </label>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          type="submit"
          disabled={state.submitting}
          className="rounded-md bg-blue-500 p-3 font-semibold  text-white"
        >
          Submit
        </button>
      </form>
      <Modal show={showToast && showToast} />
    </motion.div>
  );
}
