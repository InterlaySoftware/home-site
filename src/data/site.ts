const fallbackSiteUrl = "https://interlaysoftware.com";
const siteUrl = (import.meta.env.PUBLIC_SITE_URL?.trim() || fallbackSiteUrl).replace(/\/+$/, "");

export const site = {
  name: "Interlay Software",
  url: siteUrl,
  title: "Interlay Software | Websites, Systems, and Software",
  description:
    "Interlay Software builds and manages websites, hosting, email, infrastructure, mobile apps, and custom software for small businesses.",
  email: "nikolas@interlaysoftware.com",
  googleBusinessProfileUrl: "https://g.page/r/CSfQVgNcHd8aEAI",
  imagePath: "/interlay-hero.png",
  logoPath: "/favicon.svg",
};
