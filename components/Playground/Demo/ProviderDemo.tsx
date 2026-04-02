"use client";
import { useState } from "react";
import Tag from "../Tag";
import CodeChip from "../CodeChip";
import PillToggle from "../PillToggle";
import { useWIP, WIP, WIPProvider } from "react-wip-ui/client";
import PropTable from "../PropTable";

export default function ProviderDemo() {
    const [globalDisabled, setGlobalDisabled] = useState(false);
    const [theme, setTheme] = useState<"light" | "dark">("light");

    return (
        <div className="card fade-up delay-3">
            <div className="card-header">
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                            <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "1rem" }}>WIPProvider + useWIP</h3>
                            <Tag type="client" />
                        </div>
                        <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", margin: 0 }}>
                            Global context — disable all WIP components at once.
                        </p>
                    </div>
                    <CodeChip>{"<WIPProvider />"}</CodeChip>
                </div>
            </div>

            <div className="card-body">
                <div className="controls-row" style={{ marginBottom: 20 }}>
                    <span className="ctrl-label">Theme</span>
                    <PillToggle
                        options={[{ label: "Light", value: "light" }, { label: "Dark", value: "dark" }]}
                        value={theme}
                        onChange={setTheme}
                    />
                    <label className="ctrl-check">
                        <input type="checkbox" checked={globalDisabled} onChange={(e) => setGlobalDisabled(e.target.checked)} />
                        globalDisabled (prod mode)
                    </label>
                </div>

                <div className="preview-area" style={{ flexDirection: "column", gap: 14 }}>
                    <WIPProvider theme={theme} globalDisabled={globalDisabled}>
                        <ProviderInner globalDisabled={globalDisabled} theme={theme} />
                    </WIPProvider>
                </div>

                <div
                    style={{ marginTop: 14, padding: "12px 16px", background: "var(--bg-dark)", borderRadius: "var(--radius-md)", fontFamily: "monospace", fontSize: "0.78rem", color: "#C8D9B4", border: "1px solid var(--border-dark)", lineHeight: 1.8 }}
                >
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
            </div>

            <div className="card-footer">
                <PropTable
                    rows={[
                        { prop: "theme", type: '"light" | "dark"', default: '"light"', description: "Sets CSS custom props for all WIP children" },
                        { prop: "globalDisabled", type: "boolean", default: "false", description: "When true, strips WIP from all children" },
                        { prop: "defaultVariant", type: '"overlay" | "block" | "ribbon" | "badge"', description: "Default WIP variant for <WIP /> wrappers" },
                    ]}
                />
            </div>
        </div>
    );
}


function ProviderInner({ globalDisabled, theme }: { globalDisabled: boolean; theme: string }) {
    const ctx = useWIP();
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 12, width: "100%", maxWidth: 360 }}>
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
                    ✓ globalDisabled — WIP removed everywhere
                </div>
            )}
        </div>
    );
}