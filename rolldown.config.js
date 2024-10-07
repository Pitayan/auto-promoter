import { defineConfig } from "rolldown";

export default defineConfig([
  {
    input: "src/main.ts",
    output: {
      name: "AutoPromoter",
      dir: "dist",
      format: "iife",
      entryFileNames: "auto-promoter.iife.js",
    },
  },
  {
    input: "src/main.ts",
    output: {
      name: "AutoPromoter",
      dir: "dist",
      format: "esm",
      entryFileNames: "auto-promoter.esm.js",
    },
  },
]);
