import type { ReactNode } from "react";

export function DemoCard({ children, className = "" }: { children: ReactNode; className?: string }) {
    return (
        <div className={`overflow-hidden rounded-lg border border-(--border) bg-(--bg-card) transition-shadow duration-200 hover:shadow-(--shadow-md) ${className}`}>
            {children}
        </div>
    );
}

export function DemoCardHeader({ children }: { children: ReactNode }) {
    return (
        <div className="border-b border-(--border) px-4 md:px-6 py-6">
            {children}
        </div>
    );
}

export function DemoCardBody({ children }: { children: ReactNode }) {
    return <div className="px-4 md:px-6 py-6">{children}</div>;
}

export function DemoCardFooter({ children }: { children: ReactNode }) {
    return (
        <div className="border-t border-(--border) bg-(--bg-surface) px-4 md:px-6 py-6">
            {children}
        </div>
    );
}
