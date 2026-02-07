// StatsSection.jsx
import React from "react";
import { motion } from "framer-motion";

const StatsSection = () => {
    const stats = [
        {
            value: "10K+",
            label: "Active Listings",
            color: "from-emerald-500 to-emerald-600",
        },
        {
            value: "5K+",
            label: "Roommates Found",
            color: "from-sky-500 to-sky-600",
        },
        {
            value: "50K+",
            label: "Users",
            color: "from-amber-500 to-amber-600",
        },
        {
            value: "4.8?",
            label: "Rating",
            color: "from-rose-500 to-rose-600",
        },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-4 shadow-sm"
                >
                    <div
                        className={`text-2xl font-display font-semibold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                    >
                        {stat.value}
                    </div>
                    <div className="text-sm text-slate-600 mt-1">
                        {stat.label}
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default StatsSection;
