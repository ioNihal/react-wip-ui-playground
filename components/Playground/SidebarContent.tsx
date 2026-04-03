import {
    AppWindowIcon, BadgeIcon, Brackets,
    ChevronsLeftRightEllipsis, CircleSlash,
    FlagIcon, LucideIcon, PanelsTopLeft, RibbonIcon
} from "lucide-react";
import Link from "next/link";

type NavItem = {
    group: string;
    items: {
        id: string;
        label: string;
        type: "server" | "client";
    }[]
}

export const playgroundNav: NavItem[] = [
    {
        group: "Server Components",
        items: [
            { id: "ribbon", label: "Ribbon", type: "server" },
            { id: "badge", label: "Badge", type: "server" },
            { id: "overlay", label: "Overlay", type: "server" },
            { id: "block", label: "Block", type: "server" },
        ],
    },
    {
        group: "Client Components",
        items: [
            { id: "banner", label: "Banner", type: "client" },
            { id: "modal", label: "Modal", type: "client" },
            { id: "wip", label: "WIP Wrapper", type: "client" },
            { id: "provider", label: "Provider + useWIP", type: "client" },
        ],
    },
];

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
    active,
    onNav,
}: {
    active: string;
    onNav: (id: string) => void;
}) {
    return (
        <>
            <div className="border-b border-(--border) px-4 py-3">
                <Link
                    href="/"
                    className="flex items-center gap-3 no-underline"
                >
                    <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-(--accent)">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                    </div>
                    <div>
                        <div className="text-sm font-bold text-(--text-primary)">
                            React-WIP-UI
                        </div>
                        <div className="font-mono text-[10px] text-(--text-subtle)">v1.0.0</div>
                    </div>
                </Link>
            </div>

            <nav className="flex-1 overflow-y-auto px-4 py-5">
                {playgroundNav.map((group) => (
                    <div key={group.group} className="mb-7 last:mb-0">
                        <div className="mb-2.5 px-2.5 text-[10px] font-bold uppercase text-(--text-subtle)">
                            {group.group}
                        </div>
                        {group.items.map((item) => {
                            const Icon = NAV_ICONS[item.id];
                            return (
                                <button
                                    key={item.id}
                                    className={`mb-1.5 flex w-full items-center gap-3 rounded-sm px-3 py-2 text-left text-sm font-medium transition-colors last:mb-0
                                         ${active === item.id
                                            ? "bg-(--accent-glow) text-(--accent-dark)"
                                            : "text-(--text-muted) hover:bg-(--bg-muted) hover:text-(--text-primary)"
                                        }`}
                                    onClick={() => onNav(item.id)} >
                                    <span className="shrink-0 opacity-65"><Icon /></span>
                                    <span className="flex-1">{item.label}</span>
                                </button>
                            )
                        })}
                    </div>
                ))}
            </nav>

            <div className="border-t border-(--border) px-4 py-3 text-xs flex items-center justify-between text-(--text-muted)">
                <a href="https://www.npmjs.com/package/react-wip-ui" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-(--text-muted) no-underline">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0zm4 4h16v16H4V4zm2 2v12h8v-2H8V6H6zm8 0v12h4V6h-4z" /></svg>
                    npm package
                </a>
                <span className="text-(--text-subtle)">MIT License</span>
            </div>
        </>
    );
}
