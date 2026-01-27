// components/Hero.jsx
import React from "react";
import { Link } from "@inertiajs/react";
import { Shield, Users, TrendingUp, ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";

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

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12,
            },
        },
    };

    const floatVariants = {
        float: {
            y: [0, -10, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    const pulseVariants = {
        pulse: {
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.6, 0.3],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    return (
        <section className="relative overflow-hidden py-12 lg:py-10 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>

            <motion.div
                className="absolute top-1/4 -right-32 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
                variants={pulseVariants}
                animate="pulse"
            />

            <motion.div
                className="absolute bottom-1/4 -left-32 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"
                variants={pulseVariants}
                animate="pulse"
                transition={{ delay: 2 }}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    {/* Left Content */}
                    <div className="space-y-8">
                        {/* Trust Badge */}
                        <motion.div
                            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-800/50 border border-blue-100 dark:border-blue-800 rounded-2xl px-6 py-3 shadow-sm"
                            variants={itemVariants}
                            whileHover={{ scale: 1.02, y: -2 }}
                        >
                            <motion.div
                                className="p-2 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Shield className="w-5 h-5 text-white" />
                            </motion.div>
                            <div>
                                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                                    Most Trusted in Malaysia
                                </p>
                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                    Room Renting Platform
                                </p>
                            </div>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.div variants={itemVariants}>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                                <motion.span
                                    className="block text-gray-900 dark:text-white"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    Find your perfect
                                </motion.span>
                                <motion.span
                                    className="block mt-2 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5, type: "spring" }}
                                >
                                    room & roommate
                                </motion.span>
                            </h1>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl"
                            variants={itemVariants}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                        >
                            Malaysia's premier platform connecting students and
                            young professionals with verified accommodations and
                            compatible roommates. Lifestyle matching made
                            simple.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4"
                            variants={itemVariants}
                        >
                            <Link href={route("browse-room")}>
                                <motion.button
                                    className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 overflow-hidden"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 }}
                                >
                                    <span className="relative z-10">
                                        Browse Available Rooms
                                    </span>
                                    <motion.span
                                        className="relative z-10"
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            repeatDelay: 1,
                                        }}
                                    >
                                        <ArrowRight className="w-5 h-5" />
                                    </motion.span>
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        initial={false}
                                    />
                                </motion.button>
                            </Link>

                            <motion.button
                                className="inline-flex items-center justify-center gap-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold px-8 py-4 rounded-2xl hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9 }}
                            >
                                <MapPin className="w-5 h-5" />
                                Explore Locations
                            </motion.button>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8"
                            variants={containerVariants}
                        >
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-100 dark:border-gray-700 rounded-2xl p-4"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05, y: -3 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="flex items-center gap-3">
                                        <motion.div
                                            className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg"
                                            whileHover={{
                                                rotate: 15,
                                                scale: 1.1,
                                            }}
                                        >
                                            {stat.icon}
                                        </motion.div>
                                        <div>
                                            <motion.p
                                                className="text-2xl font-bold text-gray-900 dark:text-white"
                                                initial={{
                                                    opacity: 0,
                                                    scale: 0.5,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    scale: 1,
                                                }}
                                                transition={{
                                                    delay: 1 + index * 0.1,
                                                    type: "spring",
                                                }}
                                            >
                                                {stat.value}
                                            </motion.p>
                                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                                {stat.label}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Content - Hero Image */}
                    <motion.div
                        className="relative"
                        variants={itemVariants}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, type: "spring" }}
                    >
                        <motion.div
                            className="relative rounded-3xl overflow-hidden shadow-2xl"
                            whileHover={{ y: -5 }}
                            variants={floatVariants}
                            animate="float"
                        >
                            <div
                                className="aspect-[4/3] bg-cover bg-center"
                                style={{
                                    backgroundImage:
                                        "url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')",
                                }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                                {/* Featured Card */}
                                <motion.div
                                    className="absolute bottom-6 left-6 right-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.2 }}
                                >
                                    <div className="bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6">
                                        <div className="flex items-center justify-between">
                                            <div className="space-y-2">
                                                <p className="text-sm font-semibold text-white/80 uppercase tracking-wider">
                                                    Featured Listing
                                                </p>
                                                <motion.h3
                                                    className="text-xl font-bold text-white"
                                                    initial={{
                                                        opacity: 0,
                                                        x: -10,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        x: 0,
                                                    }}
                                                    transition={{ delay: 1.4 }}
                                                >
                                                    The Fennel, Sentul East
                                                </motion.h3>
                                                <motion.p
                                                    className="text-sm text-white/60 flex items-center gap-2"
                                                    initial={{
                                                        opacity: 0,
                                                        x: -10,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        x: 0,
                                                    }}
                                                    transition={{ delay: 1.5 }}
                                                >
                                                    <MapPin className="w-4 h-4" />
                                                    Kuala Lumpur • Near
                                                    Universities
                                                </motion.p>
                                            </div>
                                            <div className="text-right">
                                                <motion.p
                                                    className="text-2xl font-bold text-white"
                                                    initial={{
                                                        opacity: 0,
                                                        scale: 0.8,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        scale: 1,
                                                    }}
                                                    transition={{
                                                        delay: 1.6,
                                                        type: "spring",
                                                    }}
                                                >
                                                    RM 950
                                                    <span className="text-sm font-normal">
                                                        /mo
                                                    </span>
                                                </motion.p>
                                                <motion.button
                                                    className="mt-3 px-4 py-2 bg-white/20 hover:bg-white/30 text-white text-sm font-medium rounded-xl transition-colors"
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: 1.7 }}
                                                >
                                                    View Details
                                                </motion.button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Floating Elements */}
                        <motion.div
                            className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-3xl blur-xl"
                            variants={floatVariants}
                            animate="float"
                            transition={{ delay: 0.5 }}
                        />
                        <motion.div
                            className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-500/10 rounded-3xl blur-xl"
                            variants={floatVariants}
                            animate="float"
                            transition={{ delay: 1 }}
                        />
                    </motion.div>
                </motion.div>
            </div>

            {/* Floating Particles Animation */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-500/20 rounded-full"
                        initial={{
                            x: Math.random() * 100 + "%",
                            y: Math.random() * 100 + "%",
                        }}
                        animate={{
                            y: [null, "-100vh"],
                            x: [null, Math.random() * 100 - 50 + "px"],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 5,
                        }}
                    />
                ))}
            </div>
        </section>
    );
}
