"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import SidebarContent from "@/components/Playground/SidebarContent";
import RibbonDemo from "@/components/Playground/Demo/Ribbon";
import BadgeDemo from "@/components/Playground/Demo/Badge";
import OverlayDemo from "@/components/Playground/Demo/Overlay";
import BlockDemo from "@/components/Playground/Demo/Block";
import BannerDemo from "@/components/Playground/Demo/Banner";
import ModalDemo from "@/components/Playground/Demo/Modal";
import WIPDemo from "@/components/Playground/Demo/WIPDemo";
import ProviderDemo from "@/components/Playground/Demo/ProviderDemo";



// 1. Ribbon


// 2. Badge


// 3. Overlay


// 4. Block


// 5. Banner


// 6. Modal


// 7. WIP Wrapper


// 8. Provider + useWIP




/*  Sidebar nav data  */
const NAV = [
  {
    group: "Server Components",
    hint: "import from 'react-wip-ui'",
    items: [
      { id: "ribbon", label: "Ribbon", type: "server" as const },
      { id: "badge", label: "Badge", type: "server" as const },
      { id: "overlay", label: "Overlay", type: "server" as const },
      { id: "block", label: "Block", type: "server" as const },
    ],
  },
  {
    group: "Client Components",
    hint: "import from 'react-wip-ui/client'",
    items: [
      { id: "banner", label: "Banner", type: "client" as const },
      { id: "modal", label: "Modal", type: "client" as const },
      { id: "wip", label: "WIP Wrapper", type: "client" as const },
      { id: "provider", label: "Provider + useWIP", type: "client" as const },
    ],
  },
];

/*  Main Playground ─ */
export default function Playground() {
  const [active, setActive] = useState("ribbon");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const allIds = NAV.flatMap((g) => g.items.map((i) => i.id));

  const scrollTo = (id: string) => {
    setActive(id);
    setDrawerOpen(false);
    setTimeout(() => {
      const el = document.getElementById(`section-${id}`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  // Track active section on scroll
  useEffect(() => {
    const handler = () => {
      for (const id of [...allIds].reverse()) {
        const el = document.getElementById(`section-${id}`);
        if (el && el.getBoundingClientRect().top <= 130) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [allIds]);

  return (
    <div className="pg-layout">
      {/*  Desktop Sidebar  */}
      <aside className="pg-sidebar">
        <SidebarContent navItem={NAV} active={active} onNav={scrollTo} />
      </aside>

      {/*  Mobile Drawer overlay  */}
      <div
        className={`pg-drawer-overlay ${drawerOpen ? "open" : ""}`}
        onClick={() => setDrawerOpen(false)}
      />
      <div className={`pg-drawer ${drawerOpen ? "open" : ""}`}>
        <SidebarContent navItem={NAV} active={active} onNav={scrollTo} />
      </div>

      {/*  Main  */}
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
        {/* Mobile top bar */}
        <div className="pg-topbar">
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <button
              className="btn btn-ghost btn-sm"
              style={{ padding: "6px", border: "1.5px solid var(--border)", borderRadius: "var(--radius-sm)" }}
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
            <span style={{ fontWeight: 700, fontSize: "0.875rem" }}>react-wip-ui</span>
          </div>
        </div>

        <main className="pg-main">
          {/* Page header */}
          <div style={{ marginBottom: 40, paddingBottom: 32, borderBottom: "1px solid var(--border)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, flexWrap: "wrap" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  background: "var(--accent-muted)",
                  border: "1.5px solid var(--accent-light)",
                  borderRadius: "var(--radius-full)",
                  padding: "4px 14px",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  color: "var(--accent-dark)",
                  letterSpacing: "0.06em",
                }}
              >
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--accent)", display: "inline-block" }} />
                Interactive Playground
              </div>
              <Link
                href="/"
                style={{
                  fontSize: "0.75rem",
                  color: "var(--text-subtle)",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                ← Back to docs
              </Link>
            </div>

            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                letterSpacing: "-0.02em",
                marginBottom: 10,
              }}
            >
              react-wip-ui
            </h1>
            <p style={{ color: "var(--text-muted)", maxWidth: 520, fontSize: "0.95rem", lineHeight: 1.7, marginBottom: 18 }}>
              Production-ready components for marking features as{" "}
              <em>Work In Progress</em>. SSR-safe, accessible, designed for Next.js App Router.
            </p>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0,
                background: "var(--bg-dark)",
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--border-dark)",
                overflow: "hidden",
              }}
            >
              <div style={{ padding: "10px 16px", fontFamily: "monospace", fontSize: "0.82rem", color: "#C8D9B4" }}>
                <span style={{ color: "#668855" }}>$</span>{" "}
                npm install <span style={{ color: "#B4CCA0" }}>react-wip-ui</span>
              </div>
            </div>
          </div>

          {/*  Server components  */}
          <div className="section-label">
            <span>Server Components — import from &apos;react-wip-ui&apos;</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <div id="section-ribbon"><RibbonDemo /></div>
            <div id="section-badge"><BadgeDemo /></div>
            <div id="section-overlay"><OverlayDemo /></div>
            <div id="section-block"><BlockDemo /></div>
          </div>

          {/*  Client components  */}
          <div className="section-label">
            <span>Client Components — import from &apos;react-wip-ui/client&apos;</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <div id="section-banner"><BannerDemo /></div>
            <div id="section-modal"><ModalDemo /></div>
            <div id="section-wip"><WIPDemo /></div>
            <div id="section-provider"><ProviderDemo /></div>
          </div>

          {/* Footer */}
          <div style={{ marginTop: 60, paddingTop: 28, borderTop: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <span style={{ fontSize: "0.78rem", color: "var(--text-subtle)" }}>
              react-wip-ui v1.0.0 · MIT License
            </span>
            <Link href="/" style={{ fontSize: "0.78rem", color: "var(--accent)", textDecoration: "none" }}>
              ← Back to landing page
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
