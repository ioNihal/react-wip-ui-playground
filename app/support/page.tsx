import SupportForm from "@/components/SupportForm";
import { Metadata } from "next";
import Link from "next/link";


const HOST_URL =
  process.env.NEXT_PUBLIC_HOST_URL ?? "https://react-wip-ui.vercel.app";

const title = "Support & Feedback · React-WIP-UI";
const description =
  "Get help, report bugs, or request new features for React-WIP-UI.";

const ogTitle = "Support & Feedback · React-WIP-UI";
const ogDescription =
  "Questions, bug reports, or feature requests for React-WIP-UI.";

const ogGeneratorParams = new URLSearchParams({
  title: "Support & Feedback",
  description: "Questions, bug reports, or feature requests",
  theme: "glass",
});

export const metadata: Metadata = {
  title,
  description,
  keywords: ["support", "help", "feedback", "react library", "wip components", "issues"],

  metadataBase: new URL(HOST_URL),

  openGraph: {
    title: ogTitle,
    description: ogDescription,
    type: "website",
    url: "/support",
    images: [
      {
        url: `https://rendercard.vercel.app/api/rendercard?${ogGeneratorParams.toString()}`,
        width: 1200,
        height: 630,
        alt: "React-WIP-UI Support & Feedback",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description: ogDescription,
    images: [`https://rendercard.vercel.app/api/rendercard?${ogGeneratorParams.toString()}`],
  },

  alternates: {
    canonical: "/support",
  },
};


export default function SupportPage() {
  return (
    <main className="mx-auto min-h-[calc(100vh-7rem)] max-w-xl px-6 py-16">
      <Link
        href="/"
        className="text-blue-600 font-medium hover:underline underline-offset-2"
      >
        Go to Home Page &gt;
      </Link>

      <h1 className="mt-2 text-2xl font-bold">Support & Feedback</h1>

      <p className="mt-2 text-sm text-slate-600">
        Questions, bug reports, or feature requests - send them here.
      </p>

      <SupportForm />
    </main>
  );
}
