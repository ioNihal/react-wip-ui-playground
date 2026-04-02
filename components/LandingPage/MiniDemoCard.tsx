

export default function MiniDemoCard() {

    return (
        <div
            style={{
                background: "var(--bg-dark)",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--border-dark)",
                overflow: "hidden",
                maxWidth: 520,
                margin: "0 auto",
                boxShadow: "var(--shadow-xl)",
            }}
        >
            {/* Window bar */}
            <div
                style={{
                    padding: "10px 16px",
                    borderBottom: "1px solid var(--border-dark)",
                    display: "flex",
                    alignItems: "center",
                    gap: 7,
                }}
            >
                {["#E96C6C", "#E9B96C", "#6CBE6C"].map((c, i) => (
                    <div
                        key={i}
                        style={{ width: 11, height: 11, borderRadius: "50%", background: c }}
                    />
                ))}
                <span
                    style={{
                        marginLeft: 8,
                        fontSize: "0.72rem",
                        color: "#668855",
                        fontFamily: "monospace",
                        letterSpacing: "0.04em",
                    }}
                >
                    page.tsx
                </span>
            </div>
            {/* Code */}
            <div style={{ padding: "20px 24px", fontFamily: "monospace", fontSize: "0.82rem", lineHeight: 1.8 }}>
                <div style={{ color: "#668855" }}>{"// Mark a feature as WIP in seconds"}</div>
                <div>
                    <span style={{ color: "#A8C890" }}>import</span>
                    <span style={{ color: "#C8D9B4" }}>{" { Ribbon } "}</span>
                    <span style={{ color: "#A8C890" }}>from</span>
                    <span style={{ color: "#D4C890" }}>{" 'react-wip-ui'"}</span>
                    <span style={{ color: "#C8D9B4" }}>;</span>
                </div>
                <div style={{ marginTop: 10 }}>
                    <span style={{ color: "#C8D9B4" }}>{"<"}</span>
                    <span style={{ color: "#90C8A8" }}>div</span>
                    <span style={{ color: "#A8C890" }}>{" style"}</span>
                    <span style={{ color: "#C8D9B4" }}>{"={{ position: 'relative' }}>"}</span>
                </div>
                <div style={{ paddingLeft: 18 }}>
                    <span style={{ color: "#C8D9B4" }}>{"<"}</span>
                    <span style={{ color: "#90C8A8" }}>Ribbon</span>
                    <span style={{ color: "#A8C890" }}>{" text"}</span>
                    <span style={{ color: "#C8D9B4" }}>{"="}</span>
                    <span style={{ color: "#D4C890" }}>{"\"WIP\""}</span>
                    <span style={{ color: "#A8C890" }}>{" position"}</span>
                    <span style={{ color: "#C8D9B4" }}>{"="}</span>
                    <span style={{ color: "#D4C890" }}>{"\"top-right\""}</span>
                    <span style={{ color: "#C8D9B4" }}>{" />"}</span>
                </div>
                <div style={{ paddingLeft: 18 }}>
                    <span style={{ color: "#C8D9B4" }}>{"<"}</span>
                    <span style={{ color: "#90C8A8" }}>NewDashboard</span>
                    <span style={{ color: "#C8D9B4" }}>{" />"}</span>
                </div>
                <div>
                    <span style={{ color: "#C8D9B4" }}>{"</"}</span>
                    <span style={{ color: "#90C8A8" }}>div</span>
                    <span style={{ color: "#C8D9B4" }}>{">"}</span>
                </div>
            </div>
        </div>
    );

}
