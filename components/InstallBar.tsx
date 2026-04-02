import type { ReactNode } from "react";

export default function InstallBar({ children, action }: { children: ReactNode; action?: ReactNode }) {
    return (
        <div className="inline-flex w-[min(100%,38rem)] max-w-full overflow-hidden rounded-mdvar(--border-dark)] bg-(--bg-dark)[640px]:flex-col max-[640px]:items-stretch">
            <div className="min-w-0 overflow-x-auto px-5 py-3.5 font-(--font-mono) text-[0.9rem] tracking-[0.02em] text-[#C8D9B4] [scrollbar-width:none] max-[640px]:w-full [&::-webkit-scrollbar]:hidden">
                {children}
            </div>
            {action}
        </div>
    );
}
