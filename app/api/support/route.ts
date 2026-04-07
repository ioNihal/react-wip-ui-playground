import { NextRequest, NextResponse } from "next/server";
import { formcord } from "formcord";

function shortId() {
    const bytes = new Uint8Array(4);
    crypto.getRandomValues(bytes);
    return Array.from(bytes, b => b.toString(16).padStart(2, "0")).join("");
}

export async function POST(req: NextRequest) {
    try {
        const { subject, email, message } = await req.json();

        // basic validation
        if (!subject || !email || !message) {
            return NextResponse.json(
                { error: "Missing fields" },
                { status: 400 }
            );
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return NextResponse.json({ error: "Invalid email" }, { status: 400 });
        }

        if (!subject || subject.trim().length < 3) {
            return NextResponse.json(
                { error: "Subject must be at least 3 characters." },
                { status: 400 }
            );
        }

        if (!message || message.length < 10) {
            return NextResponse.json(
                { error: "Message must be at least 10 characters." },
                { status: 400 }
            );
        }

        if (message.length > 5000) {
            return NextResponse.json(
                { error: "Message too long" },
                { status: 400 }
            );
        }

        if (!process.env.FORMCORD_DISCORD_TOKEN || !process.env.FORMCORD_DISCORD_CHANNEL) {
            return NextResponse.json(
                { error: "Server error. Please try later" },
                { status: 500 }
            );
        }


        await formcord.contact({
            token: process.env.FORMCORD_DISCORD_TOKEN,
            channelId: process.env.FORMCORD_DISCORD_CHANNEL,
            subject,
            email,
            message,
            content: "New Website Inquiry @everyone",
            theme: {
                footer: {
                    text: `Message ID: ${shortId()}`
                },
                timestamp: new Date().toISOString(),
                color: 0x5865f2,
            }
        })

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Unexpected server error." },
            { status: 500 }
        );
    }
}
