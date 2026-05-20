import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import astro from "eslint-plugin-astro";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig(
  {
    ignores: [
      ".astro/**",
      ".agents/**",
      ".next/**",
      "dist/**",
      "node_modules/**",
      "out/**",
      ".wrangler/**",
      ".playwright-cli/**",
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs["flat/recommended"],
  ...astro.configs["flat/jsx-a11y-recommended"],
  {
    files: ["**/*.{js,mjs,cjs,ts}", "**/*.astro/*.js", "**/*.astro/*.ts"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    rules: {
      "astro/jsx-a11y/anchor-ambiguous-text": "off",
    },
  },
);
