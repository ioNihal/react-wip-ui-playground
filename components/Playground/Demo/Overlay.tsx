"use client";

import { useState } from "react";
import { Overlay } from "react-wip-ui";
import CodeChip from "../CodeChip";
import { ControlCheck, ControlInput, ControlLabel, ControlsRow } from "../Controls";
import { DemoCard, DemoCardBody, DemoCardFooter, DemoCardHeader } from "../DemoCard";
import PropTable from "../PropTable";
import Tag from "../Tag";

export default function OverlayDemo() {
    const [message, setMessage] = useState("Coming Soon");
    const [disabled, setDisabled] = useState(false);

    return (
        <DemoCard className="animate-fade-up">
            <DemoCardHeader>
                <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="grid gap-1.5">
                        <div className="flex items-center gap-2.5">
                            <h3 className="font-sans text-lg tracking-wide">Overlay</h3>
                            <Tag type="server" />
                        </div>
                        <p className="text-sm text-(--text-muted)">
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
                        className="flex-1 sm:max-w-50"
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

                <div className="flex items-center justify-center gap-4 overflow-hidden rounded-md border border-(--border)
                    bg-[radial-gradient(circle_at_1px_1px,var(--border)_1px,transparent_0)] bg-size-[24px_24px] px-4 md:px-6 py-6">
                    <Overlay message={message || "Coming Soon"} disabled={disabled}>
                        <div className="w-50 max-w-full rounded-md border border-(--border) bg-white p-4 shadow-(--shadow-xs)">
                            <label className="mb-2 block text-xsfont-semibold uppercase text-(--text-subtle)">Email</label>
                            <input className="mb-2 w-full rounded-xs border border-(--border) bg-(--bg-surface) px-3 py-2 font-sans text-sm outline-none" defaultValue="user@example.com" readOnly />
                            <label className="mb-2 block text-xsfont-semibold uppercase text-(--text-subtle)">Plan</label>
                            <input className="mb-2 w-full rounded-xs border border-(--border) bg-(--bg-surface) px-3 py-2 font-sans text-sm outline-none" defaultValue="Pro - $29/mo" readOnly />
                            <div className="mt-2 rounded-sm px-2 py-2 text-center text-[0.8rem] text-white bg-(--accent)">
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
