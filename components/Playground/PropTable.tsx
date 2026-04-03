import CodeChip from "./CodeChip";

type PropRow = {
    prop: string;
    type: string;
    default?: string;
    description: string;
};

export default function PropTable({ rows }: { rows: PropRow[] }) {
    return (
        <div className="max-w-full overflow-x-auto">
            <table className="min-w-full border-collapse text-sm">
                <thead>
                    <tr>
                        {["Prop", "Type", "Default", "Description"].map((header) => (
                            <th key={header}
                                className="border-b border-(--border) bg-(--bg-muted) px-3 py-2 text-left font-sans text-xs uppercase text-(--text-subtle)">
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row) => (
                        <tr key={row.prop}>
                            <td className="border-b border-(--border) px-3 py-2.25 text-nowrap">
                                <CodeChip>{row.prop}</CodeChip>
                            </td>
                            <td className="border-b border-(--border) px-3 py-2.25 text-nowrap font-mono text-xs text-(--accent-dark)">
                                {row.type}
                            </td>
                            <td className="border-b border-(--border) px-3 py-2.25 text-nowrap font-mono text-xs text-(--text-subtle)">
                                {row.default ?? "-"}
                            </td>
                            <td className="border-b border-(--border) px-3 py-2.25 text-nowrap text-xs text-(--text-muted)">
                                {row.description}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
