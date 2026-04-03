import type { ReactNode } from "react";

export default function InstallBar({ children, action }: { children: ReactNode; action?: ReactNode }) {
    return (
        <div className="inline-flex rounded-md border border-(--border-dark) bg-(--bg-dark) max-[640px]:flex-col max-[640px]:items-stretch">
            <div className="overflow-x-auto px-5 py-3.5 font-mono text-[#C8D9B4] [scrollbar-width:none] max-[640px]:w-full [&::-webkit-scrollbar]:hidden">
                {children}
            </div>
            {action}
        </div>
    );
}
