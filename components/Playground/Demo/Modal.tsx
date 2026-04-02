"use client";

import { useState } from "react";
import Tag from "../Tag";
import CodeChip from "../CodeChip";
import { Modal } from "react-wip-ui/client";
import PropTable from "../PropTable";

export default function ModalDemo() {
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState("Feature Under Construction");
    const [description, setDescription] = useState("This module is being actively built. Check back soon for the full experience.");

    return (
        <div className="card fade-up delay-1">
            <div className="card-header">
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                            <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "1rem" }}>Modal</h3>
                            <Tag type="client" />
                        </div>
                        <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", margin: 0 }}>
                            Accessible dialog with backdrop blur and slide-up animation.
                        </p>
                    </div>
                    <CodeChip>{"<Modal />"}</CodeChip>
                </div>
            </div>

            <div className="card-body">
                <div className="controls-row" style={{ marginBottom: 12 }}>
                    <span className="ctrl-label">Title</span>
                    <input className="ctrl-input" value={title} onChange={(e) => setTitle(e.target.value)} style={{ flex: 1, minWidth: 180 }} />
                </div>
                <div className="controls-row" style={{ marginBottom: 20 }}>
                    <span className="ctrl-label">Description</span>
                    <input className="ctrl-input" value={description} onChange={(e) => setDescription(e.target.value)} style={{ flex: 1, minWidth: 180 }} />
                </div>

                <div className="preview-area">
                    <button className="btn btn-primary highlight" onClick={() => setIsOpen(true)}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        Open Modal
                    </button>
                    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={title} description={description} />
                </div>
            </div>

            <div className="card-footer">
                <PropTable
                    rows={[
                        { prop: "isOpen", type: "boolean", description: "Controls modal visibility" },
                        { prop: "onClose", type: "() => void", description: "Called on close (Esc or × button)" },
                        { prop: "title", type: "string", description: "Modal heading" },
                        { prop: "description", type: "string", description: "Supporting body text" },
                    ]}
                />
            </div>
        </div>
    );
}