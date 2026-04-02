import Link from "next/link";
import CopyButton from "../CopyButton";
import { ArrowRight } from "lucide-react";


export default function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="hero-bg" />
            <div style={{ position: "relative" }}>
                <div className="hero-eyebrow fade-up">
                    <span
                        style={{
                            width: 7,
                            height: 7,
                            borderRadius: "50%",
                            background: "var(--accent)",
                            display: "inline-block",
                        }}
                    />
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
                    features — SSR-safe, accessible, and designed for Next.js App Router.
                </p>

                {/* Install bar */}
                <div
                    className="fade-up delay-3"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 16,
                    }}
                >
                    <div className="install-bar justify-between">
                        <div className="install-bar__code">
                            <span style={{ color: "#668855" }}>$</span>{" "}
                            <span style={{ color: "#C8D9B4" }}>npm install</span>{" "}
                            <span style={{ color: "#B4CCA0" }}>react-wip-ui</span>
                        </div>
                        <CopyButton text="npm install react-wip-ui" />
                    </div>
                    <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
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
    )
}
