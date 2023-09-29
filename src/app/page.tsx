import { Menu } from "@/components/Menu";
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
