import Link from "next/link";


export default function Header() {
    return (
        <nav className="sticky top-0 z-100 flex h-15 items-center justify-between gap-3 border-b border-(--border) 
        bg-(--bg-base)/50 px-4 lg:px-6 py-2 backdrop-blur-md">
            <div className="flex items-center gap-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-(--accent)">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                </div>
                <span className="text-[0.9rem] font-bold ">
                    React-WIP-UI
                </span>
                <span className="rounded-full border border-(--border) bg-(--bg-muted) px-2 py-1 
                font-mono text-[10px] text-(--text-subtle)">
                    v3.0.0
                </span>
            </div>
            <div className="flex items-center gap-2.5">
                <Link
                    href="/changelog"
                    className="hidden md:inline-flex items-center justify-center rounded-sm px-3 py-1.5 text-sm font-semibold transition-all duration-200
                    bg-transparent text-(--text-muted) hover:bg-(--bg-muted) hover:text-(--text-primary)"
                >
                    Changelog
                </Link>
                <a
                    href="https://www.npmjs.com/package/react-wip-ui"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:inline-flex items-center justify-center rounded-sm px-3 py-1.5 text-sm font-semibold transition-all duration-200
                    bg-transparent text-(--text-muted) hover:bg-(--bg-muted) hover:text-(--text-primary) gap-1.5"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M0 0h24v24H0V0zm4 4h16v16H4V4zm2 2v12h8v-2H8V6H6zm8 0v12h4V6h-4z" />
                    </svg>
                    npm
                </a>
                <Link
                    href="/playground"
                    className="text-sm font-semibold transition-all duration-200 px-3 py-1.5 rounded-sm
                    border-(--accent) bg-(--accent) text-white  hover:border-(--accent-hover) hover:bg-(--accent-hover)"
                >
                    Playground
                </Link>
            </div>
        </nav>
    );
}
