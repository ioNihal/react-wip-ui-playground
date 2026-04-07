
import type { MetadataRoute } from "next";

const HOST_URL =
  process.env.NEXT_PUBLIC_HOST_URL ?? "https://react-wip-ui.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${HOST_URL}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${HOST_URL}/playground`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${HOST_URL}/support`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}