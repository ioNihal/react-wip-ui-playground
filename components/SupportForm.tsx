"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "sent" | "error";

export default function SupportForm() {
    const [status, setStatus] = useState<Status>("idle");
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    async function submit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("loading");
        setErrorMsg(null);

        const form = e.currentTarget;

        const data = {
            subject: form.subject.value.trim(),
            email: form.email.value.trim(),
            message: form.message.value.trim(),
        };

        try {
            const res = await fetch("/api/support", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const json = await res.json().catch(() => null);

            if (!res.ok) {
                setStatus("error");
                setErrorMsg(json?.error || "Failed to send message.");
                return;
            }

            setStatus("sent");
            form.reset();

            // Reset UI after a few seconds
            setTimeout(() => setStatus("idle"), 4000);
            
        } catch (err: unknown) {
            console.error("Error submitting support form:", err);
            setStatus("error");
            setErrorMsg("Network error. Check your connection.");
        }
    }

    return (
        <form
            onSubmit={submit}
            className="mt-8 space-y-4 bg-(--bg-card) p-6 shadow-md"
        >
            {/* Success message */}
            {status === "sent" && (
                <p className="text-sm text-(--success) text-center">
                    Your message has been sent. We&apos;ll get back to you soon.
                </p>
            )}
            
            {/* Error message */}
            {status === "error" && (
                <p className="text-sm text-red-500 text-center">
                    {errorMsg}
                </p>
            )}

            <input
                name="subject"
                placeholder="Subject"
                required
                maxLength={200}
                className="w-full rounded-sm border border-(--border) bg-(--bg-surface) px-3 py-2 text-(--text-primary) placeholder-(--text-subtle) focus:outline-none focus:ring-2 focus:ring-(--accent)"
            />

            <input
                name="email"
                type="email"
                placeholder="Your email"
                required
                className="w-full rounded-sm border border-(--border) bg-(--bg-surface) px-3 py-2 text-(--text-primary) placeholder-(--text-subtle) focus:outline-none focus:ring-2 focus:ring-(--accent)"
            />

            <textarea
                name="message"
                placeholder="Your message"
                required
                maxLength={5000}
                className="w-full min-h-32 rounded-sm border border-(--border) bg-(--bg-surface) px-3 py-2 text-(--text-primary) placeholder-(--text-subtle) focus:outline-none focus:ring-2 focus:ring-(--accent)"
            />

            <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-sm bg-(--accent) px-4 py-2 text-(--text-on-dark) font-medium transition-all hover:bg-(--accent-hover) disabled:opacity-60 disabled:cursor-not-allowed"
            >
                {status === "loading" && "Sending..."}
                {status === "sent" && "✓ Message sent"}
                {(status === "idle" || status === "error") && "Send message"}
            </button>

        </form>
    );
}