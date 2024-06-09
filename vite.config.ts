/// <reference types="vitest" />

import { lingui } from "@lingui/vite-plugin";
import react from "@vitejs/plugin-react";
import AutoImport from "unplugin-auto-import/vite";
import Unfonts from "unplugin-fonts/vite";
import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";
// import { VitePWA } from 'vite-plugin-pwa'

import Inspect from "vite-plugin-inspect";
import topLevelAwait from "vite-plugin-top-level-await";
import remixRouter from "unplugin-remix-router/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ["macros"],
      },
    }),
    remixRouter(),
    lingui(),
    // Inspect(),
    topLevelAwait(),
    


    Unfonts({
      fontsource: {
        families: [
          {
            name: "Lato",
            weights: [100, 300, 400, 700, 900],
          },
        ],
      },
    }),

    // add `declare module "@/assets/*"` to vite-env.d.ts to use with typescript
    imagetools(),

    AutoImport({
      defaultExportByFilename: true,
      dirs: ["app/components/**", "app/config/**"],
      dts: true,
      eslintrc: { enabled: true },
      imports: [
        "react",
        "react-router-dom",
        {
          "react-hook-form": ["useFormContext","useForm","FormProvider","Controller"],
          "use-count-up":['CountUp'],
          '@tanstack/react-query':['useQuery'],
        },
      ],
      injectAtEnd: true,
    }),
  ],
  resolve: { alias: { "@": "/app" } },
  
});
