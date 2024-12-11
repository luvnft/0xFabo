import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://w3w.properties",
  // Remove lottie() integration temporarily
  integrations: [tailwind(), icon()],
  styles: ["./src/styles/index.css"],
});

