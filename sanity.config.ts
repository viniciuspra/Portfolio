import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "@/sanity/schemas";

const config = defineConfig({
  projectId: "8gvk3yjk",
  dataset: "production",
  title: "Portfolio",
  apiVersion: "2024-04-05",
  basePath: "/studio",
  plugins: [structureTool()],
  schema: { types: schemas },
});

export default config;
