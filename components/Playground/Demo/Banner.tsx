"use client";

import { useState } from "react";
import { Banner } from "react-wip-ui/client";
import CodeChip from "../CodeChip";
import { ControlCheck, ControlInput, ControlLabel, ControlsRow } from "../Controls";
import { DemoCard, DemoCardBody, DemoCardFooter, DemoCardHeader } from "../DemoCard";
import PillToggle from "../PillToggle";
import PropTable from "../PropTable";
import Tag from "../Tag";

export default function BannerDemo() {
    const [message, setMessage] = useState("This feature is under active development.");
    const [dismissible, setDismissible] = useState(true);
    const [position, setPosition] = useState<"sticky" | "relative">("relative");
    const [key, setKey] = useState(0);

    return (
        <DemoCard className="fade-up">
            <DemoCardHeader>
                <div className="flex flex-wrap items-start justify-between gap-3 max-[640px]:gap-2.5">
                    <div className="grid gap-1.5">
                        <div className="flex items-center gap-2.5">
                            <h3 className="font-(--font-sans) text-[1rem]">Banner</h3>
                            <Tag type="client" />
                        </div>
                        <p className="m-0 text-[0.82rem] leading-[1.6] text-(--text-muted)">
                            Announcement bar with sticky or relative positioning.
                        </p>
                    </div>
                    <CodeChip>{"<Banner />"}</CodeChip>
                </div>
            </DemoCardHeader>

            <DemoCardBody>
                <div className="mb-5 flex flex-col gap-3 max-[640px]:mb-4 max-[640px]:gap-2.5">
                    <ControlsRow>
                        <ControlLabel>Position</ControlLabel>
                        <PillToggle
                            options={[{ label: "Relative", value: "relative" }, { label: "Sticky", value: "sticky" }]}
                            value={position}
                            onChange={(value) => {
                                setPosition(value);
                                setKey((current) => current + 1);
                            }}
                        />
                        <ControlCheck>
                            <input
                                type="checkbox"
                                checked={dismissible}
                                onChange={(event) => {
                                    setDismissible(event.target.checked);
                                    setKey((current) => current + 1);
                                }}
                            />
                            Dismissible
                        </ControlCheck>
                        <button className="btn btn-ghost btn-sm" onClick={() => setKey((current) => current + 1)}>
                            Reset
                        </button>
                    </ControlsRow>
                    <ControlsRow>
                        <ControlLabel>Message</ControlLabel>
                        <ControlInput
                            className="min-w-0 flex-1"
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                        />
                    </ControlsRow>
                </div>
                <div className="preview-area flex-col p-0">
                    <div className="w-full overflow-hidden rounded-md border border-(--border) bg-white">
                        <Banner key={key} message={message} dismissible={dismissible} position={position} />
                        <div className="px-4.5 py-5 text-[0.85rem] text-(--text-subtle)">
                            Page content below the banner sits here...
                        </div>
                    </div>
                </div>
            </DemoCardBody>

            <DemoCardFooter>
                <PropTable
                    rows={[
                        { prop: "message", type: "string", description: "Text content of the banner" },
                        { prop: "dismissible", type: "boolean", default: "false", description: "Adds a close button" },
                        { prop: "position", type: '"sticky" | "relative"', default: '"relative"', description: "Sticky pins to viewport top" },
                    ]}
                />
            </DemoCardFooter>
        </DemoCard>
    );
}
