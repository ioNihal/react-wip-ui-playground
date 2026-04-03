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
        <DemoCard className="animate-fade-up">
            <DemoCardHeader>
                <div className="flex items-start justify-between gap-3">
                    <div className="grid gap-1.5">
                        <div className="flex items-center gap-2.5">
                            <h3 className="font-sans text-lg tracking-wide">Banner</h3>
                            <Tag type="client" />
                        </div>
                        <p className="text-sm text-(--text-muted)">
                            Announcement bar with sticky or relative positioning.
                        </p>
                    </div>
                    <CodeChip>{"<Banner />"}</CodeChip>
                </div>
            </DemoCardHeader>

            <DemoCardBody>
                <div className="mb-5 flex flex-col gap-3">
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
                        <button className="inline-flex items-center justify-center gap-2 rounded-sm px-4 py-2 text-sm font-semibold transition-all duration-200
                            bg-transparent text-(--text-muted) hover:bg-(--bg-muted) hover:text-(--text-primary)"
                            onClick={() => setKey((current) => current + 1)}>
                            Reset
                        </button>
                    </ControlsRow>
                    <ControlsRow>
                        <ControlLabel>Message</ControlLabel>
                        <ControlInput
                            className="flex-1"
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                        />
                    </ControlsRow>
                </div>
                <div className="relative flex-flex items-center justify-center gap-4 overflow-hidden rounded-md border border-(--border) 
                    bg-[radial-gradient(circle_at_1px_1px,var(--border)_1px,transparent_0)] bg-size-[24px_24px] px-4 md:px-6 py-6">
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
