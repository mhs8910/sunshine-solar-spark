import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

export default defineConfig({
  nitro: false,
  vite: {
    plugins: [
      nitro({
        preset: "vercel",
      }),
    ],
  },
});