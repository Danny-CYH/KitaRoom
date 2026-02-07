// LoginForm.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, LogIn } from "lucide-react";
import { Link } from "@inertiajs/react";

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            console.log("Login form submitted:", formData);
            setIsLoading(false);
            // Handle successful login here
        }, 1500);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
                <label
                    className="block text-sm font-semibold text-slate-700"
                    htmlFor="email"
                >
                    Email
                </label>
                <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition"
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        autoComplete="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="space-y-2">
                <div className="flex justify-between items-center">
                    <label
                        className="block text-sm font-semibold text-slate-700"
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <Link
                        href="/forgot-password"
                        className="text-sm text-blue-700 font-semibold hover:text-blue-600 transition"
                    >
                        Forgot Password?
                    </Link>
                </div>
                <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                        className="w-full pl-11 pr-11 py-3.5 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition"
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition"
                    >
                        {showPassword ? (
                            <EyeOff className="w-5 h-5" />
                        ) : (
                            <Eye className="w-5 h-5" />
                        )}
                    </button>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <input
                        className="w-4 h-4 rounded border-slate-300 bg-white text-blue-600 focus:ring-blue-600/20 cursor-pointer"
                        id="remember"
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <label
                        className="ml-2 text-sm text-slate-600 cursor-pointer"
                        htmlFor="remember"
                    >
                        Remember me
                    </label>
                </div>
            </div>

            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isLoading}
                className="w-full bg-blue-700 text-white py-3.5 px-4 rounded-xl text-base font-semibold shadow-lg shadow-blue-700/20 hover:bg-blue-800 transition disabled:opacity-70 disabled:cursor-not-allowed"
                type="submit"
            >
                {isLoading ? (
                    <div className="flex items-center justify-center">
                        <svg
                            className="animate-spin h-5 w-5 mr-2 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                        </svg>
                        Signing in...
                    </div>
                ) : (
                    <div className="flex items-center justify-center">
                        <LogIn className="w-5 h-5 mr-2" />
                        Sign in
                    </div>
                )}
            </motion.button>

            <div className="pt-2 text-center">
                <p className="text-sm text-slate-600">
                    Don&apos;t have an account?{" "}
                    <Link
                        href="/register"
                        className="text-blue-700 font-semibold hover:text-blue-600 transition"
                    >
                        Sign up
                    </Link>
                </p>
            </div>
        </form>
    );
};

export default LoginForm;
