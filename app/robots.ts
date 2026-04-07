import type { MetadataRoute } from "next";

const HOST_URL =
  process.env.NEXT_PUBLIC_HOST_URL ?? "https://react-wip-ui.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${HOST_URL}/sitemap.xml`,
    host: HOST_URL,
  };
}