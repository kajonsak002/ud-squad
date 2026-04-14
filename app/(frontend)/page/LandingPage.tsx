import Footer from "@/app/components/Footer"
import NavBar from "@/app/components/NavBar"
import HeroBanner from "../section/HeroBanner"
import Features from "../section/Features"
import Package from "../section/Package"


export default function LandingPage() {
    return (
        <div className="min-h-screen bg-black">
            <NavBar />
            <HeroBanner />
            <Features />
            <Package />
            <Footer />
        </div>
    )
}