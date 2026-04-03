"use client";
import { Badge } from "react-wip-ui";
import PropTable from "../PropTable";
import CodeChip from "../CodeChip";
import { ControlCheck, ControlInput, ControlLabel, ControlsRow } from "../Controls";
import { DemoCard, DemoCardBody, DemoCardFooter, DemoCardHeader } from "../DemoCard";
import { useState } from "react";
import { mockCardClass, previewAreaClass } from "../styles";
import Tag from "../Tag";

export default function BadgeDemo() {
    const [text, setText] = useState("WIP");
    const [disabled, setDisabled] = useState(false);

    return (
        <DemoCard>
            <DemoCardHeader>
                <div className="flex flex-wrap items-start justify-between gap-3 max-[640px]:gap-2.5">
                    <div className="grid gap-1.5">
                        <div className="flex items-center gap-2.5">
                            <h3 className="font-sans text-[1rem]">Badge</h3>
                            <Tag type="server" />
                        </div>
                        <p className="m-0 text-[0.82rem] leading-[1.6] text-[var(--text-muted)]">
                            Inline label that attaches to any child element.
                        </p>
                    </div>
                    <CodeChip>{"<Badge />"}</CodeChip>
                </div>
            </DemoCardHeader>

            <DemoCardBody>
                <ControlsRow className="mb-5">
                    <ControlLabel>Text</ControlLabel>
                    <ControlInput
                        className="w-full sm:w-30"
                        value={text}
                        maxLength={16}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Badge label"
                    />
                    <ControlCheck>
                        <input type="checkbox" checked={disabled} onChange={(e) => setDisabled(e.target.checked)} />
                        Disabled
                    </ControlCheck>
                </ControlsRow>

                <div className={`${previewAreaClass} flex-col items-start px-7 py-6`}>
                    <div className="flex flex-col gap-3.5">
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
                            <div className={`${mockCardClass} flex w-auto items-center gap-[7px] border px-3 py-1.5 text-[0.82rem] text-[var(--text-muted)] shadow-none`}>
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                                Side nav link
                            </div>
                        </Badge>
                    </div>
                </div>
            </DemoCardBody>

            <DemoCardFooter>
                <PropTable
                    rows={[
                        { prop: "text", type: "string", default: '"WIP"', description: "Label shown in the pill" },
                        { prop: "disabled", type: "boolean", default: "false", description: "When true, hides the badge" },
                        { prop: "children", type: "ReactNode", description: "Element to badge" },
                    ]}
                />
            </DemoCardFooter>
        </DemoCard>
    );
}
