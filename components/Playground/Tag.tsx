export default function Tag({ type }: { type: "server" | "client" }) {
    return (
        <span className={type === "server" ? "tag tag-server" : "tag tag-client"}>
            <span
                style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: "currentColor",
                    display: "inline-block",
                    opacity: 0.7,
                }}
            />
            {type === "server" ? "Server" : "Client"}
        </span>
    );
}