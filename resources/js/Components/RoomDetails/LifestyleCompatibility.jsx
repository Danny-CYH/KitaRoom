import React from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const LifestyleCompatibility = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6"
        >
            <div className="relative size-20 shrink-0">
                <svg className="size-full" viewBox="0 0 36 36">
                    <path
                        className="text-gray-200 dark:text-gray-700 stroke-current"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        strokeWidth="3"
                    />
                    <path
                        className="text-primary stroke-current"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        strokeDasharray="85, 100"
                        strokeLinecap="round"
                        strokeWidth="3"
                    />
                    <text
                        className="text-primary font-bold text-[8px]"
                        fill="currentColor"
                        textAnchor="middle"
                        x="18"
                        y="20.35"
                    >
                        85%
                    </text>
                </svg>
            </div>
            <div className="flex-1">
                <h4 className="text-lg font-bold text-primary mb-1">
                    Great Lifestyle Match!
                </h4>
                <p className="text-[#4d6599] dark:text-gray-300 text-sm leading-relaxed">
                    Based on your profile, you share similar habits
                    (Cleanliness, Late Sleeper) with the current housemates.
                    You're likely to get along well!
                </p>
            </div>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="whitespace-nowrap px-4 py-2 bg-white dark:bg-background-dark border border-primary/20 text-primary rounded-lg text-xs font-bold shadow-sm"
            >
                View Analysis
            </motion.button>
        </motion.div>
    );
};

export default LifestyleCompatibility;
