import Reveal from "../Reveal";
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
        <section className="border-y border-(--border) bg-(--bg-surface) px-4 md:px-6 py-10">
            <div className="mx-auto grid max-w-250 grid-cols-[repeat(auto-fit,minmax(280px,1fr))] items-center gap-12">
                <div>
                    <h2 className="mb-4 font-serif text-2xl lg:text-3xl xl:text-4xl">
                        Up in{" "}
                        <span className="text-(--accent)">30 seconds</span>
                    </h2>
                    <p className="mb-6 text-(--text-muted)">
                        No theme setup, no providers required. Import one stylesheet and
                        start marking features.
                    </p>
                    <div className="flex flex-col gap-4">
                        {STEPS.map((step, i) => (
                            <Reveal key={i}>
                                <div className="flex items-start gap-2 lg:gap-4">
                                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-(--accent) text-xs font-bold text-white">
                                        {i + 1}
                                    </div>
                                    <div>
                                        <div className="mb-2 text-xs text-(--text-subtle)">
                                            {step.label}
                                        </div>
                                        <code className="inline-block rounded-xs border border-(--border) bg-(--bg-muted) px-2 py-1 
                                        font-mono text-[12px] tracking-tighter text-(--accent-dark)">
                                            {step.code.split("\n")[0]}
                                        </code>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
                <Reveal>
                    <MiniDemoCard />
                </Reveal>
            </div>
        </section>
    )
}
