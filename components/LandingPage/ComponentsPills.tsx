import Reveal from "../Reveal";


const COMPONENTS = [
    { name: "Ribbon", type: "server", desc: "Corner diagonal ribbon" },
    { name: "Badge", type: "server", desc: "Inline WIP label" },
    { name: "Overlay", type: "server", desc: "Frosted glass blur" },
    { name: "Block", type: "server", desc: "Disable interaction" },
    { name: "Banner", type: "client", desc: "Dismissible top bar" },
    { name: "Modal", type: "client", desc: "Accessible dialog" },
    { name: "WIP", type: "client", desc: "Smart wrapper" },
    { name: "Provider", type: "client", desc: "Global config context" },
];

export default function ComponentsPills() {
    return (
        <section className="px-4 md:px-6 py-10 text-center">
            <p className="mb-6 text-sm lg:text-base font-bold uppercase text-(--text-subtle)">
                8 components, server and client
            </p>
            <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
                {COMPONENTS.map((component, i) => (
                    <Reveal key={component.name}>
                        <div
                            className={`animate-fade-up [animation-delay:${i * 0.15}s] flex flex-wrap w-full md:w-auto items-center gap-2 rounded-full 
                        border border-(--border) bg-(--bg-card) px-4 py-2 text-(--text-primary) transition-all
                         hover:border-(--accent) hover:bg-(--accent-glow) hover:text-(--accent-dark)`}
                        >
                            <span
                                className={`h-1.5 w-1.5 shrink-0 rounded-full ${component.type === "server" ? "bg-(--success)" : "bg-(--info)"}`}
                            />
                            <span className="font-mono text-[0.82rem] font-semibold">
                                {"<"}
                                {component.name}
                                {" />"}
                            </span>
                            <span className="text-[0.75rem] text-(--text-subtle)">
                                {component.desc}
                            </span>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
