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
                <div className="flex flex-wrap items-start justify-between gap-3 max-[640px]:gap-2.5">
                    <div className="grid gap-1.5">
                        <div className="flex items-center gap-2.5">
                            <h3 className="font-(--font-sans) text-[1rem]">Block</h3>
                            <Tag type="server" />
                        </div>
                        <p className="m-0 text-[0.82rem] leading-[1.6] text-(--text-muted)">
                            Disables pointer events and text selection on children.
                        </p>
                    </div>
                    <CodeChip>{"<Block />"}</CodeChip>
                </div>
            </DemoCardHeader>

            <DemoCardBody>
                <ControlsRow className="mb-5">
                    <ControlCheck className="text-[0.85rem] text-(--text-primary)">
                        <input type="checkbox" checked={disabled} onChange={(event) => setDisabled(event.target.checked)} />
                        Allow interaction (disabled=true)
                    </ControlCheck>
                </ControlsRow>

                <div className="preview-area" style={{ gap: 24 }}>
                    <Block disabled={disabled}>
                        <div className="mock-card" style={{ opacity: disabled ? 1 : 0.65 }}>
                            <label className="mock-label">Subscription</label>
                            <input className="mock-input" placeholder="your@email.com" />
                            <div style={{ display: "flex", gap: 6, marginTop: 4 }}>
                                <div
                                    style={{
                                        flex: 1,
                                        padding: "8px",
                                        background: "var(--accent)",
                                        color: "white",
                                        borderRadius: "var(--radius-sm)",
                                        fontSize: "0.8rem",
                                        textAlign: "center",
                                    }}
                                >
                                    Subscribe
                                </div>
                                <div
                                    style={{
                                        padding: "8px 12px",
                                        border: "1px solid var(--border)",
                                        background: "white",
                                        borderRadius: "var(--radius-sm)",
                                        fontSize: "0.8rem",
                                    }}
                                >
                                    Skip
                                </div>
                            </div>
                        </div>
                    </Block>
                    <div className="max-w-45 text-[0.78rem] leading-[1.65] text-(--text-muted)">
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
