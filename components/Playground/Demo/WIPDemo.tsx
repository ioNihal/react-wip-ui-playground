"use client";

import { useState } from "react";
import { WIP } from "react-wip-ui/client";
import CodeChip from "../CodeChip";
import { ControlCheck, ControlsRow } from "../Controls";
import { DemoCard, DemoCardBody, DemoCardFooter, DemoCardHeader } from "../DemoCard";
import PropTable from "../PropTable";
import Tag from "../Tag";

export default function WIPDemo() {
    const [when, setWhen] = useState(true);

    return (
        <DemoCard className="animate-fade-up">
            <DemoCardHeader>
                <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="grid gap-1.5">
                        <div className="flex items-center gap-2.5">
                            <h3 className="font-sans text-lg tracking-wide">WIP Wrapper</h3>
                            <Tag type="client" />
                        </div>
                        <p className="text-sm text-(--text-muted)">
                            Composable wrapper with conditional WIP treatment.
                        </p>
                    </div>
                    <CodeChip>{"<WIP when={...} />"}</CodeChip>
                </div>
            </DemoCardHeader>

            <DemoCardBody>
                <ControlsRow className="mb-5">
                    <ControlCheck className="text-sm font-medium text-(--text-primary)">
                        <input type="checkbox" checked={when} onChange={(event) => setWhen(event.target.checked)} />
                        WIP active
                    </ControlCheck>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold"
                        style={{
                            background: when ? "#FFF4E8" : "#EBF4E8",
                            color: when ? "#A87040" : "#367A35",
                            border: `1.5px solid ${when ? "#E8C8A0" : "#BCDAB4"}`,
                        }}
                    >
                        {when ? "WIP active" : "Live"}
                    </span>
                </ControlsRow>

                <div className="flex items-center justify-center gap-4 overflow-hidden rounded-md border border-(--border)
                    bg-[radial-gradient(circle_at_1px_1px,var(--border)_1px,transparent_0)] bg-size-[24px_24px] px-4 md:px-6 py-6">
                    <WIP when={when}>
                        <div className="w-50 rounded-md border border-(--border) bg-white p-4 shadow-xs">
                            <div className="mb-2.5 text-xs font-bold uppercase tracking-wider text-(--text-subtle)">
                                New Dashboard
                            </div>
                            <div className="flex flex-col gap-1.5">
                                {[70, 45, 85].map((w, i) => (
                                    <div key={i} className="h-1.5 bg-(--bg-muted) rounded-xl overflow-hidden">
                                        <div style={{ width: `${w}%`, height: "100%" }} className="bg-(--accent) rounded-xl opacity-70" />
                                    </div>
                                ))}
                            </div>
                            <div className="mt-3 flex gap-1.5">
                                <div className="flex-1 h-7 bg-(--bg-muted) rounded-md" />
                                <div className="h-7 w-7 bg-(--bg-muted) rounded-md" />
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
