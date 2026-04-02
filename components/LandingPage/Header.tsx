import Link from "next/link";


export default function Header() {
    return (
        <nav className="landing-nav">
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                    style={{
                        width: 28,
                        height: 28,
                        borderRadius: "var(--radius-sm)",
                        background: "var(--accent)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                </div>
                <span style={{ fontWeight: 700, fontSize: "0.9rem", letterSpacing: "-0.01em" }}>
                    react-wip-ui
                </span>
                <span
                    style={{
                        fontSize: "0.65rem",
                        fontFamily: "monospace",
                        color: "var(--text-subtle)",
                        background: "var(--bg-muted)",
                        padding: "2px 7px",
                        borderRadius: "var(--radius-full)",
                        border: "1px solid var(--border)",
                    }}
                >
                    v1.0.0
                </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <a
                    href="https://www.npmjs.com/package/react-wip-ui"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost btn-sm hide-mobile"
                    style={{ gap: 6 }}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M0 0h24v24H0V0zm4 4h16v16H4V4zm2 2v12h8v-2H8V6H6zm8 0v12h4V6h-4z" />
                    </svg>
                    npm
                </a>
                <Link href="/playground" className="btn btn-primary btn-sm">
                    Playground →
                </Link>
            </div>
        </nav>
    )
}
