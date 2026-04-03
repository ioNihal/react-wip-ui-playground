import type { ReactNode } from "react";

export function DemoCard({ children, className = "" }: { children: ReactNode; className?: string }) {
    return (
        <div className={`overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--bg-card)] transition-shadow duration-200 hover:shadow-[var(--shadow-md)] ${className}`}>
            {children}
        </div>
    );
}

export function DemoCardHeader({ children }: { children: ReactNode }) {
    return (
        <div className="border-b border-[var(--border)] px-[clamp(16px,2vw,22px)] pt-[clamp(16px,2vw,24px)] pb-3.5">
            {children}
        </div>
    );
}

export function DemoCardBody({ children }: { children: ReactNode }) {
    return <div className="px-[clamp(16px,2vw,22px)] py-[clamp(16px,2vw,24px)]">{children}</div>;
}

export function DemoCardFooter({ children }: { children: ReactNode }) {
    return (
        <div className="border-t border-[var(--border)] bg-[var(--bg-surface)] px-[clamp(16px,2vw,22px)] py-3.5">
            {children}
        </div>
    );
}
