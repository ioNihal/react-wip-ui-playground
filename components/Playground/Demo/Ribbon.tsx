"use client";

import PropTable from "../PropTable";
import PillToggle from "../PillToggle";
import CodeChip from "../CodeChip";
import { ControlCheck, ControlInput, ControlLabel, ControlsRow } from "../Controls";
import { DemoCard, DemoCardBody, DemoCardFooter, DemoCardHeader } from "../DemoCard";
import { useState } from "react";
import Tag from "../Tag";
import { Ribbon } from "react-wip-ui";

export default function RibbonDemo() {
    const [position, setPosition] = useState<"top-left" | "top-right">("top-right");
    const [variant, setVariant] = useState<"solid" | "outline">("solid");
    const [text, setText] = useState("WIP");
    const [disabled, setDisabled] = useState(false);
    const [theme, setTheme] = useState<"light" | "dark">("light");

    return (
        <DemoCard className="animate-fade-up">
            <DemoCardHeader>
                <div className="flex flex-col md:flex-row items-start justify-between gap-3">
                    <div className="grid gap-1.5">
                        <div className="flex items-center gap-2.5">
                            <h3 className="font-sans text-lg tracking-wide">Ribbon</h3>
                            <Tag type="server" />
                        </div>
                        <p className="text-sm text-(--text-muted)">
                            A diagonal corner ribbon for any positioned container.
                        </p>
                    </div>
                    <CodeChip>{"<Ribbon />"}</CodeChip>
                </div>
            </DemoCardHeader>

            <DemoCardBody>
                <div className="mb-5 flex flex-col gap-3">
                    <ControlsRow>
                        <ControlLabel>Position</ControlLabel>
                        <PillToggle
                            options={[{ label: "Top Left", value: "top-left" }, { label: "Top Right", value: "top-right" }]}
                            value={position}
                            onChange={setPosition}
                        />
                        <ControlLabel>Variant</ControlLabel>
                        <PillToggle
                            options={[{ label: "Solid", value: "solid" }, { label: "Outline", value: "outline" }]}
                            value={variant}
                            onChange={setVariant}
                        />
                        <ControlLabel>Theme</ControlLabel>
                        <PillToggle
                            options={[{ label: "Light", value: "light" }, { label: "Dark", value: "dark" }]}
                            value={theme}
                            onChange={setTheme}
                        />
                    </ControlsRow>
                    <ControlsRow>
                        <ControlInput
                            className="w-full sm:w-25"
                            value={text}
                            maxLength={12}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Label"
                        />
                        <ControlCheck>
                            <input
                                type="checkbox"
                                checked={disabled}
                                onChange={(e) => setDisabled(e.target.checked)}
                            />
                            Disabled
                        </ControlCheck>
                    </ControlsRow>
                </div>

                <div className="flex items-center justify-center gap-4 overflow-hidden rounded-md border border-(--border)
                    bg-[radial-gradient(circle_at_1px_1px,var(--border)_1px,transparent_0)] bg-size-[24px_24px] px-4 md:px-6 py-6">
                    <div className="relative w-48 h-32 bg-white rounded-md border border-(--border) overflow-hidden flex items-center justify-center shadow-sm">
                        <span className="text-[0.8rem] text-(--text-subtle)">Card content</span>
                        <Ribbon position={position} text={text || "WIP"} variant={variant} disabled={disabled} theme={theme} />
                    </div>
                </div>
            </DemoCardBody>

            <DemoCardFooter>
                <PropTable
                    rows={[
                        { prop: "position", type: '"top-left" | "top-right"', default: '"top-right"', description: "Which corner the ribbon appears in" },
                        { prop: "text", type: "string", default: '"WIP"', description: "Label text on the ribbon" },
                        { prop: "variant", type: '"solid" | "outline"', default: '"solid"', description: "Filled or outlined ribbon style" },
                        { prop: "theme", type: "'light' | 'dark'", default: '"light"', description: "Color theme for the ribbon" },
                        { prop: "colors", type: "{ bg?: string, text?: string }", description: "Custom background and text colors" },
                        { prop: "disabled", type: "boolean", default: "false", description: "When true, renders nothing" },
                    ]}
                />
            </DemoCardFooter>
        </DemoCard>
    );
}
