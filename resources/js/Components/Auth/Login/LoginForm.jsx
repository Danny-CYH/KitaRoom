import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Link } from "@inertiajs/react";

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log("Login form submitted:", formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div>
                <label
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5"
                    htmlFor="email"
                >
                    Email Address
                </label>
                <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        id="email"
                        type="email"
                        placeholder="e.g. syed@email.com"
                        autoComplete="off"
                        required
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div>
                <div className="flex justify-between items-center mb-1.5">
                    <label
                        className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <Link
                        to="/forgot-password"
                        className="text-primary text-xs font-bold hover:text-blue-700 transition-colors"
                    >
                        Forgot Password?
                    </Link>
                </div>
                <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        className="w-full pl-11 pr-11 py-3 rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        required
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                    >
                        {showPassword ? (
                            <EyeOff className="w-5 h-5" />
                        ) : (
                            <Eye className="w-5 h-5" />
                        )}
                    </button>
                </div>
            </div>

            <div className="flex items-center">
                <input
                    className="w-4 h-4 rounded text-primary focus:ring-primary/20 border-gray-300 dark:border-gray-700 dark:bg-gray-800 cursor-pointer"
                    id="remember"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label
                    className="ml-2 text-sm text-gray-600 dark:text-gray-400 cursor-pointer"
                    htmlFor="remember"
                >
                    Keep me signed in
                </label>
            </div>

            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3.5 px-4 rounded-xl text-base font-bold shadow-lg shadow-primary/20 hover:from-blue-700 hover:to-blue-800 hover:shadow-primary/30 transition-all"
                type="submit"
            >
                Sign In
            </motion.button>

            <div className="mt-6 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    Don't have an account?{" "}
                    <Link
                        href="/register"
                        className="text-primary font-bold hover:underline"
                    >
                        Register
                    </Link>
                </p>
            </div>
        </form>
    );
};

export default LoginForm;
