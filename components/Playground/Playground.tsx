"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SidebarContent, { playgroundNav } from "@/components/Playground/SidebarContent";
import BadgeDemo from "@/components/Playground/Demo/Badge";
import BannerDemo from "@/components/Playground/Demo/Banner";
import BlockDemo from "@/components/Playground/Demo/Block";
import ModalDemo from "@/components/Playground/Demo/Modal";
import OverlayDemo from "@/components/Playground/Demo/Overlay";
import ProviderDemo from "@/components/Playground/Demo/ProviderDemo";
import RibbonDemo from "@/components/Playground/Demo/Ribbon";
import WIPDemo from "@/components/Playground/Demo/WIPDemo";
import InstallBar from "@/components/InstallBar";
import SectionLabel from "@/components/Playground/SectionLabel";

const sectionIds = playgroundNav.flatMap((group) => group.items.map((item) => item.id));

export default function Playground() {
  const [active, setActive] = useState("ribbon");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const scrollTo = (id: string) => {
    setActive(id);
    setDrawerOpen(false);

    setTimeout(() => {
      const section = document.getElementById(`section-${id}`);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
  };

  useEffect(() => {
    const handleScroll = () => {
      for (const id of [...sectionIds].reverse()) {
        const section = document.getElementById(`section-${id}`);
        if (section && section.getBoundingClientRect().top <= 130) {
          setActive(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-dvh bg-(--bg-base)">
      <div className="mx-auto flex min-h-[calc(100dvh-24px)] max-w-420 gap-3 sm:min-h-[calc(100dvh-32px)] sm:gap-4">
        <aside className="sticky top-3 z-10 hidden h-[calc(100dvh-24px)] w-66
        shrink-0 flex-col overflow-y-auto rounded-lg border border-(--border) bg-(--bg-surface) shadow-(--shadow-sm)op-4 sm:h-[calc(100dvh-32px)] xl:flex">
          <SidebarContent active={active} onNav={scrollTo} />
        </aside>

        <div
          className={`fixed inset-0 z-50 bg-[rgba(42,53,32,0.4)] backdrop-blur-xs transition-opacity duration-200 ${drawerOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
          onClick={() => setDrawerOpen(false)}
        />
        <div
          className={`fixed top-3 left-3 z-51 flex h-[calc(100dvh-24px)] w-68 flex-col overflow-y-auto rounded-lg border border-(--border)var(--bg-surface)] shadow-(--shadow-lg) transition-transform duration-300 ease-out sm:top-4 sm:left-4 sm:h-[calc(100dvh-32px)] xl:hidden ${drawerOpen ? "translate-x-0" : "-translate-x-[120%]"}`}
        >
          <SidebarContent active={active} onNav={scrollTo} />
        </div>

        <div className="flex min-w-0 flex-1 flex-col overflow-hidden rounded-lg border border-(--border) bg-(--bg-base) shadow-(--shadow-sm)">
          <div className="sticky top-0 z-20 flex flex-wrap items-start justify-between gap-4 border-b border-(--border) bg-[rgba(238,240,220,0.92)] px-5 py-4 backdrop-blur-md xl:hidden">
            <div className="flex min-h-10 items-center gap-3">
              <button
                className="btn btn-ghost btn-sm rounded-sm border-[1.5px] border-(--border) p-2"
                onClick={() => setDrawerOpen(true)}
                aria-label="Open menu"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
              <span className="text-[0.95rem] font-bold tracking-[-0.01em]">react-wip-ui</span>
            </div>
            <div className="flex min-w-0 max-w-full gap-2 overflow-x-auto pb-1 [scrollbar-width:none] max-[640px]:w-full [&::-webkit-scrollbar]:hidden">
              {sectionIds.map((id) => (
                <button
                  key={id}
                  className={`shrink-0 whitespace-nowrap rounded-full border-[1.5px] px-4 py-2 text-[0.78rem] font-semibold leading-none transition-colors ${active === id
                    ? "border-(--accent) bg-(--accent) text-white"
                    : "border-(--border) bg-(--bg-card) text-(--text-muted)"
                    }`}
                  onClick={() => scrollTo(id)}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <main className="flex min-w-0 flex-1 flex-col overflow-x-hidden p-6">
            <div className="mx-auto flex w-full max-w-330 flex-1 flex-col px-[clamp(18px,3.5vw,56px)] pt-[clamp(24px,4vw,52px)] pb-20 xl:px-[clamp(28px,4vw,72px)] xl:pt-[clamp(32px,4vw,56px)]">
              <div className="mb-[clamp(32px,5vw,40px)] border-b border-(--border)clamp(24px,4vw,32px)]">
                <div className="mb-4 flex flex-wrap items-center gap-2.5">
                  <div className="inline-flex items-center gap-1.75 rounded-(--radius-full)er-[1.5px] border-(--accent-light) bg-(--accent-muted) px-3.5 py-1 text-[0.7rem] font-bold tracking-[0.06em] text-(--accent-dark)">
                    <span className="inline-block h-1.75 w-1.75 rounded-full bg-(--accent)" />
                    Interactive Playground
                  </div>
                  <Link
                    href="/"
                    className="flex items-center gap-1 text-[0.75rem] text-(--text-subtle) no-underline"
                  >
                    {"<-"} Back to docs
                  </Link>
                </div>

                <h1 className="mb-3 text-[clamp(1.8rem,4vw,2.8rem)] tracking-[-0.02em]">
                  react-wip-ui
                </h1>
                <p className="mb-5 max-w-130t-[0.95rem] leading-[1.7] text-(--text-muted)">
                  Production-ready components for marking features as <em>Work In Progress</em>. SSR-safe,
                  accessible, designed for Next.js App Router.
                </p>

                <InstallBar>
                  <span style={{ color: "#668855" }}>$</span>{" "}
                  npm install <span style={{ color: "#B4CCA0" }}>react-wip-ui</span>
                </InstallBar>
              </div>

              <SectionLabel>Server Components, import from &apos;react-wip-ui&apos;</SectionLabel>

              <div className="flex flex-col gap-[clamp(24px,3vw,32px)]">
                <div id="section-ribbon">
                  <RibbonDemo />
                </div>
                <div id="section-badge">
                  <BadgeDemo />
                </div>
                <div id="section-overlay">
                  <OverlayDemo />
                </div>
                <div id="section-block">
                  <BlockDemo />
                </div>
              </div>

              <SectionLabel>Client Components, import from &apos;react-wip-ui/client&apos;</SectionLabel>

              <div className="flex flex-col gap-[clamp(24px,3vw,32px)]">
                <div id="section-banner">
                  <BannerDemo />
                </div>
                <div id="section-modal">
                  <ModalDemo />
                </div>
                <div id="section-wip">
                  <WIPDemo />
                </div>
                <div id="section-provider">
                  <ProviderDemo />
                </div>
              </div>

              <div className="mt-[clamp(44px,6vw,60px)] flex flex-wrap items-center justify-between gap-3 border-t border-(--border) pt-7 max-[640px]:pt-5.5">
                <span className="text-[0.78rem] text-(--text-subtle)">
                  react-wip-ui v1.0.0 | MIT License
                </span>
                <Link href="/" className="text-[0.78rem] text-(--accent) no-underline">
                  {"<-"} Back to landing page
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
