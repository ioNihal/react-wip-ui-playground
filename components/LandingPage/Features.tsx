import { AccessibilityIcon, FileStackIcon, ServerIcon, Zap } from "lucide-react";
import Reveal from "../Reveal";

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
        <section className="px-4 md:px-6 py-10">
            <div className="mx-auto max-w-240">
                <Reveal>
                    <h2 className="mb-10 text-center font-serif text-3xl lg:text-4xl xl:text-5xl">
                        Everything you need,{" "}
                        <em className="text-(--accent)">nothing you don&apos;t</em>
                    </h2>
                </Reveal>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px rounded-xl overflow-clip
                     border-2 border-(--border) bg-(--border)">
                    {FEATURES.map((feature, index) => (
                        <div
                            className={`animate-fade-up [animation-delay:${index * 100}ms] bg-(--bg-card) px-6 py-7 transition-colors hover:bg-(--bg-surface)`}
                            key={feature.title} >
                            <Reveal>
                                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-sm border border-(--accent-light) bg-(--accent-muted) text-(--accent-dark)">
                                    <feature.Icon />
                                </div>
                                <h3 className="mb-2 font-sans font-bold text-lg tracking-wider text-(--text-primary)">
                                    {feature.title}
                                </h3>
                                <p className="text-sm leading-tight text-(--text-muted)">
                                    {feature.desc}
                                </p>
                            </Reveal>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
