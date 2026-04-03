export default function PillToggle<T extends string>({
    options,
    value,
    onChange,
}: {
    options: { label: string; value: T }[];
    value: T;
    onChange: (v: T) => void;
}) {
    return (
        <div className="inline-flex gap-0.5 rounded-full border-[1.5px] border-[var(--border)] bg-[var(--bg-muted)] p-0.75">
            {options.map((o) => (
                <button
                    key={o.value}
                    className={`rounded-full px-3.25 py-1.25 text-[0.78rem] font-semibold leading-none transition-all ${value === o.value
                        ? "bg-white text-[var(--accent-dark)] shadow-[var(--shadow-xs)]"
                        : "bg-transparent text-[var(--text-muted)]"
                        }`}
                    onClick={() => onChange(o.value)}
                >
                    {o.label}
                </button>
            ))}
        </div>
    );
}
