const fallbackSiteUrl = "https://interlaysoftware.com";
const siteUrl = (import.meta.env.PUBLIC_SITE_URL?.trim() || fallbackSiteUrl).replace(/\/+$/, "");

export const site = {
  name: "Interlay Software",
  url: siteUrl,
  title: "Nikolas Padilla | Interlay Software, Phoenix",
  description:
    "I'm Nikolas Padilla, a Phoenix developer building websites, online stores, and custom software for trade and service businesses.",
  email: "nikolas@interlaysoftware.com",
  googleBusinessProfileUrl: "https://g.page/r/CSfQVgNcHd8aEAI",
  logoPath: "/favicon.svg",
};
