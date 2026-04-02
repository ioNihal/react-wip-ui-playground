import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CopyButton from "../CopyButton";
import InstallBar from "../InstallBar";

export default function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="hero-bg" />
            <div className="relative">
                <div className="hero-eyebrow fade-up">
                    <span className="inline-block h-[7px] w-[7px] rounded-full bg-[var(--accent)]" />
                    Ship features faster
                </div>

                <h1 className="hero-title fade-up delay-1">
                    Mark features as{" "}
                    <em>Work In Progress.</em>
                    <br />
                    Ship with confidence.
                </h1>

                <p className="hero-sub fade-up delay-2">
                    A composable React component library for annotating in-development
                    features. SSR-safe, accessible, and designed for Next.js App Router.
                </p>

                <div className="fade-up delay-3 flex flex-col items-center gap-4">
                    <InstallBar action={<CopyButton text="npm install react-wip-ui" />}>
                            <span style={{ color: "#668855" }}>$</span>{" "}
                            <span style={{ color: "#C8D9B4" }}>npm install</span>{" "}
                            <span style={{ color: "#B4CCA0" }}>react-wip-ui</span>
                    </InstallBar>
                    <div className="flex flex-wrap justify-center gap-3">
                        <Link href="/playground" className="btn btn-primary btn-lg">
                            Try the Playground
                            <ArrowRight />
                        </Link>
                        <a
                            href="https://www.npmjs.com/package/react-wip-ui"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline btn-lg"
                        >
                            View on npm
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
