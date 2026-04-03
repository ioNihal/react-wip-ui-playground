import Link from "next/link";
import CopyButton from "../CopyButton";
import InstallBar from "../InstallBar";


export default function CTA() {
    return (
        <section className="relative overflow-hidden bg-(--bg-dark) px-4 py-10 text-center text-(--text-on-dark)
         before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(180,204,160,0.12)_0%,transparent_70%)] before:content-['']">
            <div className="relative mx-auto max-w-150">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-(--border)/30 bg-(--accent-light)/20 
                    px-4 py-1.5 text-xs font-bold uppercase text-(--accent-light)">
                    Open source | MIT License
                </div>
                <h2 className="mb-4 font-serif text-2xl md:text-3xl xl:text-5xl text-(--text-on-dark)!">
                    Ready to ship{" "}
                    <span className="text-(--accent-light)">with confidence?</span>
                </h2>
                <p className="mb-8 text-base text-(--text-dim)">
                    Install react-wip-ui and start marking features in seconds.
                </p>
                <div className="flex flex-col items-center gap-6">
                    <InstallBar action={<CopyButton text="npm install react-wip-ui" />}>
                        <span className="text-[#668855]">$</span>{" "}
                        <span className="text-[#C8D9B4]">npm install</span>{" "}
                        <span className="text-[#B4CCA0]">react-wip-ui</span>
                    </InstallBar>
                    <div className="animate-fade-up [animation-delay:200ms] flex item-center gap-3">
                        <Link
                            href="/playground"
                            className="inline-flex items-center whitespace-nowrap rounded-sm px-4 py-2 text-sm font-semibold transition-all duration-200
                            bg-(--accent) text-white  hover:-translate-y-px hover:border-(--accent-hover) hover:bg-(--accent-hover) border-transparent "
                        >
                            Open Playground
                        </Link>
                        <a
                            href="https://www.npmjs.com/package/react-wip-ui"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" inline-flex items-center gap-2 whitespace-nowrap rounded-sm px-4 py-2 text-sm font-semibold transition-all duration-200
                             hover:-translate-y-px border border-(--border)/20 bg-transparent text-(--text-subtle) hover:border-(--accent) hover:bg-(--accent-glow) hover:text-(--accent)">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M0 0h24v24H0V0zm4 4h16v16H4V4zm2 2v12h8v-2H8V6H6zm8 0v12h4V6h-4z" />
                            </svg> npm package
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
