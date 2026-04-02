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
        <section
            className="text-center"
            style={{ padding: "0 clamp(20px, 6vw, 100px) clamp(40px, 6vw, 70px)" }}
        >
            <p
                className="mb-4.5"
                style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--text-subtle)",
                }}
            >
                8 components, server and client
            </p>
            <div className="flex flex-wrap justify-center gap-2.5">
                {COMPONENTS.map((component, index) => (
                    <div
                        key={component.name}
                        className={`component-pill fade-up delay-${Math.min(index + 1, 5)}`}
                    >
                        <span
                            style={{
                                width: 6,
                                height: 6,
                                borderRadius: "50%",
                                background: component.type === "server" ? "#5A8A50" : "#4A7A8A",
                                flexShrink: 0,
                            }}
                        />
                        <span style={{ fontFamily: "monospace", fontWeight: 600, fontSize: "0.82rem" }}>
                            {"<"}
                            {component.name}
                            {" />"}
                        </span>
                        <span style={{ color: "var(--text-subtle)", fontSize: "0.75rem" }}>
                            {component.desc}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
