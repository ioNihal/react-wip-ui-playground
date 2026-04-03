export default function MiniDemoCard() {
    return (
        <div className="mx-auto max-w-130 overflow-hidden rounded-lg border border-(--border-dark) bg-(--bg-dark) shadow-(--shadow-xl)">
            <div className="flex items-center gap-1.5 border-b border-(--border-dark) px-4 py-2.5">
                {["#E96C6C", "#E9B96C", "#6CBE6C"].map((color) => (
                    <div
                        key={color}
                        className="h-2.75 w-2.75 rounded-full"
                        style={{ background: color }}
                    />
                ))}
                <span className="ml-2 font-mono text-xs leading-0 text-(--text-subtle)">
                    page.tsx
                </span>
            </div>
            <div className="overflow-x-auto px-4 py-4 font-mono text-xs lg:text-base leading-[1.8]">
                <div className="text-[#668855]">{"// Mark a feature as WIP in seconds"}</div>
                <div>
                    <span className="text-[#A8C890]">import</span>
                    <span className="text-[#C8D9B4]">{" { Ribbon } "}</span>
                    <span className="text-[#A8C890]">from</span>
                    <span className="text-[#D4C890]">{" 'react-wip-ui'"}</span>
                    <span className="text-[#C8D9B4]">;</span>
                </div>
                <div className="mt-2.5">
                    <span className="text-[#C8D9B4]">{"<"}</span>
                    <span className="text-[#90C8A8]">div</span>
                    <span className="text-[#A8C890]">{" style"}</span>
                    <span className="text-[#C8D9B4]">{"={{ position: 'relative' }}>"}</span>
                </div>
                <div className="pl-4.5">
                    <span className="text-[#C8D9B4]">{"<"}</span>
                    <span className="text-[#90C8A8]">Ribbon</span>
                    <span className="text-[#A8C890]">{" text"}</span>
                    <span className="text-[#C8D9B4]">{"="}</span>
                    <span className="text-[#D4C890]">{"\"WIP\""}</span>
                    <span className="text-[#A8C890]">{" position"}</span>
                    <span className="text-[#C8D9B4]">{"="}</span>
                    <span className="text-[#D4C890]">{"\"top-right\""}</span>
                    <span className="text-[#C8D9B4]">{" />"}</span>
                </div>
                <div className="pl-4.5">
                    <span className="text-[#C8D9B4]">{"<"}</span>
                    <span className="text-[#90C8A8]">NewDashboard</span>
                    <span className="text-[#C8D9B4]">{" />"}</span>
                </div>
                <div>
                    <span className="text-[#C8D9B4]">{"</"}</span>
                    <span className="text-[#90C8A8]">div</span>
                    <span className="text-[#C8D9B4]">{">"}</span>
                </div>
            </div>
        </div>
    );
}
