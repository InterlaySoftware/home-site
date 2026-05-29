const fallbackSiteUrl = "https://interlaysoftware.com";
const siteUrl = (import.meta.env.PUBLIC_SITE_URL?.trim() || fallbackSiteUrl).replace(/\/+$/, "");

export const site = {
  name: "Interlay Software",
  url: siteUrl,
  title: "Interlay Software | Business Systems Audits and Software",
  description:
    "Interlay Software audits, builds, and manages the websites, hosting, email, workflows, and custom software small businesses depend on.",
  email: "nikolas@interlaysoftware.com",
  googleBusinessProfileUrl: "https://g.page/r/CSfQVgNcHd8aEAI",
  logoPath: "/favicon.svg",
};
