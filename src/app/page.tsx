"use client";
import { Menu } from "@/components";
import { About, Contact, Hero, Projects } from "@/views";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Menu />
    </>
  );
}
