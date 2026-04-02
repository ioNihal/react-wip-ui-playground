import {
    AppWindowIcon, BadgeIcon, Brackets,
    ChevronsLeftRightEllipsis, CircleSlash,
    FlagIcon, LucideIcon, PanelsTopLeft, RibbonIcon
} from "lucide-react";
import Link from "next/link";

type NavItem = {
    group: string;
    hint: string;
    items: {
        id: string;
        label: string;
        type: "server" | "client";
    }[]
}

const NAV_ICONS: Record<string, LucideIcon> = {
    ribbon: RibbonIcon,
    badge: BadgeIcon,
    overlay: AppWindowIcon,
    block: CircleSlash,
    banner: FlagIcon,
    modal: PanelsTopLeft,
    wip: Brackets,
    provider: ChevronsLeftRightEllipsis,
};


export default function SidebarContent({
    navItem,
    active,
    onNav,
}: {
    navItem: NavItem[];
    active: string;
    onNav: (id: string) => void;
}) {
    return (
        <>
            {/* Logo */}
            <div style={{ padding: "20px 16px 14px", borderBottom: "1px solid var(--border)" }}>
                <Link
                    href="/"
                    style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 6, textDecoration: "none" }}
                >
                    <div style={{ width: 28, height: 28, borderRadius: "var(--radius-sm)", background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                    </div>
                    <div>
                        <div style={{ fontWeight: 700, fontSize: "0.875rem", color: "var(--text-primary)", letterSpacing: "-0.01em" }}>
                            react-wip-ui
                        </div>
                        <div style={{ fontSize: "0.65rem", color: "var(--text-subtle)", fontFamily: "monospace" }}>v1.0.0</div>
                    </div>
                </Link>
                <p style={{ margin: 0, fontSize: "0.72rem", color: "var(--text-subtle)", lineHeight: 1.5 }}>
                    Interactive playground
                </p>
            </div>

            {/* Nav */}
            <nav style={{ padding: "14px 10px", flex: 1, overflowY: "auto" }}>
                {navItem.map((group) => (
                    <div key={group.group} style={{ marginBottom: 20 }}>
                        <div style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-subtle)", padding: "0 6px", marginBottom: 5 }}>
                            {group.group}
                        </div>
                        {group.items.map((item) => {
                            const Icon = NAV_ICONS[item.id];
                            return (
                                <button
                                    key={item.id}
                                    className={`nav-link ${active === item.id ? "active" : ""}`}
                                    onClick={() => onNav(item.id)}
                                >
                                    <span style={{ opacity: 0.65, flexShrink: 0 }}><Icon /></span>
                                    <span style={{ flex: 1 }}>{item.label}</span>
                                    {item.type === "server" && (
                                        <span className="tag tag-server" style={{ padding: "1px 6px", fontSize: "0.58rem" }}>SSR</span>
                                    )}
                                </button>
                            )
                        })}
                    </div>
                ))}
            </nav>

            {/* Footer */}
            <div style={{ padding: "12px 16px", borderTop: "1px solid var(--border)", fontSize: "0.72rem" }}>
                <a href="https://www.npmjs.com/package/react-wip-ui" target="_blank" rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--text-muted)", marginBottom: 4, textDecoration: "none" }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0zm4 4h16v16H4V4zm2 2v12h8v-2H8V6H6zm8 0v12h4V6h-4z" /></svg>
                    npm package
                </a>
                <span style={{ color: "var(--text-subtle)" }}>MIT License</span>
            </div>
        </>
    );
}