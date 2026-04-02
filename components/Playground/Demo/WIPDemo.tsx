"use client";
import { useState } from "react";
import Tag from "../Tag";
import CodeChip from "../CodeChip";
import { WIP } from "react-wip-ui/client";
import PropTable from "../PropTable";

export default function WIPDemo() {
    const [when, setWhen] = useState(true);

    return (
        <div className="card fade-up delay-2">
            <div className="card-header">
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                            <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "1rem" }}>WIP Wrapper</h3>
                            <Tag type="client" />
                        </div>
                        <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", margin: 0 }}>
                            Composable wrapper — conditional WIP treatment.
                        </p>
                    </div>
                    <CodeChip>{"<WIP when={…} />"}</CodeChip>
                </div>
            </div>

            <div className="card-body">
                <div className="controls-row" style={{ marginBottom: 20 }}>
                    <label className="ctrl-check" style={{ fontSize: "0.88rem", color: "var(--text-primary)", fontWeight: 500 }}>
                        <input type="checkbox" checked={when} onChange={(e) => setWhen(e.target.checked)} />
                        WIP active
                    </label>
                    <span
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 6,
                            padding: "4px 12px",
                            borderRadius: "var(--radius-full)",
                            fontSize: "0.72rem",
                            fontWeight: 700,
                            background: when ? "#FFF4E8" : "#EBF4E8",
                            color: when ? "#A87040" : "#367A35",
                            border: `1.5px solid ${when ? "#E8C8A0" : "#BCDAB4"}`,
                        }}
                    >
                        {when ? "⚠ WIP active" : "✓ Live"}
                    </span>
                </div>

                <div className="preview-area">
                    <WIP when={when}>
                        <div className="mock-card" style={{ width: 210 }}>
                            <div style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-subtle)", marginBottom: 10 }}>
                                New Dashboard
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                                {[70, 45, 85].map((w, i) => (
                                    <div key={i} style={{ height: 7, background: "var(--bg-muted)", borderRadius: 99, overflow: "hidden" }}>
                                        <div style={{ width: `${w}%`, height: "100%", background: "var(--accent)", borderRadius: 99, opacity: 0.7 }} />
                                    </div>
                                ))}
                            </div>
                            <div style={{ marginTop: 12, display: "flex", gap: 6 }}>
                                <div style={{ flex: 1, height: 28, background: "var(--bg-muted)", borderRadius: "var(--radius-sm)" }} />
                                <div style={{ width: 28, height: 28, background: "var(--bg-muted)", borderRadius: "var(--radius-sm)" }} />
                            </div>
                        </div>
                    </WIP>
                </div>
            </div>

            <div className="card-footer">
                <PropTable
                    rows={[
                        { prop: "when", type: "boolean", default: "true", description: "Activates WIP styling when true" },
                        { prop: "children", type: "ReactNode", description: "Feature being marked as WIP" },
                    ]}
                />
            </div>
        </div>
    );
}