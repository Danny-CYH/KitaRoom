import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, MapPin } from "lucide-react";

const RoomDescription = () => {
    const [activeTab, setActiveTab] = useState("description");

    const tabs = [
        { id: "description", label: "Description" },
        { id: "rules", label: "House Rules" },
        { id: "housemates", label: "Housemates (2)" },
        { id: "comments", label: "Comments" },
    ];

    const features = [
        "5 mins walk to Universiti LRT Station",
        "Direct access to grocery stores & pharmacies",
        "High-tier security with 24/7 guard service",
        "Queen-sized bed with memory foam mattress",
        "Built-in wardrobe with full-length mirror",
        "Dedicated workspace with ergonomic chair",
        "High-speed fiber optic internet",
        "Access to swimming pool and gym",
    ];

    return (
        <div className="space-y-8">
            {/* Tab Navigation */}
            <div className="border-b border-gray-200 dark:border-gray-800">
                <nav className="flex gap-8 overflow-x-auto">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`pb-4 text-sm font-medium whitespace-nowrap transition-colors ${
                                activeTab === tab.id
                                    ? "border-b-2 border-primary text-primary font-bold"
                                    : "border-b-2 border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Tab Content */}
            <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
            >
                {activeTab === "description" && (
                    <>
                        <div className="prose dark:prose-invert max-w-none">
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                Looking for a clean and tidy professional or
                                student to join our home! This middle room is
                                situated in South Link, Bangsar South, offering
                                a luxury lifestyle at an affordable price. The
                                room comes with a queen-sized bed, large
                                wardrobe, and a dedicated workspace.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                The apartment is located on the 12th floor with
                                panoramic city views. You'll have access to all
                                building amenities including swimming pool,
                                fully-equipped gym, BBQ area, and 24-hour
                                security.
                            </p>
                        </div>

                        {/* Features List */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-2"
                                >
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-600 dark:text-gray-300 text-sm">
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Map Section */}
                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                Location & Accessibility
                            </h3>
                            <div className="w-full h-64 rounded-xl bg-gray-200 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                                    <div className="text-center">
                                        <MapPin className="w-12 h-12 text-red-500 mx-auto mb-2" />
                                        <p className="text-gray-700 dark:text-gray-300 font-medium">
                                            Bangsar South, Kuala Lumpur
                                        </p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            Interactive map would be displayed
                                            here
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                    <div className="font-bold text-primary">
                                        5 min
                                    </div>
                                    <div className="text-gray-500 dark:text-gray-400">
                                        Walk to LRT
                                    </div>
                                </div>
                                <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                    <div className="font-bold text-primary">
                                        10 min
                                    </div>
                                    <div className="text-gray-500 dark:text-gray-400">
                                        To KL Sentral
                                    </div>
                                </div>
                                <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                    <div className="font-bold text-primary">
                                        15 min
                                    </div>
                                    <div className="text-gray-500 dark:text-gray-400">
                                        To Mid Valley
                                    </div>
                                </div>
                                <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                    <div className="font-bold text-primary">
                                        2 min
                                    </div>
                                    <div className="text-gray-500 dark:text-gray-400">
                                        To Grocery
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {activeTab === "rules" && (
                    <div className="space-y-4">
                        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                            <h4 className="font-bold text-yellow-800 dark:text-yellow-200 mb-2">
                                House Rules
                            </h4>
                            <ul className="space-y-2 text-sm text-yellow-700 dark:text-yellow-300">
                                <li className="flex items-start gap-2">
                                    <span className="mt-0.5">•</span>
                                    <span>No smoking inside the apartment</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-0.5">•</span>
                                    <span>Keep common areas clean</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-0.5">•</span>
                                    <span>
                                        No overnight guests without notice
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-0.5">•</span>
                                    <span>Quiet hours: 11 PM - 7 AM</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default RoomDescription;
