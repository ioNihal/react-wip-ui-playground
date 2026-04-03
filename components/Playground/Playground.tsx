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
import { ChevronLeft, MenuIcon } from "lucide-react";
import CopyButton from "../CopyButton";

const sectionIds = playgroundNav.flatMap((group) =>
  group.items.map((item) => item.id)
);

const currentYear = new Date().getFullYear();

export default function Playground() {
  const [active, setActive] = useState("ribbon");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const scrollTo = (id: string) => {
    setActive(id);
    setDrawerOpen(false);

    const section = document.getElementById(`section-${id}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const container = document.getElementById("main-scroll");

    const handleScroll = () => {
      for (const id of [...sectionIds].reverse()) {
        const section = document.getElementById(`section-${id}`);
        if (section && section.getBoundingClientRect().top <= 120) {
          setActive(id);
          break;
        }
      }
    };

    container?.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex h-dvh bg-(--bg-base) overflow-x-hidden ">

      {/* SIDEBAR (desktop) */}
      <aside className="hidden xl:flex w-66 shrink-0 flex-col border-r border-(--border) bg-(--bg-surface)">
        <SidebarContent active={active} onNav={scrollTo} />
      </aside>

      {/* MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity
           ${drawerOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={() => setDrawerOpen(false)}
      />

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 left-0 z-50 h-dvh w-72 flex-col bg-(--bg-surface) border-r border-(--border) transition-transform 
          ${drawerOpen ? "translate-x-0" : "-translate-x-full"} xl:hidden`} >
        <SidebarContent active={active} onNav={scrollTo} />
      </div>

      {/* MAIN PANEL */}
      <div className="flex min-w-0 flex-1 flex-col">

        {/* MOBILE TOPBAR */}
        <div className="sticky top-0 z-20 flex items-center justify-between 
          border-b border-(--border) bg-(--bg-base) p-2 xl:hidden">
          <button
            className="p-2"
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </button>
          <span className="text-sm font-semibold">React-WIP-UI</span>
        </div>

        {/* SCROLLABLE CONTENT */}
        <main
          id="main-scroll"
          className="min-w-0 flex-1 overflow-y-auto"
        >
          <div className="mx-auto min-w-0 w-full max-w-5xl px-4 md:px-6 py-8">

            {/* HEADER */}
            <div className="mb-8 border-b border-(--border) pb-6">
              <div className="mb-3 flex items-center justify-between gap-3">
                <div className="rounded-full border border-(--border) text-(--text-muted) bg-(--bg-surface) px-3 py-1 text-xs font-semibold">
                  Interactive Playground
                </div>

                <Link href="/" className="inline-flex items-center gap-2 hover:gap-3 transition-all text-xs text-(--text-accent) hover:text-(--text-muted)">
                  <ChevronLeft size={18} /> Back to Home
                </Link>
              </div>

              <h1 className="mb-2 text-3xl font-semibold">
                React-WIP-UI
              </h1>

              <p className="mb-4 max-w-xl text-sm text-(--text-muted)">
                Production-ready components for marking features as work in progress.
              </p>

              <InstallBar action={<CopyButton text="npm install react-wip-ui" />}>
                <span className="text-[#668855]">$</span>{" "}
                <span className="text-[#C8D9B4]">npm install</span>{" "}
                <span className="text-[#B4CCA0]">react-wip-ui</span>
              </InstallBar>
            </div>

            {/* SERVER */}
            <SectionLabel>Server Components</SectionLabel>
            <div className="mt-6 flex flex-col gap-10">
              <div id="section-ribbon"><RibbonDemo /></div>
              <div id="section-badge"><BadgeDemo /></div>
              <div id="section-overlay"><OverlayDemo /></div>
              <div id="section-block"><BlockDemo /></div>
            </div>

            {/* CLIENT */}
            <SectionLabel>Client Components</SectionLabel>
            <div className="mt-6 flex flex-col gap-10">
              <div id="section-banner"><BannerDemo /></div>
              <div id="section-modal"><ModalDemo /></div>
              <div id="section-wip"><WIPDemo /></div>
              <div id="section-provider"><ProviderDemo /></div>
            </div>

            {/* FOOTER */}
            <div className="mt-12 flex items-center justify-between border-t border-(--border) pt-6 text-xs text-(--text-muted)">
              <span>&copy; {currentYear} React-WIP-UI v1.0.0</span>
              <Link href="/" className="text-(--accent)">
                Back to Home
              </Link>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
