// components/Hero.jsx
import React from "react";
import {
    Shield,
    Users,
    Star,
    TrendingUp,
    ArrowRight,
    MapPin,
} from "lucide-react";

export function Hero() {
    const stats = [
        {
            icon: <Users className="w-5 h-5" />,
            value: "50K+",
            label: "Active Users",
        },
        {
            icon: <Shield className="w-5 h-5" />,
            value: "10K+",
            label: "Verified Rooms",
        },
        {
            icon: <TrendingUp className="w-5 h-5" />,
            value: "95%",
            label: "Satisfaction",
        },
    ];

    return (
        <section className="relative overflow-hidden py-12 lg:py-10 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
            <div className="absolute top-1/4 -right-32 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        {/* Trust Badge */}
                        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-800/50 border border-blue-100 dark:border-blue-800 rounded-2xl px-6 py-3 shadow-sm">
                            <div className="p-2 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg">
                                <Shield className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                                    Most Trusted in Malaysia
                                </p>
                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                    Room Renting Platform
                                </p>
                            </div>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                            <span className="block text-gray-900 dark:text-white">
                                Find your perfect
                            </span>
                            <span className="block mt-2 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                                room & roommate
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                            Malaysia's premier platform connecting students and
                            young professionals with verified accommodations and
                            compatible roommates. Lifestyle matching made
                            simple.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300">
                                Browse Available Rooms
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="inline-flex items-center justify-center gap-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold px-8 py-4 rounded-2xl hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all">
                                <MapPin className="w-5 h-5" />
                                Explore Locations
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-100 dark:border-gray-700 rounded-2xl p-4"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                                            {stat.icon}
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                                {stat.value}
                                            </p>
                                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                                {stat.label}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Hero Image */}
                    <div className="relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <div
                                className="aspect-[4/3] bg-cover bg-center"
                                style={{
                                    backgroundImage:
                                        "url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')",
                                }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                                {/* Featured Card */}
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6">
                                        <div className="flex items-center justify-between">
                                            <div className="space-y-2">
                                                <p className="text-sm font-semibold text-white/80 uppercase tracking-wider">
                                                    Featured Listing
                                                </p>
                                                <h3 className="text-xl font-bold text-white">
                                                    The Fennel, Sentul East
                                                </h3>
                                                <p className="text-sm text-white/60 flex items-center gap-2">
                                                    <MapPin className="w-4 h-4" />
                                                    Kuala Lumpur • Near
                                                    Universities
                                                </p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-2xl font-bold text-white">
                                                    RM 950
                                                    <span className="text-sm font-normal">
                                                        /mo
                                                    </span>
                                                </p>
                                                <button className="mt-3 px-4 py-2 bg-white/20 hover:bg-white/30 text-white text-sm font-medium rounded-xl transition-colors">
                                                    View Details
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-3xl blur-xl"></div>
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-500/10 rounded-3xl blur-xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}