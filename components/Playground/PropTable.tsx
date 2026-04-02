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
                        <th className="border-b border-(--border) bg-(--bg-muted) px-3 py-2 text-left font-(--font-sans) text-[0.68rem] uppercase tracking-widesttext-[var(--text-subtle)]">Prop</th>
                        <th className="border-b border-(--border)vbg-(--bg-muted) py-2 text-left font-(--font-sans) text-[0.68rem] uppercase tracking-widest text-(--text-subtle)">Type</th>
                        <th className="border-b border-(--border) bg-(--bg-muted) px-3 py-2 text-left font-(--font-sans) text-[0.68rem] uppercase tracking-widest text-(--text-subtle)">Default</th>
                        <th className="border-b border-(--border) bg-(--bg-muted) px-3 py-2 text-left font-(--font-sans) text-[0.68rem] uppercase tracking-widesttext-[var(--text-subtle)]">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row) => (
                        <tr key={row.prop}>
                            <td className="border-b border-(--border) px-3 py-2.25 align-top">
                                <CodeChip>{row.prop}</CodeChip>
                            </td>
                            <td className="border-b border-(--border) py-[9py-2.25n-top font-(--font-mono)-[0.78rem] text-(--accent-dark)">
                                {row.type}
                            </td>
                            <td className="border-b border-(--border) py-2.25 align-top font-(--font-mono) text-[0.78rem] text-(--text-subtle)">
                                {row.default ?? "-"}
                            </td>
                            <td className="border-b border-(--border) px-3 py-2.25 align-top text-[0.82rem] text-(--text-muted)">
                                {row.description}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
