import ComponentsPills from "@/components/LandingPage/ComponentsPills";
import CTA from "@/components/LandingPage/CTA";
import Features from "@/components/LandingPage/Features";
import Hero from "@/components/LandingPage/Hero";
import Preview from "@/components/LandingPage/Preview";

export default function Home() {
    return (
        <main className="flex min-h-dvh flex-col">
            <Hero />
            <ComponentsPills />
            <Preview />
            <Features />
            <CTA />
        </main>
    );
}
