import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    MessageCircle,
    Heart,
    Zap,
    Calendar,
    Clock,
    User,
    Star,
    Shield,
    DollarSign,
    FileText,
} from "lucide-react";

const RoomSidebar = () => {
    const [isSaved, setIsSaved] = useState(false);

    const pricingDetails = [
        {
            icon: Zap,
            label: "Utilities",
            value: "Excluded",
            valueColor: "text-red-500",
        },
        {
            icon: Clock,
            label: "Min. Stay",
            value: "12 Months",
        },
        {
            icon: Calendar,
            label: "Available from",
            value: "1st Oct 2023",
        },
        {
            icon: DollarSign,
            label: "Deposit",
            value: "2 Months",
        },
        {
            icon: FileText,
            label: "Contract",
            value: "Standard Lease",
        },
    ];

    const landlordInfo = {
        name: "Ahmad Daniel",
        since: "Member since 2021",
        listings: "Listed 5 rooms",
        rating: 4.8,
        reviews: 24,
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    };

    return (
        <div className="sticky top-24 space-y-4">
            {/* Pricing Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white dark:bg-background-dark border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm"
            >
                <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-3xl font-black text-primary">
                        RM 850
                    </span>
                    <span className="text-[#4d6599] dark:text-gray-400 font-medium">
                        /month
                    </span>
                </div>

                {/* Pricing Details */}
                <div className="space-y-4 mb-6">
                    {pricingDetails.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="flex justify-between items-center text-sm"
                            >
                                <span className="text-gray-500 dark:text-gray-400 flex items-center gap-2">
                                    <Icon className="w-4 h-4" />
                                    {item.label}
                                </span>
                                <span
                                    className={`font-medium ${item.valueColor || "text-gray-900 dark:text-white"}`}
                                >
                                    {item.value}
                                </span>
                            </div>
                        );
                    })}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3">
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full h-12 bg-primary text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
                    >
                        <MessageCircle className="w-5 h-5" />
                        Message Lister
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setIsSaved(!isSaved)}
                        className={`w-full h-12 border rounded-lg font-bold flex items-center justify-center gap-2 transition-colors ${
                            isSaved
                                ? "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-600 dark:text-red-400"
                                : "bg-white dark:bg-transparent border-gray-200 dark:border-gray-700 text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                        }`}
                    >
                        <Heart
                            className={`w-5 h-5 ${isSaved ? "fill-current" : ""}`}
                        />
                        {isSaved ? "Saved to Wishlist" : "Save to Wishlist"}
                    </motion.button>
                </div>

                {/* Landlord Info */}
                <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="size-12 rounded-full bg-gray-200 overflow-hidden">
                            <User className="w-full h-full p-2 text-gray-400" />
                        </div>
                        <div className="flex-1">
                            <h5 className="font-bold text-sm text-gray-900 dark:text-white">
                                {landlordInfo.name}
                            </h5>
                            <p className="text-xs text-gray-500">
                                {landlordInfo.since}
                            </p>
                            <p className="text-xs text-gray-500">
                                {landlordInfo.listings}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, index) => (
                            <Star
                                key={index}
                                className={`w-4 h-4 ${
                                    index < Math.floor(landlordInfo.rating)
                                        ? "fill-yellow-400 text-yellow-400"
                                        : "text-gray-300 dark:text-gray-700"
                                }`}
                            />
                        ))}
                        <span className="text-xs text-gray-500 font-medium ml-2">
                            {landlordInfo.rating} ({landlordInfo.reviews}{" "}
                            reviews)
                        </span>
                    </div>
                </div>
            </motion.div>

            {/* Security Badge */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-blue-50 dark:bg-primary/5 rounded-xl p-4 flex gap-3"
            >
                <Shield className="w-6 h-6 text-primary" />
                <div>
                    <p className="text-xs font-bold text-primary mb-1">
                        Secure Booking
                    </p>
                    <p className="text-[11px] text-[#4d6599] dark:text-gray-400">
                        Booking through KitaRoom ensures your deposit is held in
                        escrow until move-in.
                    </p>
                </div>
            </motion.div>

            {/* Additional Info */}
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 space-y-3">
                <h5 className="font-bold text-sm text-gray-900 dark:text-white">
                    Quick Facts
                </h5>
                <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                        <span className="text-gray-500">Property Type</span>
                        <span className="font-medium">Condominium</span>
                    </div>
                    <div className="flex justify-between text-xs">
                        <span className="text-gray-500">Floor</span>
                        <span className="font-medium">12th Floor</span>
                    </div>
                    <div className="flex justify-between text-xs">
                        <span className="text-gray-500">Furnishing</span>
                        <span className="font-medium">Fully Furnished</span>
                    </div>
                    <div className="flex justify-between text-xs">
                        <span className="text-gray-500">Room Size</span>
                        <span className="font-medium">180 sqft</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomSidebar;
