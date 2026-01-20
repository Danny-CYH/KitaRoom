// components/Features.jsx
import React from "react";
import {
    ShieldCheck,
    Users,
    MessageSquare,
    Home,
    Filter,
    Globe,
    Zap,
    CheckCircle,
} from "lucide-react";

export function Features() {
    const features = [
        {
            icon: <ShieldCheck className="w-6 h-6" />,
            title: "Verified Listings",
            description:
                "Every property undergoes manual verification including photo validation and safety checks.",
            gradient: "from-emerald-500 to-green-600",
            stats: "100% Verified",
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Smart Matching",
            description:
                "AI-powered compatibility matching based on lifestyle, habits, and preferences.",
            gradient: "from-blue-500 to-blue-600",
            stats: "95% Match Rate",
        },
        {
            icon: <MessageSquare className="w-6 h-6" />,
            title: "Secure Communication",
            description:
                "End-to-end encrypted messaging. No need to share personal contacts early.",
            gradient: "from-purple-500 to-indigo-600",
            stats: "Safe Chat",
        },
        {
            icon: <Home className="w-6 h-6" />,
            title: "Virtual Tours",
            description:
                "360° virtual tours and live video calls available for remote viewing.",
            gradient: "from-orange-500 to-orange-600",
            stats: "VR Ready",
        },
        {
            icon: <Filter className="w-6 h-6" />,
            title: "Advanced Filters",
            description:
                "Filter by budget, location, amenities, and roommate compatibility.",
            gradient: "from-cyan-500 to-blue-500",
            stats: "50+ Filters",
        },
        {
            icon: <Globe className="w-6 h-6" />,
            title: "Nationwide Coverage",
            description:
                "Properties available across all major cities and university areas.",
            gradient: "from-violet-500 to-purple-600",
            stats: "15+ Cities",
        },
    ];

    return (
        <section className="py-16 lg:py-14">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-6xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-100 dark:border-blue-800 rounded-full px-6 py-3 mb-6">
                        <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        <span className="text-sm font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-wider">
                            Why Choose KitaRoom
                        </span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Everything you need for
                        <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                            perfect living experience
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        We've built the most comprehensive platform designed for
                        student and young professional accommodation.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-8 hover:shadow-2xl hover:border-blue-200 dark:hover:border-blue-800/50 transition-all duration-300"
                        >
                            {/* Hover Effect Background */}
                            <div
                                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl"
                                style={{
                                    background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                                }}
                            ></div>

                            {/* Icon */}
                            <div
                                className={`mb-6 p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} w-fit shadow-lg text-white`}
                            >
                                {feature.icon}
                            </div>

                            {/* Content */}
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                        {feature.title}
                                    </h3>
                                    <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                                        {feature.stats}
                                    </span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {feature.description}
                                </p>
                                <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400">
                                    <CheckCircle className="w-4 h-4" />
                                    <span>Learn more</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
