import CodeChip from "./CodeChip";

export default function PropTable({
    rows,
}: {
    rows: { prop: string; type: string; default?: string; description: string }[];
}) {
    return (
        <div style={{ overflowX: "auto" }}>
            <table className="prop-table">
                <thead>
                    <tr>
                        <th>Prop</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((r) => (
                        <tr key={r.prop}>
                            <td>
                                <CodeChip>{r.prop}</CodeChip>
                            </td>
                            <td
                                style={{
                                    color: "var(--accent-dark)",
                                    fontFamily: "monospace",
                                    fontSize: "0.78rem",
                                }}
                            >
                                {r.type}
                            </td>
                            <td
                                style={{
                                    color: "var(--text-subtle)",
                                    fontFamily: "monospace",
                                    fontSize: "0.78rem",
                                }}
                            >
                                {r.default ?? "—"}
                            </td>
                            <td style={{ color: "var(--text-muted)", fontSize: "0.82rem" }}>
                                {r.description}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}