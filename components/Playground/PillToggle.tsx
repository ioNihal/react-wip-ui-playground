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
        <div className="pill-toggle">
            {options.map((o) => (
                <button
                    key={o.value}
                    className={value === o.value ? "active" : ""}
                    onClick={() => onChange(o.value)}
                >
                    {o.label}
                </button>
            ))}
        </div>
    );
}