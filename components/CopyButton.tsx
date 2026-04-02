"use client";

import { Check, CopyIcon } from "lucide-react";
import { useState } from "react";

export default function CopyButton({ text }: { text: string }) {
    const [copied, setCopied] = useState(false);
    const copy = () => {
        navigator.clipboard.writeText(text).catch(() => { });
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    return (
        <button
            className="flex items-center justify-center gap-1.5 border-l border-(--border-dark) bg-[rgba(110,139,82,0.2)] px-4.5 py-3.5 text-[0.78rem] font-semibold tracking-[0.04em] text-(--accent-light) transition-colors hover:bg-[rgba(110,139,82,0.35)] max-[640px]:justify-center max-[640px]:border-t max-[640px]:border-l-0"
            onClick={copy}
            aria-label="Copy install command"
        >
            {copied ? <Check /> : <CopyIcon />}
            {copied ? "Copied!" : "Copy"}
        </button>
    );
}
