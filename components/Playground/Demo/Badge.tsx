"use client";
import { Badge } from "react-wip-ui";
import PropTable from "../PropTable";
import CodeChip from "../CodeChip";
import { useState } from "react";
import Tag from "../Tag";

export default function BadgeDemo() {
    const [text, setText] = useState("WIP");
    const [disabled, setDisabled] = useState(false);

    return (
        <div className="card fade-up delay-1">
            <div className="card-header">
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                            <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "1rem" }}>Badge</h3>
                            <Tag type="server" />
                        </div>
                        <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", margin: 0 }}>
                            Inline label that attaches to any child element.
                        </p>
                    </div>
                    <CodeChip>{"<Badge />"}</CodeChip>
                </div>
            </div>

            <div className="card-body">
                <div className="controls-row" style={{ marginBottom: 20 }}>
                    <span className="ctrl-label">Text</span>
                    <input
                        className="ctrl-input"
                        value={text}
                        maxLength={16}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Badge label"
                        style={{ width: 120 }}
                    />
                    <label className="ctrl-check">
                        <input type="checkbox" checked={disabled} onChange={(e) => setDisabled(e.target.checked)} />
                        Disabled
                    </label>
                </div>

                <div className="preview-area" style={{ flexDirection: "column", alignItems: "flex-start", padding: "24px 28px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                        <Badge text={text || "WIP"} disabled={disabled}>
                            <button style={{ padding: "8px 18px", borderRadius: "var(--radius-sm)", border: "1.5px solid var(--border)", background: "white", fontSize: "0.85rem", cursor: "pointer", color: "var(--text-primary)" }}>
                                Pro Feature
                            </button>
                        </Badge>
                        <Badge text={text || "WIP"} disabled={disabled}>
                            <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text-primary)" }}>
                                Analytics Dashboard
                            </span>
                        </Badge>
                        <Badge text={text || "WIP"} disabled={disabled}>
                            <div style={{ display: "flex", alignItems: "center", gap: 7, padding: "6px 12px", background: "white", borderRadius: "var(--radius-sm)", border: "1px solid var(--border)", fontSize: "0.82rem", color: "var(--text-muted)" }}>
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                                Side nav link
                            </div>
                        </Badge>
                    </div>
                </div>
            </div>

            <div className="card-footer">
                <PropTable
                    rows={[
                        { prop: "text", type: "string", default: '"WIP"', description: "Label shown in the pill" },
                        { prop: "disabled", type: "boolean", default: "false", description: "When true, hides the badge" },
                        { prop: "children", type: "ReactNode", description: "Element to badge" },
                    ]}
                />
            </div>
        </div>
    );
}