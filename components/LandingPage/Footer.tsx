import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex flex-col justify-between gap-2 border-t border-(--border-dark) bg-(--bg-dark) px-4 md:px-6 py-3">
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-3">
                <div className="flex items-center gap-2">
                    <div className="flex h-5.5 w-5.5 items-center justify-center rounded-md bg-(--accent)">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="white">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                    </div>
                    <span className="text-xs font-medium text-(--text-dim)">
                        React-WIP-UI
                    </span>
                </div>
                <div className="flex gap-3 text-[0.78rem]">
                    <Link href="/playground" className="text-(--text-dim) transition-colors hover:text-(--text-on-dark)">
                        Playground
                    </Link>
                    <a
                        href="https://www.npmjs.com/package/react-wip-ui"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-(--text-dim) transition-colors hover:text-(--text-on-dark)"
                    >
                        NPM
                    </a>
                    <Link href="/support" className="text-(--text-dim) transition-colors hover:text-(--text-on-dark)">
                        Contact Support
                    </Link>
                </div>
            </div>
            <p className="text-[10px] text-(--text-dim) text-center md:text-left">
                &copy; {new Date().getFullYear()} React-WIP-UI. MIT License.
            </p>
        </footer>
    );
}
