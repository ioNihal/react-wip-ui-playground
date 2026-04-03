import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CopyButton from "../CopyButton";
import InstallBar from "../InstallBar";

export default function Hero() {
    return (
        <section
            className="relative overflow-hidden px-4 py-10 xl:py-14 2xl:py-28 text-center xl:min-h-screen"
            id="hero"
        >
            <div className="pointer-events-none absolute inset-0 radial-gradient" />
            <div className="relative">
                <div className="animate-fade-up inline-flex items-center gap-2 rounded-full py-1.5 px-4
                            border-2 border-(--accent-light) bg-(--accent-muted) text-xs font-bold uppercase text-(--accent-dark)">
                    <span className="inline-block h-1.75 w-1.75 rounded-full bg-(--accent)" />
                    Ship features faster
                </div>

                <h1 className="animate-fade-up [animation-delay:0.15s] mx-auto mt-2 mb-5 max-w-3xl font-serif text-3xl lg:text-5xl xl:text-7xl leading-1.5 text-(--text-primary)">
                    Mark features as{" "}
                    <em className="text-(--accent) text-nowrap">Work In Progress.</em>
                    <br />
                    Ship with confidence.
                </h1>

                <p className="animate-fade-up [animation-delay:0.3s] mx-auto mb-10 max-w-3xl text-sm lg:text-lg text-(--text-muted)">
                    A composable React component library for annotating in-development
                    features. SSR-safe, accessible, and designed for Next.js App Router.
                </p>

                <div className="animate-fade-up [animation-delay:0.45s] flex flex-col items-center gap-6">
                    <InstallBar action={<CopyButton text="npm install react-wip-ui" />}>
                        <span className="text-[#668855]">$</span>{" "}
                        <span className="text-[#C8D9B4]">npm install</span>{" "}
                        <span className="text-[#B4CCA0]">react-wip-ui</span>
                    </InstallBar>
                    <div className="flex flex-wrap justify-center gap-3">
                        <Link
                            href="/playground"
                            className="inline-flex items-center justify-center gap-2 rounded-sm px-4 py-2 text-sm font-semibold transition-all duration-200
                                 bg-(--accent) text-white shadow-[0_2px_8px_rgba(110,139,82,0.30)] hover:-translate-y-px hover:bg-(--accent-hover) hover:shadow-[0_4px_16px_rgba(110,139,82,0.35)]"
                        >
                            Try the Playground
                            <ArrowRight />
                        </Link>
                        <a
                            href="https://www.npmjs.com/package/react-wip-ui"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-sm border border-transparent px-4 py-2 text-sm font-semibold transition-all duration-200
                             bg-transparent text-(--accent-dark) hover:border-(--accent) hover:bg-(--accent-glow) hover:text-(--accent)"
                        >
                            View on npm
                        </a>
                    </div>
                </div>
            </div>
        </section >
    );
}
