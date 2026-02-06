// StatsSection.jsx
import React from "react";
import { motion } from "framer-motion";

const StatsSection = () => {
    const stats = [
        {
            value: "10K+",
            label: "Active Listings",
            color: "from-blue-500 to-blue-600",
        },
        {
            value: "5K+",
            label: "Roommates Found",
            color: "from-green-500 to-green-600",
        },
        {
            value: "50K+",
            label: "Users",
            color: "from-purple-500 to-purple-600",
        },
        {
            value: "4.8★",
            label: "Rating",
            color: "from-yellow-500 to-yellow-600",
        },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {stats.map((stat, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-shadow"
                >
                    <div
                        className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                    >
                        {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {stat.label}
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default StatsSection;
