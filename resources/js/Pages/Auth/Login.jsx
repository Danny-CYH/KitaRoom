// Login.jsx
import React from "react";
import LoginHero from "@/Components/Auth/Login/LoginHero";
import LoginForm from "@/Components/Auth/Login/LoginForm";
import SocialLoginButtons from "@/Components/Auth/Login/SocialLoginButtons";
import LoginFooter from "@/Components/Auth/Login/LoginFooter";
import StatsSection from "@/Components/Auth/Login/StatsSection";

export default function Login() {
    return (
        <div className="bg-gradient-to-br from-background-light via-white to-blue-50 dark:from-background-dark dark:via-gray-900 dark:to-blue-900/10 min-h-screen">
            {/* Simple Header */}
            <div className="border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                                <span className="text-white text-xl font-bold">
                                    🏠
                                </span>
                            </div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                                KitaRoom
                            </span>
                        </div>
                        <div>
                            <a
                                href="/register"
                                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
                            >
                                Join Free
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Left Side - Hero Content */}
                    <div className="lg:w-1/2 flex flex-col justify-center">
                        <div className="sticky top-8">
                            <LoginHero />

                            {/* Image Grid - Made smaller */}
                            <div className="grid grid-cols-2 gap-4 mt-8">
                                <div className="relative rounded-xl overflow-hidden shadow-lg aspect-square">
                                    <img
                                        src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                        alt="Modern apartment"
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                                        <p className="text-white text-sm font-semibold">
                                            KL Apartments
                                        </p>
                                    </div>
                                </div>

                                <div className="relative rounded-xl overflow-hidden shadow-lg aspect-square">
                                    <img
                                        src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                        alt="Shared living space"
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                                        <p className="text-white text-sm font-semibold">
                                            Shared Spaces
                                        </p>
                                    </div>
                                </div>

                                <div className="relative rounded-xl overflow-hidden shadow-lg aspect-square">
                                    <img
                                        src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                        alt="Student room"
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                                        <p className="text-white text-sm font-semibold">
                                            Student Rooms
                                        </p>
                                    </div>
                                </div>

                                <div className="relative rounded-xl overflow-hidden shadow-lg aspect-square">
                                    <img
                                        src="https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                        alt="Luxury condo"
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                                        <p className="text-white text-sm font-semibold">
                                            Luxury Condos
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <StatsSection />
                        </div>
                    </div>

                    {/* Right Side - Login Form - Made to match height */}
                    <div className="lg:w-1/2 flex items-center">
                        <div className="w-full max-w-md mx-auto">
                            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl shadow-blue-500/10 dark:shadow-blue-500/5 border border-gray-100 dark:border-gray-800 overflow-hidden">
                                <div className="p-8 sm:p-10">
                                    {/* Form Header */}
                                    <div className="flex flex-col items-center mb-8">
                                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg mb-4">
                                            <span className="text-white text-2xl">
                                                🔑
                                            </span>
                                        </div>
                                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                            Welcome Back
                                        </h2>
                                        <p className="text-gray-500 dark:text-gray-400 text-center">
                                            Sign in to access your account
                                        </p>
                                    </div>

                                    {/* Social Login */}
                                    <SocialLoginButtons />

                                    {/* Login Form */}
                                    <LoginForm />
                                </div>

                                {/* Footer */}
                                <LoginFooter />
                            </div>

                            {/* Trust Badge */}
                            <div className="mt-6 text-center">
                                <div className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm bg-white dark:bg-gray-800 rounded-full px-4 py-2 shadow-sm">
                                    <svg
                                        className="w-5 h-5 text-green-500"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>Trusted by 10,000+ Malaysians</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
