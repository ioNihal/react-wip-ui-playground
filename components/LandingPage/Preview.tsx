import MiniDemoCard from "./MiniDemoCard";

const STEPS = [
    {
        code: "npm install react-wip-ui",
        label: "Install the package",
    },
    {
        code: "import 'react-wip-ui/styles.css';",
        label: "Import the stylesheet once in your root layout",
    },
    {
        code: `import { Ribbon } from 'react-wip-ui';

<div style={{ position: 'relative' }}>
  <Ribbon text="WIP" position="top-right" />
  <MyFeature />
</div>`,
        label: "Wrap any component",
    },
];

export default function Preview() {
    return (
        <section
            style={{
                padding: "clamp(40px, 6vw, 70px) clamp(20px, 6vw, 100px)",
                background: "var(--bg-surface)",
                borderTop: "1px solid var(--border)",
                borderBottom: "1px solid var(--border)",
            }}
        >
            <div
                style={{
                    maxWidth: 1000,
                    margin: "0 auto",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: 48,
                    alignItems: "center",
                }}
            >
                <div>
                    <h2
                        style={{
                            fontFamily: "var(--font-serif)",
                            fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                            marginBottom: 14,
                            lineHeight: 1.2,
                        }}
                    >
                        Up in{" "}
                        <span style={{ color: "var(--accent)" }}>30 seconds</span>
                    </h2>
                    <p
                        style={{
                            color: "var(--text-muted)",
                            lineHeight: 1.7,
                            marginBottom: 28,
                            fontSize: "0.95rem",
                        }}
                    >
                        No theme setup, no providers required. Import one stylesheet and
                        start marking features.
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                        {STEPS.map((step, i) => (
                            <div key={i} className="step-item">
                                <div className="step-number">{i + 1}</div>
                                <div>
                                    <div
                                        style={{
                                            fontSize: "0.8rem",
                                            color: "var(--text-subtle)",
                                            marginBottom: 4,
                                        }}
                                    >
                                        {step.label}
                                    </div>
                                    <code
                                        style={{
                                            background: "var(--bg-muted)",
                                            padding: "4px 8px",
                                            borderRadius: "var(--radius-xs)",
                                            fontFamily: "monospace",
                                            fontSize: "0.78rem",
                                            color: "var(--accent-dark)",
                                            border: "1px solid var(--border)",
                                            display: "inline-block",
                                            lineHeight: 1.5,
                                        }}
                                    >
                                        {step.code.split("\n")[0]}
                                    </code>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="fade-up">
                    <MiniDemoCard />
                </div>
            </div>
        </section>
    )
}
