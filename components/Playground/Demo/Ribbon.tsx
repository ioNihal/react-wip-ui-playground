"use client";

import PropTable from "../PropTable";
import PillToggle from "../PillToggle";
import CodeChip from "../CodeChip";
import { useState } from "react";
import Tag from "../Tag";
import { Ribbon } from "react-wip-ui";

export default function RibbonDemo() {
    const [position, setPosition] = useState<"top-left" | "top-right">("top-right");
    const [variant, setVariant] = useState<"solid" | "outline">("solid");
    const [text, setText] = useState("WIP");
    const [disabled, setDisabled] = useState(false);

    return (
        <div className="card fade-up">
            <div className="card-header">
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                            <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "1rem" }}>Ribbon</h3>
                            <Tag type="server" />
                        </div>
                        <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", margin: 0 }}>
                            A diagonal corner ribbon for any positioned container.
                        </p>
                    </div>
                    <CodeChip>{"<Ribbon />"}</CodeChip>
                </div>
            </div>

            <div className="card-body">
                <div className="controls-row" style={{ marginBottom: 20, rowGap: 10 }}>
                    <span className="ctrl-label">Position</span>
                    <PillToggle
                        options={[{ label: "Top Left", value: "top-left" }, { label: "Top Right", value: "top-right" }]}
                        value={position}
                        onChange={setPosition}
                    />
                    <span className="ctrl-label">Variant</span>
                    <PillToggle
                        options={[{ label: "Solid", value: "solid" }, { label: "Outline", value: "outline" }]}
                        value={variant}
                        onChange={setVariant}
                    />
                    <input
                        className="ctrl-input"
                        value={text}
                        maxLength={12}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Label"
                        style={{ width: 100 }}
                    />
                    <label className="ctrl-check">
                        <input
                            type="checkbox"
                            checked={disabled}
                            onChange={(e) => setDisabled(e.target.checked)}
                        />
                        Disabled
                    </label>
                </div>

                <div className="preview-area">
                    <div
                        style={{
                            position: "relative",
                            width: 190,
                            height: 130,
                            background: "white",
                            borderRadius: "var(--radius-md)",
                            border: "1px solid var(--border)",
                            overflow: "hidden",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "var(--shadow-sm)",
                        }}
                    >
                        <span style={{ fontSize: "0.8rem", color: "var(--text-subtle)" }}>Card content</span>
                        <Ribbon position={position} text={text || "WIP"} variant={variant} disabled={disabled} />
                    </div>
                </div>
            </div>

            <div className="card-footer">
                <PropTable
                    rows={[
                        { prop: "position", type: '"top-left" | "top-right"', default: '"top-right"', description: "Which corner the ribbon appears in" },
                        { prop: "text", type: "string", default: '"WIP"', description: "Label text on the ribbon" },
                        { prop: "variant", type: '"solid" | "outline"', default: '"solid"', description: "Filled or outlined ribbon style" },
                        { prop: "disabled", type: "boolean", default: "false", description: "When true, renders nothing" },
                    ]}
                />
            </div>
        </div>
    );
}