import { AccessibilityIcon, FileStackIcon, ServerIcon, Zap } from "lucide-react";

const FEATURES = [
    {
        Icon: ServerIcon,
        title: "SSR-Safe",
        desc: "Core components render on the server with no hydration mismatch or flicker.",
    },
    {
        Icon: AccessibilityIcon,
        title: "Accessible",
        desc: "Escape handling, dialog semantics, focus trapping, and ARIA labels are included.",
    },
    {
        Icon: FileStackIcon,
        title: "Composable",
        desc: "Use individual components or wrap a feature with <WIP when={flag}>.",
    },
    {
        Icon: Zap,
        title: "Zero Config",
        desc: "Import one stylesheet and wrap your component. No provider is required to start.",
    },
];

export default function Features() {
    return (
        <section style={{ padding: "clamp(40px, 6vw, 80px) clamp(20px, 6vw, 100px)" }}>
            <div className="mx-auto max-w-[960px]">
                <h2
                    className="mb-10 text-center"
                    style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                    }}
                >
                    Everything you need,{" "}
                    <em style={{ color: "var(--accent)", fontStyle: "italic" }}>nothing you don&apos;t</em>
                </h2>
                <div className="feature-grid">
                    {FEATURES.map((feature, index) => (
                        <div className={`feature-cell fade-up delay-${index + 1}`} key={feature.title}>
                            <div className="feature-icon">
                                <feature.Icon />
                            </div>
                            <h3
                                className="mb-2"
                                style={{
                                    fontFamily: "var(--font-sans)",
                                    fontWeight: 700,
                                    fontSize: "0.95rem",
                                    color: "var(--text-primary)",
                                }}
                            >
                                {feature.title}
                            </h3>
                            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.65 }}>
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
