export default function Tag({ type }: { type: "server" | "client" }) {
    const isServer = type === "server";

    return (
        <span
            className={`inline-flex items-center gap-1.25 rounded-full border-[1.5px] px-2.5 py-0.75 text-[0.68rem] font-bold uppercase tracking-[0.08em] ${isServer
                ? "border-[#BCDAB4] bg-[#EBF4E8] text-[#3A7035]"
                : "border-[#B4C4E8] bg-[#E8EDF7] text-[#2E4EA0]"
                }`}
        >
            <span className="inline-block h-1.25 w-1.25 rounded-full bg-current opacity-70" />
            {isServer ? "Server" : "Client"}
        </span>
    );
}
