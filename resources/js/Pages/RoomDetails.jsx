import React from "react";
import { Home, MapPin, CheckCircle, Share2, Shield } from "lucide-react";
import LifestyleCompatibility from "@/Components/RoomDetails/LifestyleCompatibility";
import RoomGallery from "@/Components/RoomDetails/RoomGallery";
import RoomSpecifications from "@/Components/RoomDetails/RoomSpecifications";
import RoomDescription from "@/Components/RoomDetails/RoomDescription";
import RoomSidebar from "@/Components/RoomDetails/RoomSidebar";
import Footer from "@/Components/Home/Footer";
import { Navbar } from "@/Components/Navbar";

export default function RoomDetails() {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen">
            <Navbar />
            <main className="max-w-[1200px] mx-auto px-4 lg:px-10 py-6">
                {/* Breadcrumbs */}
                <nav className="flex flex-wrap gap-2 py-4">
                    <a
                        className="text-[#4d6599] dark:text-gray-400 text-sm font-medium flex items-center gap-1"
                        href="#"
                    >
                        <Home className="w-4 h-4" />
                        Home
                    </a>
                    <span className="text-[#4d6599] text-sm">/</span>
                    <a
                        className="text-[#4d6599] dark:text-gray-400 text-sm font-medium"
                        href="#"
                    >
                        Kuala Lumpur
                    </a>
                    <span className="text-[#4d6599] text-sm">/</span>
                    <span className="text-primary text-sm font-medium">
                        Bangsar South
                    </span>
                </nav>

                {/* Page Heading */}
                <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-[#0e121b] dark:text-white text-3xl font-black leading-tight tracking-tight">
                            Cozy Middle Room at Bangsar South
                        </h1>
                        <div className="flex items-center gap-2 text-[#4d6599] dark:text-gray-400">
                            <MapPin className="w-5 h-5" />
                            <p className="text-base font-normal">
                                South Link, Bangsar South, Kuala Lumpur
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <button className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-bold border border-primary/20">
                            <Shield className="w-4 h-4" />
                            <span>Verified Listing</span>
                        </button>
                        <button className="p-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                            <Share2 className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <RoomGallery />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Left Column: Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Lifestyle Compatibility Badge */}
                        <LifestyleCompatibility />
                        <RoomSpecifications />
                        <RoomDescription />
                    </div>

                    {/* Right Column: Sticky Sidebar */}
                    <div className="lg:col-span-1">
                        <RoomSidebar />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
