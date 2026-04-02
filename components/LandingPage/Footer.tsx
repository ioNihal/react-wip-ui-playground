import Link from "next/link";

export default function Footer() {
    return (
        <footer
            className="flex flex-wrap items-center justify-between gap-3"
            style={{
                background: "var(--bg-dark)",
                borderTop: "1px solid var(--border-dark)",
                padding: "24px clamp(20px, 6vw, 100px)",
            }}
        >
            <div className="flex flex-wrap items-center gap-2">
                <div
                    className="flex items-center justify-center"
                    style={{
                        width: 22,
                        height: 22,
                        borderRadius: 6,
                        background: "var(--accent)",
                    }}
                >
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="white">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                </div>
                <span style={{ fontSize: "0.82rem", color: "var(--text-dim)", fontWeight: 500 }}>
                    react-wip-ui
                </span>
                <span style={{ color: "var(--border-dark)" }}>|</span>
                <span style={{ fontSize: "0.78rem", color: "#556644" }}>MIT License</span>
            </div>
            <div className="flex flex-wrap gap-5 text-[0.78rem]">
                <Link href="/playground" style={{ color: "var(--text-dim)" }}>
                    Playground
                </Link>
                <a
                    href="https://www.npmjs.com/package/react-wip-ui"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--text-dim)" }}
                >
                    npm
                </a>
            </div>
        </footer>
    );
}
