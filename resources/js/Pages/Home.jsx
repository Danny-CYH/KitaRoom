import { Navbar } from "@/Components/Navbar";
import { Hero } from "@/Components/Home/Hero";
import { Features } from "@/Components/Home/Features";
import { FeaturedListings } from "@/Components/Home/FeaturedListings";
import { CTASection } from "@/Components/Home/CTASection";
import { Footer } from "@/Components/Home/Footer";

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
