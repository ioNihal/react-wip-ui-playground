import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function ChangelogPage() {
    return (
        <main className="mx-auto max-w-4xl px-4 md:px-6 py-12 min-h-[80vh]">
            <div className="mb-16 border-b border-(--border) pb-10">
                <Link href="/" className="inline-flex items-center gap-2 hover:gap-3 transition-all text-sm text-(--text-accent) hover:text-(--text-muted) mb-6">
                    <ChevronLeft size={18} /> Back to Home
                </Link>
                <h1 className="font-serif text-4xl lg:text-5xl mb-4 text-(--text-primary)">Changelog</h1>
                <p className="text-(--text-muted) text-lg">All notable changes to React-WIP-UI will be documented here.</p>
            </div>

            <div className="space-y-20">
                {/* v3.0.0 */}
                <div className="relative">
                    <div className="md:grid md:grid-cols-5 md:gap-8">
                        <div className="mb-4 md:mb-0 md:col-span-1">
                            <div className="sticky top-24">
                                <div className="inline-block rounded-full border border-(--accent-light) bg-(--accent-muted) px-2.5 py-1 font-mono text-sm font-bold text-(--accent-dark) mb-2">
                                    v3.0.0
                                </div>
                                <div className="text-sm font-medium text-(--text-subtle)">May 7, 2026</div>
                            </div>
                        </div>
                        <div className="md:col-span-4">
                            <div className="prose prose-sm prose-zinc max-w-none">
                                <h3 className="text-2xl text-(--text-primary) mt-0 mb-4 font-bold font-serif">Rearchitecting for the Server</h3>
                                <p className="text-(--text-muted) text-base leading-relaxed">
                                    React-WIP-UI has been completely rewritten from the ground up to be a modern, server-first component library. We've removed all client-side requirements, CSS imports, and external dependencies.
                                </p>

                                <h4 className="text-base font-semibold text-(--text-primary) mt-8 mb-3">Breaking Changes</h4>
                                <ul className="list-disc pl-5 space-y-2 mb-8 text-(--text-muted)">
                                    <li>Removed <code className="text-xs bg-(--bg-muted) px-1.5 py-0.5 rounded font-mono text-(--text-primary)">Banner</code>, <code className="text-xs bg-(--bg-muted) px-1.5 py-0.5 rounded font-mono text-(--text-primary)">Modal</code>, <code className="text-xs bg-(--bg-muted) px-1.5 py-0.5 rounded font-mono text-(--text-primary)">WIPWrapper</code>, and <code className="text-xs bg-(--bg-muted) px-1.5 py-0.5 rounded font-mono text-(--text-primary)">WIPProvider</code> (client components).</li>
                                    <li>Removed <code className="text-xs bg-(--bg-muted) px-1.5 py-0.5 rounded font-mono text-(--text-primary)">react-wip-ui/client</code> export path.</li>
                                    <li>Removed CSS stylesheet import requirement.</li>
                                    <li>Removed <code className="text-xs bg-(--bg-muted) px-1.5 py-0.5 rounded font-mono text-(--text-primary)">lucide-react</code> dependency.</li>
                                </ul>

                                <h4 className="text-base font-semibold text-(--text-primary) mt-8 mb-3">Added</h4>
                                <ul className="list-disc pl-5 space-y-2 mb-8 text-(--text-muted)">
                                    <li>Added inline styles for all components (zero CSS configuration).</li>
                                    <li>Added <code className="text-xs bg-(--bg-muted) px-1.5 py-0.5 rounded font-mono text-(--text-primary)">theme</code> ('light' | 'dark') prop to components.</li>
                                    <li>Added <code className="text-xs bg-(--bg-muted) px-1.5 py-0.5 rounded font-mono text-(--text-primary)">colors</code> (bg, text) custom override prop to components.</li>
                                    <li>Added <code className="text-xs bg-(--bg-muted) px-1.5 py-0.5 rounded font-mono text-(--text-primary)">WIP</code> namespace export for dot-notation access (e.g., <code className="text-xs bg-(--bg-muted) px-1.5 py-0.5 rounded font-mono text-(--text-primary)">WIP.Badge</code>).</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* v1.0.0 */}
                <div className="relative opacity-80">
                    <div className="md:grid md:grid-cols-5 md:gap-8">
                        <div className="mb-4 md:mb-0 md:col-span-1">
                            <div className="sticky top-24">
                                <div className="inline-block rounded-full border border-(--border) bg-(--bg-muted) px-2.5 py-1 font-mono text-sm font-bold text-(--text-primary) mb-2">
                                    v1.0.0
                                </div>
                                <div className="text-sm font-medium text-(--text-subtle)">May 2, 2026</div>
                            </div>
                        </div>
                        <div className="md:col-span-4">
                            <div className="prose prose-sm prose-zinc max-w-none">
                                <h3 className="text-2xl text-(--text-primary) mt-0 mb-4 font-bold font-serif">Initial Release</h3>
                                <p className="text-(--text-muted) text-base leading-relaxed">
                                    The first stable release of React-WIP-UI, featuring a composable set of components for marking features as work-in-progress.
                                </p>
                                <ul className="list-disc pl-5 space-y-2 mt-4 text-(--text-muted)">
                                    <li>Added Ribbon, Badge, Overlay, and Block server components.</li>
                                    <li>Added Banner, Modal, and WIP wrapper client components.</li>
                                    <li>Added global WIPProvider.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
