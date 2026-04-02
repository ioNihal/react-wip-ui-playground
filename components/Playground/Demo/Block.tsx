"use client";

import { Block } from "react-wip-ui";
import PropTable from "../PropTable";
import CodeChip from "../CodeChip";
import { useState } from "react";
import Tag from "../Tag";

export default function BlockDemo() {
    const [disabled, setDisabled] = useState(false);

    return (
        <div className="card fade-up delay-3">
            <div className="card-header">
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                            <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "1rem" }}>Block</h3>
                            <Tag type="server" />
                        </div>
                        <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", margin: 0 }}>
                            Disables pointer events and text selection on children.
                        </p>
                    </div>
                    <CodeChip>{"<Block />"}</CodeChip>
                </div>
            </div>

            <div className="card-body">
                <div className="controls-row" style={{ marginBottom: 20 }}>
                    <label className="ctrl-check" style={{ fontSize: "0.85rem", color: "var(--text-primary)" }}>
                        <input type="checkbox" checked={disabled} onChange={(e) => setDisabled(e.target.checked)} />
                        Allow interaction (disabled=true)
                    </label>
                </div>

                <div className="preview-area" style={{ gap: 24 }}>
                    <Block disabled={disabled}>
                        <div className="mock-card" style={{ opacity: disabled ? 1 : 0.65 }}>
                            <label className="mock-label">Subscription</label>
                            <input className="mock-input" placeholder="your@email.com" />
                            <div style={{ display: "flex", gap: 6, marginTop: 4 }}>
                                <div style={{ flex: 1, padding: "8px", background: "var(--accent)", color: "white", borderRadius: "var(--radius-sm)", fontSize: "0.8rem", textAlign: "center" }}>
                                    Subscribe
                                </div>
                                <div style={{ padding: "8px 12px", border: "1px solid var(--border)", background: "white", borderRadius: "var(--radius-sm)", fontSize: "0.8rem" }}>
                                    Skip
                                </div>
                            </div>
                        </div>
                    </Block>
                    <div style={{ maxWidth: 160, fontSize: "0.78rem", color: "var(--text-muted)", lineHeight: 1.65 }}>
                        {disabled
                            ? "✅ Interaction re-enabled."
                            : "🚫 Pointer events blocked. Try clicking the form."}
                    </div>
                </div>
            </div>

            <div className="card-footer">
                <PropTable
                    rows={[
                        { prop: "disabled", type: "boolean", default: "false", description: "When true, removes the block" },
                        { prop: "children", type: "ReactNode", description: "Content to be blocked" },
                    ]}
                />
            </div>
        </div>
    );
}