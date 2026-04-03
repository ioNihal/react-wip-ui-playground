"use client";

import { useState } from "react";
import { useWIP, WIP, WIPProvider } from "react-wip-ui/client";
import CodeChip from "../CodeChip";
import { ControlCheck, ControlLabel, ControlsRow } from "../Controls";
import { DemoCard, DemoCardBody, DemoCardFooter, DemoCardHeader } from "../DemoCard";
import PillToggle from "../PillToggle";
import PropTable from "../PropTable";
import { codePanelClass, previewAreaClass } from "../styles";
import Tag from "../Tag";

export default function ProviderDemo() {
    const [globalDisabled, setGlobalDisabled] = useState(false);
    const [theme, setTheme] = useState<"light" | "dark">("light");

    return (
        <DemoCard>
            <DemoCardHeader>
                <div className="flex flex-wrap items-start justify-between gap-3 max-[640px]:gap-2.5">
                    <div className="grid gap-1.5">
                        <div className="flex items-center gap-2.5">
                            <h3 className="font-sans text-[1rem]">WIPProvider + useWIP</h3>
                            <Tag type="client" />
                        </div>
                        <p className="m-0 text-[0.82rem] leading-[1.6] text-[var(--text-muted)]">
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

                <div className={`${previewAreaClass} flex-col gap-3.5`}>
                    <WIPProvider theme={theme} globalDisabled={globalDisabled}>
                        <ProviderInner globalDisabled={globalDisabled} theme={theme} />
                    </WIPProvider>
                </div>

                <div className={`${codePanelClass} mt-4`}>
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
            <div
                style={{
                    padding: "12px 14px",
                    background: theme === "dark" ? "#1A1918" : "white",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-md)",
                    fontFamily: "monospace",
                    fontSize: "0.8rem",
                    color: theme === "dark" ? "#C8D9B4" : "var(--text-primary)",
                }}
            >
                <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: theme === "dark" ? "#668855" : "var(--text-subtle)", marginBottom: 8 }}>
                    useWIP() output
                </div>
                <div>theme: <span style={{ color: "var(--accent)" }}>{ctx.theme ?? "light"}</span></div>
                <div>globalDisabled: <span style={{ color: "var(--accent)" }}>{String(ctx.globalDisabled ?? false)}</span></div>
            </div>

            <div
                data-rwip-theme={theme === "dark" ? "dark" : undefined}
                style={{ position: "relative", background: theme === "dark" ? "#1A1918" : "white", borderRadius: "var(--radius-md)", border: "1px solid var(--border)", overflow: "hidden" }}
            >
                <WIP when={!globalDisabled}>
                    <div style={{ padding: "16px", fontSize: "0.85rem", color: theme === "dark" ? "#C4B9AD" : "var(--text-muted)" }}>
                        Premium feature content lives here
                    </div>
                </WIP>
            </div>

            {globalDisabled && (
                <div style={{ fontSize: "0.78rem", color: "#3A7035", background: "#EBF4E8", borderRadius: "var(--radius-sm)", padding: "8px 12px", border: "1px solid #BCDAB4" }}>
                    globalDisabled: WIP removed everywhere
                </div>
            )}
        </div>
    );
}
