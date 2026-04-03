"use client";

import { useState } from "react";
import { Overlay } from "react-wip-ui";
import CodeChip from "../CodeChip";
import { ControlCheck, ControlInput, ControlLabel, ControlsRow } from "../Controls";
import { DemoCard, DemoCardBody, DemoCardFooter, DemoCardHeader } from "../DemoCard";
import PropTable from "../PropTable";
import { delayClass, fadeUpClass, mockCardClass, mockInputClass, mockLabelClass, previewAreaClass } from "../styles";
import Tag from "../Tag";

export default function OverlayDemo() {
    const [message, setMessage] = useState("Coming Soon");
    const [disabled, setDisabled] = useState(false);

    return (
        <DemoCard className={`${fadeUpClass} ${delayClass(2)}`}>
            <DemoCardHeader>
                <div className="flex flex-wrap items-start justify-between gap-3 max-[640px]:gap-2.5">
                    <div className="grid gap-1.5">
                        <div className="flex items-center gap-2.5">
                            <h3 className="font-sans text-[1rem]">Overlay</h3>
                            <Tag type="server" />
                        </div>
                        <p className="m-0 text-[0.82rem] leading-[1.6] text-[var(--text-muted)]">
                            Frosted glass overlay that blurs child content.
                        </p>
                    </div>
                    <CodeChip>{"<Overlay />"}</CodeChip>
                </div>
            </DemoCardHeader>

            <DemoCardBody>
                <ControlsRow className="mb-5">
                    <ControlLabel>Message</ControlLabel>
                    <ControlInput
                        className="min-w-0 flex-1 sm:max-w-50"
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        placeholder="Overlay message"
                    />
                    <ControlCheck>
                        <input
                            type="checkbox"
                            checked={disabled}
                            onChange={(event) => setDisabled(event.target.checked)}
                        />
                        Disabled
                    </ControlCheck>
                </ControlsRow>

                <div className={previewAreaClass}>
                    <Overlay message={message || "Coming Soon"} disabled={disabled}>
                        <div className={mockCardClass}>
                            <label className={mockLabelClass}>Email</label>
                            <input className={mockInputClass} defaultValue="user@example.com" readOnly />
                            <label className={mockLabelClass}>Plan</label>
                            <input className={mockInputClass} defaultValue="Pro - $29/mo" readOnly />
                            <div
                                className="mt-2 rounded-sm px-2 py-2 text-center text-[0.8rem] text-white"
                                style={{ background: "var(--accent)" }}
                            >
                                Save Changes
                            </div>
                        </div>
                    </Overlay>
                </div>
            </DemoCardBody>

            <DemoCardFooter>
                <PropTable
                    rows={[
                        { prop: "message", type: "string", default: '"Coming Soon"', description: "Text in the overlay pill" },
                        { prop: "disabled", type: "boolean", default: "false", description: "When true, removes the overlay" },
                        { prop: "children", type: "ReactNode", description: "Content underneath the overlay" },
                    ]}
                />
            </DemoCardFooter>
        </DemoCard>
    );
}
