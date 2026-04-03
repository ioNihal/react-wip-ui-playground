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
            className="flex items-center justify-center gap-1.5 border-l border-(--border-dark) bg-(--accent)/30 px-4.5 py-3.5 
            text-sm font-semibold text-(--accent-light) transition-all hover:bg-(--accent)/50"
            onClick={copy}
            aria-label={`Copy "${text}" to clipboard`}
        >
            {copied ? <Check /> : <CopyIcon />}
            {copied ? "Copied!" : "Copy"}
        </button>
    );
}
