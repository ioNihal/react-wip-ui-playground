import Hero from "@/components/LandingPage/Hero";
import ComponentsPills from "@/components/LandingPage/ComponentsPills";
import Preview from "@/components/LandingPage/Preview";
import Features from "@/components/LandingPage/Features";
import CTA from "@/components/LandingPage/CTA";

export default function Home() {
    return (
        <main style={{ minHeight: "100dvh", display: "flex", flexDirection: "column" }}>

            {/*  Hero  */}
            <Hero />

            {/*  Component pills  */}
            <ComponentsPills />

            {/*  Code preview  */}
            <Preview />

            {/*  Features grid  */}
            <Features />

            {/*  CTA  */}
            <CTA />
        </main>
    );
}
