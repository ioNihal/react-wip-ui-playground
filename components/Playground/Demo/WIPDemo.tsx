"use client";

import { useState } from "react";
import { WIP } from "react-wip-ui/client";
import CodeChip from "../CodeChip";
import { ControlCheck, ControlsRow } from "../Controls";
import { DemoCard, DemoCardBody, DemoCardFooter, DemoCardHeader } from "../DemoCard";
import PropTable from "../PropTable";
import { delayClass, fadeUpClass, mockCardClass, previewAreaClass } from "../styles";
import Tag from "../Tag";

export default function WIPDemo() {
    const [when, setWhen] = useState(true);

    return (
        <DemoCard className={`${fadeUpClass} ${delayClass(2)}`}>
            <DemoCardHeader>
                <div className="flex flex-wrap items-start justify-between gap-3 max-[640px]:gap-2.5">
                    <div className="grid gap-1.5">
                        <div className="flex items-center gap-2.5">
                            <h3 className="font-sans text-[1rem]">WIP Wrapper</h3>
                            <Tag type="client" />
                        </div>
                        <p className="m-0 text-[0.82rem] leading-[1.6] text-[var(--text-muted)]">
                            Composable wrapper with conditional WIP treatment.
                        </p>
                    </div>
                    <CodeChip>{"<WIP when={...} />"}</CodeChip>
                </div>
            </DemoCardHeader>

            <DemoCardBody>
                <ControlsRow className="mb-5">
                    <ControlCheck className="text-[0.88rem] font-medium text-[var(--text-primary)]">
                        <input type="checkbox" checked={when} onChange={(event) => setWhen(event.target.checked)} />
                        WIP active
                    </ControlCheck>
                    <span
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 6,
                            padding: "4px 12px",
                            borderRadius: "var(--radius-full)",
                            fontSize: "0.72rem",
                            fontWeight: 700,
                            background: when ? "#FFF4E8" : "#EBF4E8",
                            color: when ? "#A87040" : "#367A35",
                            border: `1.5px solid ${when ? "#E8C8A0" : "#BCDAB4"}`,
                        }}
                    >
                        {when ? "WIP active" : "Live"}
                    </span>
                </ControlsRow>

                <div className={previewAreaClass}>
                    <WIP when={when}>
                        <div className={`${mockCardClass} w-[210px]`}>
                            <div className="mb-2.5 text-[0.7rem] font-bold uppercase tracking-[0.08em] text-[var(--text-subtle)]">
                                New Dashboard
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                                {[70, 45, 85].map((w, i) => (
                                    <div key={i} style={{ height: 7, background: "var(--bg-muted)", borderRadius: 99, overflow: "hidden" }}>
                                        <div style={{ width: `${w}%`, height: "100%", background: "var(--accent)", borderRadius: 99, opacity: 0.7 }} />
                                    </div>
                                ))}
                            </div>
                            <div style={{ marginTop: 12, display: "flex", gap: 6 }}>
                                <div style={{ flex: 1, height: 28, background: "var(--bg-muted)", borderRadius: "var(--radius-sm)" }} />
                                <div style={{ width: 28, height: 28, background: "var(--bg-muted)", borderRadius: "var(--radius-sm)" }} />
                            </div>
                        </div>
                    </WIP>
                </div>
            </DemoCardBody>

            <DemoCardFooter>
                <PropTable
                    rows={[
                        { prop: "when", type: "boolean", default: "true", description: "Activates WIP styling when true" },
                        { prop: "children", type: "ReactNode", description: "Feature being marked as WIP" },
                    ]}
                />
            </DemoCardFooter>
        </DemoCard>
    );
}
