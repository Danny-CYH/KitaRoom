import React from "react";
import { Navbar } from "@/Components/Navbar";
import RegisterForm from "@/Components/Auth/Register/RegisterForm";
import SocialRegisterButtons from "@/Components/Auth/Register/SocialRegisterButtons";
import AuthFooter from "@/Components/Auth/Register/AuthFooter";
import { motion } from "framer-motion";

export default function RegisterPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen">
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Left Side - Hero Section */}
                    <div className="lg:w-1/2">
                        <div className="max-w-lg">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-100 dark:border-blue-800 rounded-full px-6 py-3 mb-8"
                            >
                                <div className="flex items-center gap-2">
                                    <span className="text-sm font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-wider">
                                        Join Our Community
                                    </span>
                                </div>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
                            >
                                Start Your Journey{" "}
                                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 bg-clip-text text-transparent">
                                    With Us
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-lg text-gray-600 dark:text-gray-300 mb-8"
                            >
                                Join thousands of students and professionals
                                finding their perfect homes and compatible
                                roommates across Malaysia.
                            </motion.p>

                            {/* Benefits Grid */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
                            >
                                <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all">
                                    <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                                        <span className="text-blue-600 dark:text-blue-400 text-lg">
                                            🔍
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white">
                                            Find Perfect Rooms
                                        </h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            Verified listings only
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all">
                                    <div className="w-10 h-10 rounded-lg bg-green-50 dark:bg-green-900/20 flex items-center justify-center">
                                        <span className="text-green-600 dark:text-green-400 text-lg">
                                            👥
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white">
                                            Connect Instantly
                                        </h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            Message landlords directly
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all">
                                    <div className="w-10 h-10 rounded-lg bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center">
                                        <span className="text-purple-600 dark:text-purple-400 text-lg">
                                            ⭐
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white">
                                            Verified Profiles
                                        </h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            Trust and safety first
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all">
                                    <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center">
                                        <span className="text-amber-600 dark:text-amber-400 text-lg">
                                            💬
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white">
                                            Smart Matching
                                        </h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            Find compatible roommates
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Stats Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 mb-8 border border-blue-100 dark:border-gray-700"
                            >
                                <div className="grid grid-cols-3 gap-4 text-center">
                                    <div>
                                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                            50K+
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">
                                            Active Users
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                                            10K+
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">
                                            Listings
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                                            4.8★
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">
                                            Rating
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Testimonial */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center text-white font-bold">
                                        S
                                    </div>
                                    <div>
                                        <p className="text-gray-700 dark:text-gray-300 italic mb-2">
                                            "Found my perfect apartment and two
                                            amazing roommates within days! The
                                            platform made everything so easy."
                                        </p>
                                        <div className="flex items-center gap-2">
                                            <div className="text-sm font-semibold text-gray-900 dark:text-white">
                                                Sarah Chen
                                            </div>
                                            <div className="text-xs text-gray-500 dark:text-gray-400">
                                                • Sunway University Student
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Side - Registration Form */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="max-w-md mx-auto"
                        >
                            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-800 overflow-hidden">
                                <div className="p-8 sm:p-10">
                                    <div className="flex flex-col items-center mb-8">
                                        <div className="flex items-center gap-2 text-primary mb-4">
                                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                                <span className="text-primary text-xl">
                                                    🏠
                                                </span>
                                            </div>
                                            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                                                Join KitaRoom
                                            </h2>
                                        </div>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm text-center">
                                            Create your free account in less
                                            than a minute
                                        </p>
                                    </div>

                                    <SocialRegisterButtons />
                                    <RegisterForm />
                                </div>

                                <AuthFooter
                                    text="Already have an account?"
                                    linkText="Login"
                                    linkHref="/login"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
