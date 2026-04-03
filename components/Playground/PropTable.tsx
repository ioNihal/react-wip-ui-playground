import CodeChip from "./CodeChip";

type PropRow = {
    prop: string;
    type: string;
    default?: string;
    description: string;
};

export default function PropTable({ rows }: { rows: PropRow[] }) {
    return (
        <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[0.82rem]">
                <thead>
                    <tr>
                        <th className="border-b border-[var(--border)] bg-[var(--bg-muted)] px-3 py-2 text-left font-sans text-[0.68rem] uppercase tracking-widest text-[var(--text-subtle)]">Prop</th>
                        <th className="border-b border-[var(--border)] bg-[var(--bg-muted)] px-3 py-2 text-left font-sans text-[0.68rem] uppercase tracking-widest text-[var(--text-subtle)]">Type</th>
                        <th className="border-b border-[var(--border)] bg-[var(--bg-muted)] px-3 py-2 text-left font-sans text-[0.68rem] uppercase tracking-widest text-[var(--text-subtle)]">Default</th>
                        <th className="border-b border-[var(--border)] bg-[var(--bg-muted)] px-3 py-2 text-left font-sans text-[0.68rem] uppercase tracking-widest text-[var(--text-subtle)]">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row) => (
                        <tr key={row.prop}>
                            <td className="border-b border-[var(--border)] px-3 py-2.25 align-top">
                                <CodeChip>{row.prop}</CodeChip>
                            </td>
                            <td className="border-b border-[var(--border)] px-3 py-2.25 align-top font-mono text-[0.78rem] text-[var(--accent-dark)]">
                                {row.type}
                            </td>
                            <td className="border-b border-[var(--border)] px-3 py-2.25 align-top font-mono text-[0.78rem] text-[var(--text-subtle)]">
                                {row.default ?? "-"}
                            </td>
                            <td className="border-b border-[var(--border)] px-3 py-2.25 align-top text-[0.82rem] text-[var(--text-muted)]">
                                {row.description}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
