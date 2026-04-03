import type { ReactNode } from "react";

export default function SectionLabel({ children }: { children: ReactNode }) {
    return (
        <div className="my-6 mt-10 flex items-center gap-3.5">
            <span className="h-px hidden md:inline-block flex-1 bg-(--border)" />
            <span className="bg-(--bg-base) px-1 text-center text-xs font-bold uppercase text-(--text-subtle)">
                {children}
            </span>
            <span className="h-px hidden md:inline-block flex-1 bg-(--border)" />
        </div>
    );
}
