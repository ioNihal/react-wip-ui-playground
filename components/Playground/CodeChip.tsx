export default function CodeChip({ children }: { children: string }) {
    return (
        <span className="inline-block rounded-xs border border-(--border) bg-(--bg-muted) px-2 py-0.5 font-mono text-[0.78rem] text-(--accent-dark)">
            {children}
        </span>
    );
}
