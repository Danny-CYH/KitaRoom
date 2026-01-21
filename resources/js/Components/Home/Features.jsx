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
    Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

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
        hidden: {
            opacity: 0,
            y: 30,
            scale: 0.95,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.5,
            },
        },
    };

    const iconVariants = {
        hidden: { scale: 0, rotate: -180 },
        visible: {
            scale: 1,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.2,
            },
        },
        hover: {
            rotate: 360,
            scale: 1.1,
            transition: {
                duration: 0.5,
                ease: "easeInOut",
            },
        },
    };

    const badgeVariants = {
        hidden: { scale: 0 },
        visible: {
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 15,
                delay: 0.3,
            },
        },
        hover: {
            scale: 1.1,
            y: -2,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10,
            },
        },
    };

    const textVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut",
            },
        },
    };

    const zapVariants = {
        pulse: {
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0],
            transition: {
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
            },
        },
    };

    const cardHoverVariants = {
        hover: {
            y: -8,
            scale: 1.02,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 25,
            },
        },
    };

    return (
        <section className="py-16 lg:py-14 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-1/4 -left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 -right-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center max-w-6xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-100 dark:border-blue-800 rounded-full px-6 py-3 mb-6"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring" }}
                    >
                        <motion.div variants={zapVariants} animate="pulse">
                            <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </motion.div>
                        <motion.span
                            className="text-sm font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-wider"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            Why Choose KitaRoom
                        </motion.span>
                        <motion.div
                            className="ml-2"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            <Sparkles className="w-4 h-4 text-yellow-500" />
                        </motion.div>
                    </motion.div>

                    <motion.h2
                        className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        Everything you need for
                        <motion.span
                            className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, type: "spring" }}
                        >
                            perfect living experience
                        </motion.span>
                    </motion.h2>

                    <motion.p
                        className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 }}
                    >
                        We've built the most comprehensive platform designed for
                        student and young professional accommodation.
                    </motion.p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="group relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-8 hover:shadow-2xl hover:border-blue-200 dark:hover:border-blue-800/50 transition-all duration-300"
                            variants={itemVariants}
                            whileHover="hover"
                            custom={index}
                            style={{ originX: 0.5, originY: 0.5 }}
                        >
                            {/* Hover Effect Background */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl"
                                style={{
                                    background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                                }}
                                initial={false}
                                whileHover={{
                                    opacity: 0.1,
                                    transition: { duration: 0.3 },
                                }}
                            />

                            {/* Animated Icon */}
                            <motion.div
                                className={`mb-6 p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} w-fit shadow-lg text-white relative overflow-hidden`}
                                variants={iconVariants}
                                whileHover="hover"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-white/10"
                                    initial={{ x: "-100%" }}
                                    whileHover={{ x: "100%" }}
                                    transition={{ duration: 0.6 }}
                                />
                                <div className="relative z-10">
                                    {feature.icon}
                                </div>
                            </motion.div>

                            {/* Content */}
                            <div className="space-y-4 relative z-10">
                                <div className="flex items-center justify-between">
                                    <motion.h3
                                        className="text-xl font-bold text-gray-900 dark:text-white"
                                        variants={textVariants}
                                    >
                                        {feature.title}
                                    </motion.h3>
                                    <motion.span
                                        className="text-xs font-semibold px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                                        variants={badgeVariants}
                                        whileHover="hover"
                                    >
                                        {feature.stats}
                                    </motion.span>
                                </div>

                                <motion.p
                                    className="text-gray-600 dark:text-gray-300 leading-relaxed"
                                    variants={textVariants}
                                >
                                    {feature.description}
                                </motion.p>

                                <motion.div
                                    className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 cursor-pointer"
                                    variants={textVariants}
                                    whileHover={{ x: 5 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 400,
                                    }}
                                >
                                    <motion.div
                                        whileHover={{ rotate: 90 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <CheckCircle className="w-4 h-4" />
                                    </motion.div>
                                    <motion.span
                                        whileHover={{ scale: 1.05 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                        }}
                                    >
                                        Learn more
                                    </motion.span>
                                    <motion.span
                                        className="ml-1"
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            repeatDelay: 2,
                                        }}
                                    >
                                        →
                                    </motion.span>
                                </motion.div>
                            </div>

                            {/* Hover border animation */}
                            <motion.div
                                className="absolute inset-0 rounded-2xl pointer-events-none"
                                initial={false}
                                whileHover={{
                                    boxShadow:
                                        "0 0 0 2px rgba(37, 99, 235, 0.2)",
                                }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Floating decoration elements */}
                <div className="relative mt-4">
                    <motion.div
                        className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"
                        animate={{
                            y: [0, -20, 0],
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div
                        className="absolute top-0 right-1/4 w-24 h-24 bg-gradient-to-br from-green-500/10 to-cyan-500/10 rounded-full blur-2xl"
                        animate={{
                            y: [0, 20, 0],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1,
                        }}
                    />
                </div>
            </div>
        </section>
    );
}
