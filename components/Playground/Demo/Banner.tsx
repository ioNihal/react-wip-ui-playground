"use client";

import { useState } from "react";
import Tag from "../Tag";
import CodeChip from "../CodeChip";
import PillToggle from "../PillToggle";
import { Banner } from "react-wip-ui/client";
import PropTable from "../PropTable";

export default function BannerDemo() {
    const [message, setMessage] = useState("🚧 This feature is under active development.");
    const [dismissible, setDismissible] = useState(true);
    const [position, setPosition] = useState<"sticky" | "relative">("relative");
    const [key, setKey] = useState(0);

    return (
        <div className="card fade-up">
            <div className="card-header">
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                            <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "1rem" }}>Banner</h3>
                            <Tag type="client" />
                        </div>
                        <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", margin: 0 }}>
                            Announcement bar — sticky or relative, optionally dismissible.
                        </p>
                    </div>
                    <CodeChip>{"<Banner />"}</CodeChip>
                </div>
            </div>

            <div className="card-body">
                <div className="controls-row" style={{ marginBottom: 12, rowGap: 10 }}>
                    <span className="ctrl-label">Position</span>
                    <PillToggle
                        options={[{ label: "Relative", value: "relative" }, { label: "Sticky", value: "sticky" }]}
                        value={position}
                        onChange={(v) => { setPosition(v); setKey((k) => k + 1); }}
                    />
                    <label className="ctrl-check">
                        <input type="checkbox" checked={dismissible} onChange={(e) => { setDismissible(e.target.checked); setKey((k) => k + 1); }} />
                        Dismissible
                    </label>
                    <button className="btn btn-ghost btn-sm" onClick={() => setKey((k) => k + 1)}>↺ Reset</button>
                </div>
                <div className="controls-row" style={{ marginBottom: 20 }}>
                    <span className="ctrl-label">Message</span>
                    <input
                        className="ctrl-input"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        style={{ flex: 1, minWidth: 200 }}
                    />
                </div>
                <div className="preview-area" style={{ padding: 0, flexDirection: "column" }}>
                    <div style={{ width: "100%", background: "white", borderRadius: "var(--radius-md)", overflow: "hidden", border: "1px solid var(--border)" }}>
                        <Banner key={key} message={message} dismissible={dismissible} position={position} />
                        <div style={{ padding: "20px 18px", fontSize: "0.85rem", color: "var(--text-subtle)" }}>
                            Page content below the banner sits here...
                        </div>
                    </div>
                </div>
            </div>

            <div className="card-footer">
                <PropTable
                    rows={[
                        { prop: "message", type: "string", description: "Text content of the banner" },
                        { prop: "dismissible", type: "boolean", default: "false", description: "Adds a × close button" },
                        { prop: "position", type: '"sticky" | "relative"', default: '"relative"', description: "Sticky pins to viewport top" },
                    ]}
                />
            </div>
        </div>
    );
}