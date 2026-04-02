import { AccessibilityIcon, FileStackIcon, ServerIcon, Zap } from "lucide-react";


const FEATURES = [
    {
        Icon: ServerIcon,
        title: "SSR-Safe",
        desc: "Core components (Ribbon, Badge, Overlay, Block) render on the server — no hydration mismatch, no flicker.",
    },
    {
        Icon: AccessibilityIcon,
        title: "Accessible",
        desc: "Escape-key handling, dialog semantics, focus trapping, and ARIA labels out of the box.",
    },
    {
        Icon: FileStackIcon,
        title: "Composable",
        desc: "Namespace-style API — use individual components or wrap everything with <WIP when={flag}>.",
    },
    {
        Icon: Zap,
        title: "Zero Config",
        desc: "Import one stylesheet, wrap your component. No themes, no providers required to get started.",
    },
];

export default function Features() {
    return (
        <section
            style={{
                padding: "clamp(40px, 6vw, 80px) clamp(20px, 6vw, 100px)",
            }}
        >
            <div style={{ maxWidth: 960, margin: "0 auto" }}>
                <h2
                    style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                        textAlign: "center",
                        marginBottom: 40,
                    }}
                >
                    Everything you need,{" "}
                    <em style={{ color: "var(--accent)", fontStyle: "italic" }}>nothing you don&apos;t</em>
                </h2>
                <div className="feature-grid">
                    {FEATURES.map((f, i) => (
                        <div className={`feature-cell fade-up delay-${i + 1}`} key={f.title}>
                            <div className="feature-icon">
                                <f.Icon />
                            </div>
                            <h3
                                style={{
                                    fontFamily: "var(--font-sans)",
                                    fontWeight: 700,
                                    fontSize: "0.95rem",
                                    marginBottom: 8,
                                    color: "var(--text-primary)",
                                }}
                            >
                                {f.title}
                            </h3>
                            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.65 }}>
                                {f.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
