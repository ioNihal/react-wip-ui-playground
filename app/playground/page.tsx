import { Metadata } from "next";
import Playground from "../../components/Playground/Playground";


const HOST_URL =
  process.env.NEXT_PUBLIC_HOST_URL ?? "https://react-wip-ui.vercel.app";

const title = "Playground · React-WIP-UI";
const description =
  "Explore interactive UI components in React-WIP-UI. Test server and client components in a live playground environment.";

const ogGeneratorParams = new URLSearchParams({
  title: "React-WIP-UI Playground",
  description: "Interactive component live testing environment",
  theme: "glass",
});

export const metadata: Metadata = {
  title,
  description,
  keywords: ["react", "ui components", "playground", "interactive testing", "next.js"],

  metadataBase: new URL(HOST_URL),

  openGraph: {
    title,
    description,
    type: "website",
    url: "/playground",
    images: [
      {
        url: `https://rendercard.vercel.app/api/rendercard?${ogGeneratorParams.toString()}`,
        width: 1200,
        height: 630,
        alt: "React-WIP-UI Playground",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`https://rendercard.vercel.app/api/rendercard?${ogGeneratorParams.toString()}`],
  },

  alternates: {
    canonical: "/playground",
  },
};


export default function PlaygroundPage() {
  return <Playground />;
}
