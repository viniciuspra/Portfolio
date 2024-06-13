"use client";
import { useForm, ValidationError } from "@formspree/react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { RocketSvgAnimated } from "./rocket-svg-animated";

interface Props {
  form:
    | {
        name: string;
        email: string;
        message: string;
        button: string;
      }
    | undefined;
}

export function ContactForm({ form }: Props) {
  const [state, handleSubmit] = useForm("xwkgydle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (state.succeeded) {
      toast("Thank you for getting in touch! Excited to connect with you.", {
        icon: <RocketSvgAnimated />,
        className: "dark:bg-card dark:text-white/90 lg:top-10 top-20",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  }, [state.succeeded]);

  if (!form) return;

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="relative mx-auto flex w-full flex-1 flex-col justify-center space-y-7 pb-10 pt-10 transition-all ease-linear"
      >
        <div className="flex gap-4">
          <label htmlFor="name" className="flex w-full flex-col gap-2">
            <span className="text-lg font-bold">{form.name}</span>
            <input
              id="name"
              type="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-md border bg-background p-2 text-slate-950/90 dark:text-primary/95"
            />
          </label>

          <label htmlFor="email" className="flex w-full flex-col gap-2">
            <span className="text-lg font-bold">{form.email}</span>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
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
          <span className="text-lg font-bold">{form.message}</span>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
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
          {form.button}
        </button>
      </form>
    </>
  );
}
