import type { ReactNode } from "react";

export function DemoCard({ children }: { children: ReactNode }) {
    return (
        <div className={`overflow-hidden rounded-lg border border-(--border) bg-(--bg-card) transition-transform duration-200 hover:shadow-(--shadow-md)assName}`}>
            {children}
        </div>
    );
}

export function DemoCardHeader({ children }: { children: ReactNode }) {
    return (
        <div className="border-b border-(--border)clamp(16px,2vw,22px)] pt-[clamp(16px,2vw,24px)] pb-3.5">
            {children}
        </div>
    );
}

export function DemoCardBody({ children }: { children: ReactNode }) {
    return <div className="px-[clamp(16px,2vw,22px)] py-[clamp(16px,2vw,24px)]">{children}</div>;
}

export function DemoCardFooter({ children }: { children: ReactNode }) {
    return (
        <div className="border-t border-(--border) bg-(--bg-surface) px-[clamp(16px,2vw,22px)] py-3.5">
            {children}
        </div>
    );
}
