"use client";

import { useState } from "react";
import { Modal } from "react-wip-ui/client";
import CodeChip from "../CodeChip";
import { ControlInput, ControlLabel, ControlsRow } from "../Controls";
import { DemoCard, DemoCardBody, DemoCardFooter, DemoCardHeader } from "../DemoCard";
import PropTable from "../PropTable";
import Tag from "../Tag";

export default function ModalDemo() {
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState("Feature Under Construction");
    const [description, setDescription] = useState("This module is being actively built. Check back soon for the full experience.");

    return (
        <DemoCard>
            <DemoCardHeader>
                <div className="flex flex-col md:flex-row items-start justify-between gap-3">
                    <div className="grid gap-1.5">
                        <div className="flex items-center gap-2.5">
                            <h3 className="font-sans text-lg tracking-wide">Modal</h3>
                            <Tag type="client" />
                        </div>
                        <p className="text-sm text-(--text-muted)">
                            Accessible dialog with backdrop blur and slide-up animation.
                        </p>
                    </div>
                    <CodeChip>{"<Modal />"}</CodeChip>
                </div>
            </DemoCardHeader>

            <DemoCardBody>
                <div className="mb-5 flex flex-col gap-3 max-[640px]:mb-4 max-[640px]:gap-2.5">
                    <ControlsRow>
                        <ControlLabel>Title</ControlLabel>
                        <ControlInput className="min-w-0 flex-1" value={title} onChange={(event) => setTitle(event.target.value)} />
                    </ControlsRow>
                    <ControlsRow>
                        <ControlLabel>Description</ControlLabel>
                        <ControlInput className="min-w-0 flex-1" value={description} onChange={(event) => setDescription(event.target.value)} />
                    </ControlsRow>
                </div>

                <div className="flex items-center justify-center gap-4 overflow-hidden rounded-md border border-(--border)
                    bg-[radial-gradient(circle_at_1px_1px,var(--border)_1px,transparent_0)] bg-size-[24px_24px] px-4 md:px-6 py-6">
                    <button className={`inline-flex items-center justify-center gap-2 rounded-sm border-2 px-4 py-2 text-sm font-semibold transition-all duration-200
                         border-(--accent) bg-(--accent) text-white shadow-[0_2px_8px_rgba(110,139,82,0.30)] hover:-translate-y-px hover:border-(--accent-hover) hover:bg-(--accent-hover)
                          hover:shadow-[0_4px_16px_rgba(110,139,82,0.35)] active:translate-y-0 animate-highlight-pulse`} onClick={() => setIsOpen(true)}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="8" x2="12" y2="12" />
                            <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        Open Modal
                    </button>
                    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={title} description={description} />
                </div>
            </DemoCardBody>

            <DemoCardFooter>
                <PropTable
                    rows={[
                        { prop: "isOpen", type: "boolean", description: "Controls modal visibility" },
                        { prop: "onClose", type: "() => void", description: "Called on close" },
                        { prop: "title", type: "string", description: "Modal heading" },
                        { prop: "description", type: "string", description: "Supporting body text" },
                    ]}
                />
            </DemoCardFooter>
        </DemoCard>
    );
}
