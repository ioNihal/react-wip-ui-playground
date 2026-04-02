
/*  Component list  */
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
            style={{
                padding: "0 clamp(20px, 6vw, 100px) clamp(40px, 6vw, 70px)",
                textAlign: "center",
            }}
        >
            <p
                style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--text-subtle)",
                    marginBottom: 18,
                }}
            >
                8 components — Server & Client
            </p>
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 10,
                    justifyContent: "center",
                }}
            >
                {COMPONENTS.map((c, i) => (
                    <div
                        key={c.name}
                        className={`component-pill fade-up delay-${Math.min(i + 1, 5)}`}
                    >
                        <span
                            style={{
                                width: 6,
                                height: 6,
                                borderRadius: "50%",
                                background:
                                    c.type === "server" ? "#5A8A50" : "#4A7A8A",
                                flexShrink: 0,
                            }}
                        />
                        <span style={{ fontFamily: "monospace", fontWeight: 600, fontSize: "0.82rem" }}>
                            {"<"}{c.name}{" />"}
                        </span>
                        <span style={{ color: "var(--text-subtle)", fontSize: "0.75rem" }}>
                            {c.desc}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    )
}
