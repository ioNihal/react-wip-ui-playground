import Link from "next/link";
import CopyButton from "../CopyButton";


export default function CTA() {
    return (
        <section className="cta-section">
            <div style={{ position: "relative", maxWidth: 600, margin: "0 auto" }}>
                <div
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        background: "rgba(180,204,160,0.12)",
                        border: "1px solid rgba(180,204,160,0.25)",
                        borderRadius: "var(--radius-full)",
                        padding: "5px 16px",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "var(--accent-light)",
                        marginBottom: 20,
                    }}
                >
                    Open source · MIT License
                </div>
                <h2
                    style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "clamp(1.8rem, 4vw, 3rem)",
                        color: "var(--text-on-dark)",
                        marginBottom: 14,
                        lineHeight: 1.15,
                    }}
                >
                    Ready to ship{" "}
                    <span style={{ color: "var(--accent-light)" }}>with confidence?</span>
                </h2>
                <p
                    style={{
                        color: "var(--text-dim)",
                        fontSize: "1rem",
                        marginBottom: 36,
                        lineHeight: 1.7,
                    }}
                >
                    Install react-wip-ui and start marking features in seconds.
                </p>
                <div
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
                        <Link href="/playground" className="btn btn-lg" style={{ background: "var(--accent-light)", color: "var(--accent-dark)", border: "none" }}>
                            Open Playground →
                        </Link>
                        <a
                            href="https://www.npmjs.com/package/react-wip-ui"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-lg btn-outline"
                            style={{ borderColor: "rgba(180,204,160,0.3)", color: "var(--accent-light)" }}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M0 0h24v24H0V0zm4 4h16v16H4V4zm2 2v12h8v-2H8V6H6zm8 0v12h4V6h-4z" />
                            </svg> npm package
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
