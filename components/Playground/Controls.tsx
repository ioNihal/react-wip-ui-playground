import type { InputHTMLAttributes, ReactNode } from "react";

export function ControlsRow({ children, className = "" }: { children: ReactNode; className?: string }) {
    return <div className={`flex flex-wrap items-center gap-2.5 gap-y-2.5 max-[640px]:items-start ${className}`}>{children}</div>;
}

export function ControlLabel({ children }: { children: ReactNode }) {
    return (
        <span className="text-[0.75rem] font-semibold uppercase tracking-[0.04em] text-[var(--text-subtle)]">
            {children}
        </span>
    );
}

export function ControlInput(props: InputHTMLAttributes<HTMLInputElement>) {
    const { className = "", ...rest } = props;
    return (
        <input
            {...rest}
            className={`rounded-[var(--radius-sm)] border border-[var(--border)] bg-white px-2.5 py-1.5 font-sans text-[0.82rem] text-[var(--text-primary)] outline-none transition-colors focus:border-[var(--accent)] ${className}`}
        />
    );
}

export function ControlCheck({ children, className = "" }: { children: ReactNode; className?: string }) {
    return (
        <label className={`flex cursor-pointer items-center gap-1.5 text-[0.82rem] text-[var(--text-muted)] ${className}`}>
            {children}
        </label>
    );
}
