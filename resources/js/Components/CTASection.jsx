import React from "react";
import { ArrowRight, CheckCircle, Users } from "lucide-react";

export function CTASection() {
    return (
        <section className="py-20 lg:py-10">
            <div className="relative overflow-hidden bg-gradient-to-b from-blue-900 via-blue-400 to-blue-500">
                {/* Background Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/3 translate-x-1/3 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl"></div>

                <div className="relative max-w-6xl mx-auto px-6 py-16 lg:py-10">
                    <div className="text-center max-w-3xl mx-auto">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-700/30 to-blue-600/30 backdrop-blur-sm px-5 py-2 rounded-full mb-8 border border-white/20">
                            <Users className="w-4 h-4 text-white" />
                            <span className="text-sm font-semibold text-white">
                                50,000+ Happy Users
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                            Ready to find your
                            <span className="block mt-2 bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                                perfect living space?
                            </span>
                        </h2>

                        {/* Subtitle */}
                        <p className="text-xl text-blue-50 mb-12 max-w-2xl mx-auto">
                            Join thousands of students and professionals finding
                            their ideal rooms and compatible roommates across
                            Malaysia.
                        </p>

                        {/* Benefits */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto">
                            <div className="flex items-center gap-3 px-4 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-colors">
                                <CheckCircle className="w-5 h-5 text-green-300" />
                                <span className="text-white text-sm font-medium">
                                    Verified
                                </span>
                            </div>
                            <div className="flex items-center gap-3 px-4 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-colors">
                                <CheckCircle className="w-5 h-5 text-blue-300" />
                                <span className="text-white text-sm font-medium">
                                    Secure
                                </span>
                            </div>
                            <div className="flex items-center gap-3 px-4 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-colors">
                                <CheckCircle className="w-5 h-5 text-yellow-300" />
                                <span className="text-white text-sm font-medium">
                                    Fast
                                </span>
                            </div>
                            <div className="flex items-center gap-3 px-4 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-colors">
                                <CheckCircle className="w-5 h-5 text-purple-300" />
                                <span className="text-white text-sm font-medium">
                                    Free
                                </span>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="group flex items-center justify-center gap-3 px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 hover:shadow-xl transition-all shadow-lg">
                                Get Started Now
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-8 py-4 bg-gradient-to-r from-blue-700/30 to-blue-600/30 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl hover:bg-white/10 hover:border-white/40 transition-all">
                                List Your Room
                            </button>
                        </div>

                        {/* Trust Text */}
                        <p className="mt-8 text-blue-100 text-sm">
                            No credit card required • Free forever plan • 24/7
                            support
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
