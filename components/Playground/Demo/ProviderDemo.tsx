"use client";

import { useState } from "react";
import { useWIP, WIP, WIPProvider } from "react-wip-ui/client";
import CodeChip from "../CodeChip";
import { ControlCheck, ControlLabel, ControlsRow } from "../Controls";
import { DemoCard, DemoCardBody, DemoCardFooter, DemoCardHeader } from "../DemoCard";
import PillToggle from "../PillToggle";
import PropTable from "../PropTable";
import Tag from "../Tag";

export default function ProviderDemo() {
    const [globalDisabled, setGlobalDisabled] = useState(false);
    const [theme, setTheme] = useState<"light" | "dark">("light");

    return (
        <DemoCard>
            <DemoCardHeader>
                <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="grid gap-1.5">
                        <div className="flex items-center gap-2.5">
                            <h3 className="font-sans text-lg tracking-wide">WIPProvider + useWIP</h3>
                            <Tag type="client" />
                        </div>
                        <p className="text-sm text-(--text-muted)">
                            Global context to disable all WIP components at once.
                        </p>
                    </div>
                    <CodeChip>{"<WIPProvider />"}</CodeChip>
                </div>
            </DemoCardHeader>

            <DemoCardBody>
                <ControlsRow className="mb-5">
                    <ControlLabel>Theme</ControlLabel>
                    <PillToggle
                        options={[{ label: "Light", value: "light" }, { label: "Dark", value: "dark" }]}
                        value={theme}
                        onChange={setTheme}
                    />
                    <ControlCheck>
                        <input type="checkbox" checked={globalDisabled} onChange={(event) => setGlobalDisabled(event.target.checked)} />
                        globalDisabled (prod mode)
                    </ControlCheck>
                </ControlsRow>

                <div className="flex items-center justify-center gap-4 overflow-hidden rounded-md border border-(--border)
                    bg-[radial-gradient(circle_at_1px_1px,var(--border)_1px,transparent_0)] bg-size-[24px_24px] px-4 md:px-6 py-6">
                    <WIPProvider theme={theme} globalDisabled={globalDisabled}>
                        <ProviderInner globalDisabled={globalDisabled} theme={theme} />
                    </WIPProvider>
                </div>

                <div className="rounded-md border border-(--border-dark) bg-(--bg-dark) px-4 py-3 font-mono text-xs mt-4">
                    <span style={{ color: "#A8C890" }}>{"<WIPProvider"}</span>
                    {" "}
                    <span style={{ color: "#90C8A8" }}>theme</span>
                    <span style={{ color: "#C8D9B4" }}>=</span>
                    <span style={{ color: "#D4C890" }}>{`"${theme}"`}</span>
                    {" "}
                    <span style={{ color: "#90C8A8" }}>globalDisabled</span>
                    <span style={{ color: "#C8D9B4" }}>={"{"}</span>
                    <span style={{ color: "#D4C890" }}>{String(globalDisabled)}</span>
                    <span style={{ color: "#C8D9B4" }}>{"}"}</span>
                    <span style={{ color: "#A8C890" }}>{">"}</span>
                </div>
            </DemoCardBody>

            <DemoCardFooter>
                <PropTable
                    rows={[
                        { prop: "theme", type: '"light" | "dark"', default: '"light"', description: "Sets CSS custom props for all WIP children" },
                        { prop: "globalDisabled", type: "boolean", default: "false", description: "When true, strips WIP from all children" },
                        { prop: "defaultVariant", type: '"overlay" | "block" | "ribbon" | "badge"', description: "Default WIP variant for <WIP /> wrappers" },
                    ]}
                />
            </DemoCardFooter>
        </DemoCard>
    );
}

function ProviderInner({ globalDisabled, theme }: { globalDisabled: boolean; theme: string }) {
    const ctx = useWIP();

    return (
        <div className="flex w-full max-w-90 flex-col gap-3">
            <div className="px-3 py-3.5 border border-(--border) rounded-md font-mono text-sm"
                style={{
                    background: theme === "dark" ? "#1A1918" : "white",
                    color: theme === "dark" ? "#C8D9B4" : "var(--text-primary)",
                }}
            >
                <div className="font-sans text-xs font-bold uppercase tracking-wider mb-2 "
                    style={{ color: theme === "dark" ? "#668855" : "var(--text-subtle)" }}>
                    useWIP() output
                </div>
                <div>theme: <span className="text-(--accent)">{ctx.theme ?? "light"}</span></div>
                <div>globalDisabled: <span className="text-(--accent)">{String(ctx.globalDisabled ?? false)}</span></div>
            </div>

            <div
                data-rwip-theme={theme === "dark" ? "dark" : undefined}
                className="relative rounded-md border border-(--border) overflow-hidden"
                style={{ background: theme === "dark" ? "#1A1918" : "white" }}
            >
                <WIP when={!globalDisabled}>
                    <div className="p-4 text-sm" style={{ color: theme === "dark" ? "#C4B9AD" : "var(--text-muted)" }}>
                        Premium feature content lives here
                    </div>
                </WIP>
            </div>

            {globalDisabled && (
                <div className="text-xs text-[#3A7035] bg-[#EBF4E8] border border-[#BCDAB4] rounded-sm p-2">
                    globalDisabled: WIP removed everywhere
                </div>
            )}
        </div>
    );
}
