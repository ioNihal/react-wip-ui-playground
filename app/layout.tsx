import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});


const HOST_URL =
  process.env.NEXT_PUBLIC_HOST_URL ?? "https://react-wip-ui.vercel.app";

const ogGeneratorParams = new URLSearchParams({
  title: "React-WIP-UI",
  description: "Work In Progress UI Components",
  theme: "memphis",
  site: "React-WIP-UI"
});

export const metadata: Metadata = {
  metadataBase: new URL(HOST_URL),

  title: {
    default: "React-WIP-UI",
    template: "%s · React-WIP-UI",
  },
  description:
    "Production-ready Work In Progress UI components for React & Next.js. Explore, test, and integrate components instantly.",
  keywords: [
    "react",
    "next.js",
    "ui library",
    "work in progress",
    "wip",
    "components",
    "frontend",
    "tailwind css",
  ],
  authors: [{ name: "React-WIP-UI Team" }],
  creator: "React-WIP-UI",
  publisher: "React-WIP-UI",

  openGraph: {
    type: "website",
    siteName: "React-WIP-UI",
    url: "/",
    title: "React-WIP-UI",
    description:
      "Production-ready Work In Progress UI components for React & Next.js.",
    images: [
      {
        url: `https://rendercard.vercel.app/api/rendercard?${ogGeneratorParams.toString()}`,
        width: 1200,
        height: 630,
        alt: "React-WIP-UI",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "React-WIP-UI",
    description:
      "Production-ready Work In Progress UI components for React & Next.js.",
    images: [`https://rendercard.vercel.app/api/rendercard?${ogGeneratorParams.toString()}`],
  },

  alternates: {
    canonical: "/",
  },

  verification: {
    "google": "nJTi0WblYTwIGSD_CRF7Gzz5CI2BhPvHV0Uq6qSYoIw"
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: "React-WIP-UI",
    description:
      "Production-ready Work In Progress UI components for React & Next.js. Explore, test, and integrate components instantly.",
    url: HOST_URL,
    programmingLanguage: [
      {
        "@type": "ComputerLanguage",
        name: "TypeScript",
      },
      {
        "@type": "ComputerLanguage",
        name: "React",
      },
      {
        "@type": "ComputerLanguage",
        name: "Next.js",
      },
    ],
    applicationCategory: "DeveloperApplication",
  };

  return (
    <html lang="en" className={`${outfit.variable} ${playfair.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
      <GoogleAnalytics gaId="G-ZNTB45CRWQ" />
    </html>
  );
}
