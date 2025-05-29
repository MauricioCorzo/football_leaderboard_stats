import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  ssr: {
    noExternal: ["primereact"],
  },
  server: {
    host: true,
    port: +(process.env.PORT ?? 4173),
  },
  preview: {
    allowedHosts: true,
    port: +(process.env.PORT ?? 4173),
  },
});
