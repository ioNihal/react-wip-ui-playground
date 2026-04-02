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
        <div className="inline-flex gap-0.5 rounded-full border-[1.5px] border-(--border)var(--bg-muted)] p-0.75">
            {options.map((o) => (
                <button
                    key={o.value}
                    className={`rounded-full px-3.25ypy-1.25ext-[0.78rem] font-semibold leading-none transition-all ${value === o.value
                        ? "bg-white text-(--accent-dark) shadow-(--shadow-xs)"
                        : "bg-transparent text-(--text-muted)"
                        }`}
                    onClick={() => onChange(o.value)}
                >
                    {o.label}
                </button>
            ))}
        </div>
    );
}
