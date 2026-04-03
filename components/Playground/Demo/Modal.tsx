"use client";

import { useState } from "react";
import { Modal } from "react-wip-ui/client";
import CodeChip from "../CodeChip";
import { ControlInput, ControlLabel, ControlsRow } from "../Controls";
import { DemoCard, DemoCardBody, DemoCardFooter, DemoCardHeader } from "../DemoCard";
import PropTable from "../PropTable";
import { buttonBaseClass, buttonPrimaryClass, highlightClass, previewAreaClass } from "../styles";
import Tag from "../Tag";

export default function ModalDemo() {
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState("Feature Under Construction");
    const [description, setDescription] = useState("This module is being actively built. Check back soon for the full experience.");

    return (
        <DemoCard>
            <DemoCardHeader>
                <div className="flex flex-wrap items-start justify-between gap-3 max-[640px]:gap-2.5">
                    <div className="grid gap-1.5">
                        <div className="flex items-center gap-2.5">
                            <h3 className="font-sans text-[1rem]">Modal</h3>
                            <Tag type="client" />
                        </div>
                        <p className="m-0 text-[0.82rem] leading-[1.6] text-[var(--text-muted)]">
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

                <div className={previewAreaClass}>
                    <button className={`${buttonBaseClass} ${buttonPrimaryClass} ${highlightClass}`} onClick={() => setIsOpen(true)}>
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
