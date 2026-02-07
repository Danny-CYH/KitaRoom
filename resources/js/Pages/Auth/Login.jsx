// Login.jsx
import React from "react";
import LoginHero from "@/Components/Auth/Login/LoginHero";
import LoginForm from "@/Components/Auth/Login/LoginForm";
import SocialLoginButtons from "@/Components/Auth/Login/SocialLoginButtons";
import LoginFooter from "@/Components/Auth/Login/LoginFooter";

export default function Login() {
    return (
        <div className="min-h-screen bg-[#eef2f7] font-body text-slate-900">
            <div className="min-h-screen flex items-center justify-center px-4 py-10">
                <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl shadow-slate-900/10 overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Left - Form */}
                        <div className="px-8 sm:px-12 py-10 sm:py-12">
                            <div className="flex items-center gap-3 mb-10">
                                <div className="w-10 h-10 rounded-xl bg-[#1e40af] text-white flex items-center justify-center font-display text-sm">
                                    KR
                                </div>
                                <div className="text-lg font-display font-semibold">
                                    KitaRoom
                                </div>
                            </div>

                            <div className="space-y-3 mb-8">
                                <h1 className="text-3xl sm:text-4xl font-display font-semibold">
                                    Welcome Back!
                                </h1>
                                <p className="text-slate-600">
                                    Sign in to access your dashboard and
                                    continue finding the right room and
                                    roommate.
                                </p>
                            </div>

                            <SocialLoginButtons />
                            <LoginForm />
                            <LoginFooter />
                        </div>

                        {/* Right - Hero */}
                        <div className="hidden lg:flex relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#0f2f6a] via-[#1e40af] to-[#60a5fa]"></div>
                            <div className="relative z-10 w-full px-12 py-14 text-white">
                                <LoginHero />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
