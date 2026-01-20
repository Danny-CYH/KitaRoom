import { Navbar } from "@/Components/Navbar";
import { Hero } from "@/Components/Hero";
import { Features } from "@/Components/Features";
import { FeaturedListings } from "@/Components/FeaturedListings";
import { CTASection } from "@/Components/CTASection";
import { Footer } from "@/Components/Footer";

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
            <Navbar />
            <main>
                <Hero />
                <Features />
                <FeaturedListings />
                <CTASection />
            </main>
            <Footer />
        </div>
    );
}
