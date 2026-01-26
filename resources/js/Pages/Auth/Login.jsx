import React from "react";
import { Navbar } from "@/Components/Navbar";
import LoginForm from "@/Components/Auth/Login/LoginForm";
import SocialLoginButtons from "@/Components/Auth/Login/SocialLoginButtons";
import LoginFooter from "@/Components/Auth/Login/LoginFooter";
import Footer from "@/Components/Home/Footer";

export default function Login() {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen">
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Left Side - Hero Section with Image Grid */}
                    <div className="lg:w-1/2">
                        <div className="max-w-lg">
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-100 dark:border-blue-800 rounded-full px-6 py-3 mb-8">
                                <div className="flex items-center gap-2">
                                    <span className="text-sm font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-wider">
                                        Welcome Back
                                    </span>
                                </div>
                            </div>

                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                                Login to{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                                    Your Account
                                </span>
                            </h1>

                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                                Access your personalized dashboard, manage your
                                listings, and connect with potential roommates.
                            </p>

                            {/* Image Grid */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="space-y-4">
                                    <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                                        <img
                                            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                            alt="Modern apartment living room"
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                                            <p className="text-white text-sm font-medium">
                                                Modern Apartments
                                            </p>
                                        </div>
                                    </div>
                                    <div className="relative h-32 rounded-2xl overflow-hidden shadow-lg">
                                        <img
                                            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                            alt="Shared kitchen space"
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                                            <p className="text-white text-xs font-medium">
                                                Shared Spaces
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="relative h-32 rounded-2xl overflow-hidden shadow-lg">
                                        <img
                                            src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                            alt="Student accommodation"
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                                            <p className="text-white text-xs font-medium">
                                                Student Rooms
                                            </p>
                                        </div>
                                    </div>
                                    <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                                        <img
                                            src="https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                            alt="City view apartment"
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                                            <p className="text-white text-sm font-medium">
                                                City Center Living
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Login Form */}
                    <div className="lg:w-1/2">
                        <div className="max-w-md mx-auto">
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
                                                KitaRoom
                                            </h2>
                                        </div>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm text-center">
                                            Please enter your details to sign
                                            in.
                                        </p>
                                    </div>

                                    <SocialLoginButtons />
                                    <LoginForm />
                                </div>

                                <LoginFooter />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
