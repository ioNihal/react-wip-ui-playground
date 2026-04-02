import type { ReactNode } from "react";

export default function SectionLabel({ children }: { children: ReactNode }) {
    return (
        <div className="my-[clamp(36px,5vw,44px)] mb-6 flex items-center gap-3.5 max-[640px]:my-8 max-[640px]:mb-5">
            <span className="h-px flex-1 bg-(--border) max-[640px]:hidden" />
            <span className="bg-(--bg-base) px-1 text-center text-[0.68rem] font-bold uppercase tracking-[0.12em] text-(--text-subtle) max-[640px]:whitespace-normal">
                {children}
            </span>
            <span className="h-px flex-1 bg-(--border) max-[640px]:hidden" />
        </div>
    );
}
