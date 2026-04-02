import Link from "next/link";

export default function Header() {
    return (
        <nav className="landing-nav">
            <div className="flex items-center gap-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-(--accent)">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                </div>
                <span className="text-[0.9rem] font-bold tracking-[-0.01em]">
                    react-wip-ui
                </span>
                <span className="rounded-(--radius-full) border border-(--border) bg-(--bg-muted) px-1.75 py-0.5 font-mono text-[0.65rem] text-(--text-subtle)">
                    v1.0.0
                </span>
            </div>
            <div className="landing-nav__actions flex items-center gap-2.5">
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
                    Playground
                </Link>
            </div>
        </nav>
    );
}
