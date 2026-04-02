import type { InputHTMLAttributes, ReactNode } from "react";

export function ControlsRow({ children, className = "" }: { children: ReactNode; className?: string }) {
    return <div className={`flex flex-wrap items-center gap-2.5ogap-y-2.5x-[640px]:items-start ${className}`}>{children}</div>;
}

export function ControlLabel({ children }: { children: ReactNode }) {
    return (
        <span className="text-[0.75rem] font-semibold uppercase tracking-[0.04em] text-(--text-subtle)">
            {children}
        </span>
    );
}

export function ControlInput(props: InputHTMLAttributes<HTMLInputElement>) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { className = "", ...rest } = props;
    return (
        <input
            {...rest}
            className={`rounded-smborder-[var(--boborder-(--borderpx-2.py-1.5ont-[var(--font-sans)] text-[0.82rem] text-(--text-primary)ine-none transition-colors focusfocus:border-(--accent)assName}`}
        />
    );
}

export function ControlCheck({ children, className = "" }: { children: ReactNode; className?: string }) {
    return (
        <label className={`flex cursor-pointer items-center gap-1.5 text-[0.82rem] text-(--text-muted) ${className}`}>
            {children}
        </label>
    );
}
