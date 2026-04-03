"use client";

import { useState } from "react";
import { Block } from "react-wip-ui";
import CodeChip from "../CodeChip";
import { ControlCheck, ControlsRow } from "../Controls";
import { DemoCard, DemoCardBody, DemoCardFooter, DemoCardHeader } from "../DemoCard";
import PropTable from "../PropTable";
import Tag from "../Tag";

export default function BlockDemo() {
    const [disabled, setDisabled] = useState(false);

    return (
        <DemoCard >
            <DemoCardHeader>
                <div className="flex flex-col md:flex-row items-start justify-between gap-3">
                    <div className="grid gap-1.5">
                        <div className="flex items-center gap-2.5">
                            <h3 className="font-sans text-lg tracking-wide">Block</h3>
                            <Tag type="server" />
                        </div>
                        <p className="text-sm text-(--text-muted)">
                            Disables pointer events and text selection on children.
                        </p>
                    </div>
                    <CodeChip>{"<Block />"}</CodeChip>
                </div>
            </DemoCardHeader>

            <DemoCardBody>
                <ControlsRow className="mb-5">
                    <ControlCheck className="text-sm text-(--text-primary)">
                        <input type="checkbox" checked={disabled} onChange={(event) => setDisabled(event.target.checked)} />
                        Allow interaction (disabled=true)
                    </ControlCheck>
                </ControlsRow>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4 overflow-hidden rounded-md border border-(--border)
                    bg-[radial-gradient(circle_at_1px_1px,var(--border)_1px,transparent_0)] bg-size-[24px_24px] px-4 md:px-6 py-6">
                    <Block disabled={disabled}>
                        <div className="rounded-md border border-(--border) bg-white p-4 shadow-(--shadow-xs)" style={{ opacity: disabled ? 1 : 0.65 }}>
                            <label className="mb-2 block text-xs font-semibold uppercase text-(--text-subtle)">Subscription</label>
                            <input className="mb-2 w-full rounded-xs border border-(--border) bg-(--bg-surface) px-4 py-2 font-sans text-sm outline-none" placeholder="your@email.com" />
                            <div className="flex gap-1.5 mt-1">
                                <div className="flex-1 px-2 py-1.5 bg-(--accent) text-white rounded-sm text-sm text-center">
                                    Subscribe
                                </div>
                                <div className="flex-1 px-2 py-1.5 border border-(--border) rounded-sm text-sm text-center">
                                    Skip
                                </div>
                            </div>
                        </div>
                    </Block>
                    <div className="text-sm text-(--text-muted)">
                        {disabled ? "Interaction re-enabled." : "Pointer events are blocked. Try clicking the form."}
                    </div>
                </div>
            </DemoCardBody>

            <DemoCardFooter>
                <PropTable
                    rows={[
                        { prop: "disabled", type: "boolean", default: "false", description: "When true, removes the block" },
                        { prop: "children", type: "ReactNode", description: "Content to be blocked" },
                    ]}
                />
            </DemoCardFooter>
        </DemoCard>
    );
}
