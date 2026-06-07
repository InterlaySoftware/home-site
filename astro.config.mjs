import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

const fallbackSiteUrl = "https://interlaysoftware.com";
const siteUrl = (process.env.PUBLIC_SITE_URL?.trim() || fallbackSiteUrl).replace(/\/+$/, "");

export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  site: siteUrl,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
