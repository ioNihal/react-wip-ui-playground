"use client";

import React, { useState } from "react";
import Link from "next/link";

/*  Icons  */
const Icon = {
  SSR: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  Accessible: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
    </svg>
  ),
  Compose: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  Zero: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  Copy: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  ),
  Check: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  ArrowRight: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  Github: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  ),
  Npm: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 0h24v24H0V0zm4 4h16v16H4V4zm2 2v12h8v-2H8V6H6zm8 0v12h4V6h-4z" />
    </svg>
  ),
  Menu: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  ),
};

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

const FEATURES = [
  {
    Icon: Icon.SSR,
    title: "SSR-Safe",
    desc: "Core components (Ribbon, Badge, Overlay, Block) render on the server — no hydration mismatch, no flicker.",
  },
  {
    Icon: Icon.Accessible,
    title: "Accessible",
    desc: "Escape-key handling, dialog semantics, focus trapping, and ARIA labels out of the box.",
  },
  {
    Icon: Icon.Compose,
    title: "Composable",
    desc: "Namespace-style API — use individual components or wrap everything with <WIP when={flag}>.",
  },
  {
    Icon: Icon.Zero,
    title: "Zero Config",
    desc: "Import one stylesheet, wrap your component. No themes, no providers required to get started.",
  },
];

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

/*  Mini demo widget  */
function MiniDemo() {
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

/*  Copy button  */
function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text).catch(() => { });
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button className="install-bar__copy" onClick={copy} aria-label="Copy install command">
      {copied ? <Icon.Check /> : <Icon.Copy />}
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

/*  Main landing export  */
export default function LandingPage() {
  return (
    <div style={{ minHeight: "100dvh", display: "flex", flexDirection: "column" }}>
      {/*  Nav  */}
      <nav className="landing-nav">
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: "var(--radius-sm)",
              background: "var(--accent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <span style={{ fontWeight: 700, fontSize: "0.9rem", letterSpacing: "-0.01em" }}>
            react-wip-ui
          </span>
          <span
            style={{
              fontSize: "0.65rem",
              fontFamily: "monospace",
              color: "var(--text-subtle)",
              background: "var(--bg-muted)",
              padding: "2px 7px",
              borderRadius: "var(--radius-full)",
              border: "1px solid var(--border)",
            }}
          >
            v1.0.0
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <a
            href="https://www.npmjs.com/package/react-wip-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-sm hide-mobile"
            style={{ gap: 6 }}
          >
            <Icon.Npm />
            npm
          </a>
          <Link href="/playground" className="btn btn-primary btn-sm">
            Playground →
          </Link>
        </div>
      </nav>

      {/*  Hero  */}
      <section className="hero" id="hero">
        <div className="hero-bg" />
        <div style={{ position: "relative" }}>
          <div className="hero-eyebrow fade-up">
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "var(--accent)",
                display: "inline-block",
              }}
            />
            Ship features faster
          </div>

          <h1 className="hero-title fade-up delay-1">
            Mark features as{" "}
            <em>Work In Progress.</em>
            <br />
            Ship with confidence.
          </h1>

          <p className="hero-sub fade-up delay-2">
            A composable React component library for annotating in-development
            features — SSR-safe, accessible, and designed for Next.js App Router.
          </p>

          {/* Install bar */}
          <div
            className="fade-up delay-3"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
            }}
          >
            <div className="install-bar">
              <div className="install-bar__code">
                <span style={{ color: "#668855" }}>$</span>{" "}
                <span style={{ color: "#C8D9B4" }}>npm install</span>{" "}
                <span style={{ color: "#B4CCA0" }}>react-wip-ui</span>
              </div>
              <CopyButton text="npm install react-wip-ui" />
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
              <Link href="/playground" className="btn btn-primary btn-lg">
                Try the Playground
                <Icon.ArrowRight />
              </Link>
              <a
                href="https://www.npmjs.com/package/react-wip-ui"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-lg"
              >
                View on npm
              </a>
            </div>
          </div>
        </div>
      </section>

      {/*  Component pills  */}
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

      {/*  Code preview  */}
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
            <MiniDemo />
          </div>
        </div>
      </section>

      {/*  Features grid  */}
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

      {/*  CTA  */}
      <section className="cta-section">
        <div style={{ position: "relative", maxWidth: 600, margin: "0 auto" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(180,204,160,0.12)",
              border: "1px solid rgba(180,204,160,0.25)",
              borderRadius: "var(--radius-full)",
              padding: "5px 16px",
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--accent-light)",
              marginBottom: 20,
            }}
          >
            Open source · MIT License
          </div>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              color: "var(--text-on-dark)",
              marginBottom: 14,
              lineHeight: 1.15,
            }}
          >
            Ready to ship{" "}
            <span style={{ color: "var(--accent-light)" }}>with confidence?</span>
          </h2>
          <p
            style={{
              color: "var(--text-dim)",
              fontSize: "1rem",
              marginBottom: 36,
              lineHeight: 1.7,
            }}
          >
            Install react-wip-ui and start marking features in seconds.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
            }}
          >
            <div className="install-bar">
              <div className="install-bar__code">
                <span style={{ color: "#668855" }}>$</span>{" "}
                <span style={{ color: "#C8D9B4" }}>npm install</span>{" "}
                <span style={{ color: "#B4CCA0" }}>react-wip-ui</span>
              </div>
              <CopyButton text="npm install react-wip-ui" />
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
              <Link href="/playground" className="btn btn-lg" style={{ background: "var(--accent-light)", color: "var(--accent-dark)", border: "none" }}>
                Open Playground →
              </Link>
              <a
                href="https://www.npmjs.com/package/react-wip-ui"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lg btn-outline"
                style={{ borderColor: "rgba(180,204,160,0.3)", color: "var(--accent-light)" }}
              >
                <Icon.Npm /> npm package
              </a>
            </div>
          </div>
        </div>
      </section>

      {/*  Footer  */}
      <footer
        style={{
          background: "var(--bg-dark)",
          borderTop: "1px solid var(--border-dark)",
          padding: "24px clamp(20px, 6vw, 100px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: 6,
              background: "var(--accent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="white">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <span style={{ fontSize: "0.82rem", color: "var(--text-dim)", fontWeight: 500 }}>
            react-wip-ui
          </span>
          <span style={{ color: "var(--border-dark)" }}>·</span>
          <span style={{ fontSize: "0.78rem", color: "#556644" }}>MIT License</span>
        </div>
        <div style={{ display: "flex", gap: 20, fontSize: "0.78rem" }}>
          <Link href="/playground" style={{ color: "var(--text-dim)" }}>
            Playground
          </Link>
          <a
            href="https://www.npmjs.com/package/react-wip-ui"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--text-dim)" }}
          >
            npm
          </a>
        </div>
      </footer>
    </div>
  );
}
