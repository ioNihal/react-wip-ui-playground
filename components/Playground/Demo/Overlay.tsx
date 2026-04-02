"use client";

import { Overlay } from "react-wip-ui";
import PropTable from "../PropTable";
import CodeChip from "../CodeChip";
import Tag from "../Tag";
import { useState } from "react";

export default function OverlayDemo() {
    const [message, setMessage] = useState("Coming Soon");
    const [disabled, setDisabled] = useState(false);

    return (
        <div className="card fade-up delay-2">
            <div className="card-header">
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                            <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "1rem" }}>Overlay</h3>
                            <Tag type="server" />
                        </div>
                        <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", margin: 0 }}>
                            Frosted glass overlay that blurs child content.
                        </p>
                    </div>
                    <CodeChip>{"<Overlay />"}</CodeChip>
                </div>
            </div>

            <div className="card-body">
                <div className="controls-row" style={{ marginBottom: 20 }}>
                    <span className="ctrl-label">Message</span>
                    <input
                        className="ctrl-input"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Overlay message"
                        style={{ width: 200 }}
                    />
                    <label className="ctrl-check">
                        <input type="checkbox" checked={disabled} onChange={(e) => setDisabled(e.target.checked)} />
                        Disabled
                    </label>
                </div>

                <div className="preview-area">
                    <Overlay message={message || "Coming Soon"} disabled={disabled}>
                        <div className="mock-card">
                            <label className="mock-label">Email</label>
                            <input className="mock-input" defaultValue="user@example.com" readOnly />
                            <label className="mock-label">Plan</label>
                            <input className="mock-input" defaultValue="Pro — $29/mo" readOnly />
                            <div style={{ marginTop: 8, padding: "8px", background: "var(--accent)", color: "white", borderRadius: "var(--radius-sm)", fontSize: "0.8rem", textAlign: "center" }}>
                                Save Changes
                            </div>
                        </div>
                    </Overlay>
                </div>
            </div>

            <div className="card-footer">
                <PropTable
                    rows={[
                        { prop: "message", type: "string", default: '"Coming Soon"', description: "Text in the overlay pill" },
                        { prop: "disabled", type: "boolean", default: "false", description: "When true, removes the overlay" },
                        { prop: "children", type: "ReactNode", description: "Content underneath the overlay" },
                    ]}
                />
            </div>
        </div>
    );
}