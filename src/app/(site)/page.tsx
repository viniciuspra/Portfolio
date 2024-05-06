import { ModeToggle } from "@/components/mode-toggle";

export default async function Home() {
  return (
    <div className="w-full h-full container">
      <h1>Hello</h1>
      <ModeToggle />
    </div>
  );
}
