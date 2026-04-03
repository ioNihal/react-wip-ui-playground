export default function Tag({ type }: { type: "server" | "client" }) {
    const isServer = type === "server";

    return (
        <span
            className={`inline-flex items-center gap-1.5 leading-0 rounded-full border px-3 py-2 text-xs font-bold uppercase 
                ${isServer
                    ? "border-[#BCDAB4] bg-[#EBF4E8] text-[#3A7035]"
                    : "border-[#B4C4E8] bg-[#E8EDF7] text-[#2E4EA0]"
                }`}>
            <span className="inline-block h-1.25 w-1.25 rounded-full bg-current opacity-70" />
            {isServer ? "Server" : "Client"}
        </span>
    );
}
