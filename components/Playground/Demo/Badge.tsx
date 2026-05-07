"use client";

import { Badge } from "react-wip-ui";
import PropTable from "../PropTable";
import CodeChip from "../CodeChip";
import { ControlCheck, ControlInput, ControlLabel, ControlsRow } from "../Controls";
import { DemoCard, DemoCardBody, DemoCardFooter, DemoCardHeader } from "../DemoCard";
import { useState } from "react";
import Tag from "../Tag";
import PillToggle from "../PillToggle";

export default function BadgeDemo() {
    const [text, setText] = useState("WIP");
    const [disabled, setDisabled] = useState(false);
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const [placement, setPlacement] = useState<"before" | "after">("after");

    return (
        <DemoCard>
            <DemoCardHeader>
                <div className="flex flex-col md:flex-row items-start justify-between gap-3">
                    <div className="grid gap-1.5">
                        <div className="flex items-center gap-2.5">
                            <h3 className="font-sans text-lg tracking-wide">Badge</h3>
                            <Tag type="server" />
                        </div>
                        <p className="text-sm text-(--text-muted)">
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
                <ControlsRow className="mb-5">
                    <ControlLabel>Theme</ControlLabel>
                    <PillToggle
                        options={[{ label: "Light", value: "light" }, { label: "Dark", value: "dark" }]}
                        value={theme}
                        onChange={setTheme}
                    />
                    <ControlLabel>Placement</ControlLabel>
                    <PillToggle
                        options={[{ label: "Before", value: "before" }, { label: "After", value: "after" }]}
                        value={placement}
                        onChange={setPlacement}
                    />
                </ControlsRow>

                <div className="relative overflow-hidden rounded-md border border-(--border) bg-[radial-gradient(circle_at_1px_1px,var(--border)_1px,transparent_0)] 
                    bg-size-[24px_24px] px-4 md:px-6 py-6">
                    <div className="flex flex-col gap-3.5">
                        <div className="flex items-center gap-2">
                            <Badge text={text || "WIP"} disabled={disabled} theme={theme} placement={placement}>
                                <button className="px-4 py-3 rounded-sm border border-(--border) bg-white text-sm cursor-pointer text-(--text-primary)">
                                    Pro Feature
                                </button>
                            </Badge>
                        </div>
                        <div className="flex items-center gap-2">
                            <Badge text={text || "WIP"} disabled={disabled} theme={theme} placement={placement}>
                                <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text-primary)" }}>
                                    Analytics Dashboard
                                </span>
                            </Badge>
                        </div>
                        <div className="flex items-center gap-2">
                            <Badge text={text || "WIP"} disabled={disabled} theme={theme} placement={placement}>
                                <div className="rounded-md border border-(--border) bg-white p-4
                                    flex items-center leading-0 gap-2 px-4 py-3 text-[0.82rem] text-(--text-muted)">
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                                    Side nav link
                                </div>
                            </Badge>
                        </div>
                    </div>
                </div>
            </DemoCardBody>

            <DemoCardFooter>
                <PropTable
                    rows={[
                        { prop: "text", type: "string", default: '"WIP"', description: "Label shown in the pill" },
                        { prop: "theme", type: "'light' | 'dark'", default: '"light"', description: "Color theme for the badge" },
                        { prop: "colors", type: "{ bg?: string, text?: string }", description: "Custom background and text colors" },
                        { prop: "placement", type: "'before' | 'after'", default: '"after"', description: "Position of the badge relative to children" },
                        { prop: "disabled", type: "boolean", default: "false", description: "When true, hides the badge" },
                        { prop: "children", type: "ReactNode", description: "Element to badge" },
                    ]}
                />
            </DemoCardFooter>
        </DemoCard>
    );
}
