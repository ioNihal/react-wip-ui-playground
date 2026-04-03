"use client";

import PropTable from "../PropTable";
import PillToggle from "../PillToggle";
import CodeChip from "../CodeChip";
import { ControlCheck, ControlInput, ControlLabel, ControlsRow } from "../Controls";
import { DemoCard, DemoCardBody, DemoCardFooter, DemoCardHeader } from "../DemoCard";
import { useState } from "react";
import { fadeUpClass, previewAreaClass } from "../styles";
import Tag from "../Tag";
import { Ribbon } from "react-wip-ui";

export default function RibbonDemo() {
    const [position, setPosition] = useState<"top-left" | "top-right">("top-right");
    const [variant, setVariant] = useState<"solid" | "outline">("solid");
    const [text, setText] = useState("WIP");
    const [disabled, setDisabled] = useState(false);

    return (
        <DemoCard className={fadeUpClass}>
            <DemoCardHeader>
                <div className="flex flex-wrap items-start justify-between gap-3 max-[640px]:gap-2.5">
                    <div className="grid gap-1.5">
                        <div className="flex items-center gap-2.5">
                            <h3 className="font-sans text-[1rem]">Ribbon</h3>
                            <Tag type="server" />
                        </div>
                        <p className="m-0 text-[0.82rem] leading-[1.6] text-[var(--text-muted)]">
                            A diagonal corner ribbon for any positioned container.
                        </p>
                    </div>
                    <CodeChip>{"<Ribbon />"}</CodeChip>
                </div>
            </DemoCardHeader>

            <DemoCardBody>
                <div className="mb-5 flex flex-col gap-3 max-[640px]:mb-4 max-[640px]:gap-2.5">
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

                <div className={previewAreaClass}>
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
                        <span className="text-[0.8rem] text-[var(--text-subtle)]">Card content</span>
                        <Ribbon position={position} text={text || "WIP"} variant={variant} disabled={disabled} />
                    </div>
                </div>
            </DemoCardBody>

            <DemoCardFooter>
                <PropTable
                    rows={[
                        { prop: "position", type: '"top-left" | "top-right"', default: '"top-right"', description: "Which corner the ribbon appears in" },
                        { prop: "text", type: "string", default: '"WIP"', description: "Label text on the ribbon" },
                        { prop: "variant", type: '"solid" | "outline"', default: '"solid"', description: "Filled or outlined ribbon style" },
                        { prop: "disabled", type: "boolean", default: "false", description: "When true, renders nothing" },
                    ]}
                />
            </DemoCardFooter>
        </DemoCard>
    );
}
