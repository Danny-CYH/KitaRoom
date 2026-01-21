import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Users } from "lucide-react";

export function CTASection() {
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
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
            },
        },
    };

    const badgeVariants = {
        hidden: { scale: 0, rotate: -180 },
        visible: {
            scale: 1,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 15,
            },
        },
    };

    const buttonVariants = {
        rest: {
            scale: 1,
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
        },
        hover: {
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 25,
            },
        },
        tap: { scale: 0.95 },
    };

    const iconVariants = {
        rest: { scale: 1, rotate: 0 },
        hover: {
            scale: 1.2,
            rotate: 5,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 10,
            },
        },
    };

    const floatingAnimation = {
        y: [0, -10, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
        },
    };

    const pulseAnimation = {
        scale: [1, 1.05, 1],
        opacity: [0.5, 0.8, 0.5],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
        },
    };

    const gradientAnimation = {
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        transition: {
            duration: 5,
            repeat: Infinity,
            ease: "linear",
        },
    };

    const checkIconVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeInOut",
            },
        },
    };

    const benefitItemVariants = {
        rest: {
            scale: 1,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
        },
        hover: {
            scale: 1.05,
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            y: -5,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 25,
            },
        },
    };

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="py-20 lg:py-10 overflow-hidden"
        >
            <div className="relative overflow-hidden bg-gradient-to-b from-blue-900 via-blue-400 to-blue-500">
                {/* Animated Background Elements */}
                <motion.div
                    animate={floatingAnimation}
                    className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/3 translate-x-1/3 blur-3xl"
                ></motion.div>
                <motion.div
                    animate={{
                        ...floatingAnimation,
                        transition: {
                            ...floatingAnimation.transition,
                            delay: 1,
                        },
                    }}
                    className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl"
                ></motion.div>

                {/* Pulsing Orbs */}
                <motion.div
                    animate={pulseAnimation}
                    className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-300/20 rounded-full blur-2xl"
                ></motion.div>
                <motion.div
                    animate={{
                        ...pulseAnimation,
                        transition: {
                            ...pulseAnimation.transition,
                            delay: 0.5,
                        },
                    }}
                    className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-300/20 rounded-full blur-2xl"
                ></motion.div>

                <div className="relative max-w-6xl mx-auto px-6 py-16 lg:py-10">
                    <div className="text-center max-w-3xl mx-auto">
                        {/* Badge */}
                        <motion.div
                            variants={badgeVariants}
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-700/30 to-blue-600/30 backdrop-blur-sm px-5 py-2 rounded-full mb-8 border border-white/20"
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            >
                                <Users className="w-4 h-4 text-white" />
                            </motion.div>
                            <span className="text-sm font-semibold text-white">
                                50,000+ Happy Users
                            </span>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h2
                            variants={itemVariants}
                            className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
                        >
                            Ready to find your
                            <motion.span
                                animate={gradientAnimation}
                                style={{
                                    backgroundSize: "200% auto",
                                }}
                                className="block mt-2 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 bg-clip-text text-transparent"
                            >
                                perfect living space?
                            </motion.span>
                        </motion.h2>

                        {/* Subtitle */}
                        <motion.p
                            variants={itemVariants}
                            className="text-xl text-blue-50 mb-12 max-w-2xl mx-auto"
                        >
                            Join thousands of students and professionals finding
                            their ideal rooms and compatible roommates across
                            Malaysia.
                        </motion.p>

                        {/* Benefits */}
                        <motion.div
                            variants={containerVariants}
                            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto"
                        >
                            {[
                                {
                                    icon: CheckCircle,
                                    color: "text-green-300",
                                    text: "Verified",
                                },
                                {
                                    icon: CheckCircle,
                                    color: "text-blue-300",
                                    text: "Secure",
                                },
                                {
                                    icon: CheckCircle,
                                    color: "text-yellow-300",
                                    text: "Fast",
                                },
                                {
                                    icon: CheckCircle,
                                    color: "text-purple-300",
                                    text: "Free",
                                },
                            ].map((benefit, index) => {
                                const IconComponent = benefit.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        variants={benefitItemVariants}
                                        initial="rest"
                                        whileHover="hover"
                                        className="flex items-center gap-3 px-4 py-3 backdrop-blur-sm rounded-xl border border-white/20 cursor-pointer"
                                    >
                                        <motion.div
                                            variants={iconVariants}
                                            initial="rest"
                                            whileHover="hover"
                                        >
                                            <IconComponent
                                                className={`w-5 h-5 ${benefit.color}`}
                                            />
                                        </motion.div>
                                        <span className="text-white text-sm font-medium">
                                            {benefit.text}
                                        </span>
                                    </motion.div>
                                );
                            })}
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={containerVariants}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <motion.button
                                variants={buttonVariants}
                                initial="rest"
                                whileHover="hover"
                                whileTap="tap"
                                className="group flex items-center justify-center gap-3 px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all shadow-lg"
                            >
                                Get Started Now
                                <motion.div
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                    }}
                                    className="inline-block"
                                >
                                    <ArrowRight className="w-5 h-5" />
                                </motion.div>
                            </motion.button>
                            <motion.button
                                variants={buttonVariants}
                                initial="rest"
                                whileHover="hover"
                                whileTap="tap"
                                className="px-8 py-4 bg-gradient-to-r from-blue-700/30 to-blue-600/30 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl transition-all"
                            >
                                List Your Room
                            </motion.button>
                        </motion.div>
                    </div>
                </div>

                {/* Floating particles */}
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [0, -100, 0],
                            x: [0, Math.random() * 100 - 50, 0],
                            rotate: [0, 180, 360],
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.5,
                        }}
                        className="absolute w-2 h-2 bg-white/30 rounded-full"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </div>
        </motion.section>
    );
}
