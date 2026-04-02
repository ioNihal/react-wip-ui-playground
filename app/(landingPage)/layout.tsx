import Footer from "@/components/LandingPage/Footer";
import Header from "@/components/LandingPage/Header";


export default function LandingPageLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
