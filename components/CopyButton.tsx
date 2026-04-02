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
        <button className="install-bar__copy" onClick={copy} aria-label="Copy install command">
            {copied ? <Check /> : <CopyIcon />}
            {copied ? "Copied!" : "Copy"}
        </button>
    );
}