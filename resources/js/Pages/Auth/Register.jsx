import React from "react";
import RegisterForm from "@/Components/Auth/Register/RegisterForm";
import SocialRegisterButtons from "@/Components/Auth/Register/SocialRegisterButtons";
import AuthFooter from "@/Components/Auth/Register/AuthFooter";

export default function RegisterPage() {
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
                                    Create your account
                                </h1>
                                <p className="text-slate-600">
                                    Join the community to list rooms, match with
                                    roommates, and chat instantly.
                                </p>
                            </div>

                            <SocialRegisterButtons />
                            <RegisterForm />
                            <AuthFooter
                                text="Already have an account?"
                                linkText="Login"
                                linkHref="/login"
                            />
                        </div>

                        {/* Right - Hero */}
                        <div className="hidden lg:flex relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#0f2f6a] via-[#1e40af] to-[#60a5fa]"></div>
                            <div className="relative z-10 w-full px-12 py-14 text-white">
                                <div className="h-full flex flex-col">
                                    <div className="text-4xl leading-tight font-display font-semibold max-w-md">
                                        Start your room search with confidence
                                    </div>

                                    <p className="mt-6 text-white/85 max-w-md">
                                        “KitaRoom made it simple to connect with
                                        verified roommates and shortlist places
                                        in one evening.”
                                    </p>

                                    <div className="mt-6 flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-sm font-semibold">
                                            MR
                                        </div>
                                        <div>
                                            <div className="font-semibold">
                                                Mikhail R.
                                            </div>
                                            <div className="text-sm text-white/70">
                                                Software Engineer, Penang
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-auto pt-10">
                                        <div className="text-xs uppercase tracking-[0.2em] text-white/70">
                                            Popular areas
                                        </div>
                                        <div className="mt-4 grid grid-cols-2 gap-4 text-white/80 text-sm">
                                            <div className="flex items-center gap-2">
                                                ? Bangsar
                                            </div>
                                            <div className="flex items-center gap-2">
                                                ? Petaling Jaya
                                            </div>
                                            <div className="flex items-center gap-2">
                                                ? Cyberjaya
                                            </div>
                                            <div className="flex items-center gap-2">
                                                ? Melaka
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
