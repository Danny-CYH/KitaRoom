import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Lock, Eye, EyeOff, Phone } from "lucide-react";
import { Link } from "@inertiajs/react";

const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [userType, setUserType] = useState("student");
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        agreeTerms: false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Registration form submitted:", formData);
    };

    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [id]: type === "checkbox" ? checked : value,
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5 mt-6">
            {/* User Type Selection */}
            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                    I am a
                </label>
                <div className="grid grid-cols-2 gap-3">
                    <button
                        type="button"
                        onClick={() => setUserType("student")}
                        className={`py-3 rounded-xl border transition-all ${
                            userType === "student"
                                ? "bg-blue-50 border-blue-200 text-blue-700"
                                : "border-slate-200 text-slate-600 hover:border-slate-300"
                        }`}
                    >
                        <div className="flex flex-col items-center gap-1">
                            <span className="text-lg">??</span>
                            <span className="text-sm font-medium">Student</span>
                        </div>
                    </button>
                    <button
                        type="button"
                        onClick={() => setUserType("professional")}
                        className={`py-3 rounded-xl border transition-all ${
                            userType === "professional"
                                ? "bg-blue-50 border-blue-200 text-blue-700"
                                : "border-slate-200 text-slate-600 hover:border-slate-300"
                        }`}
                    >
                        <div className="flex flex-col items-center gap-1">
                            <span className="text-lg">??</span>
                            <span className="text-sm font-medium">
                                Professional
                            </span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Full Name */}
            <div>
                <label
                    className="block text-sm font-semibold text-slate-700 mb-1.5"
                    htmlFor="fullName"
                >
                    Full Name
                </label>
                <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition"
                        id="fullName"
                        type="text"
                        placeholder="e.g. Syed Ahmad"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                </div>
            </div>

            {/* Email */}
            <div>
                <label
                    className="block text-sm font-semibold text-slate-700 mb-1.5"
                    htmlFor="email"
                >
                    Email Address
                </label>
                <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition"
                        id="email"
                        type="email"
                        placeholder="syed@email.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
            </div>

            {/* Phone Number */}
            <div>
                <label
                    className="block text-sm font-semibold text-slate-700 mb-1.5"
                    htmlFor="phone"
                >
                    Phone Number
                </label>
                <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition"
                        id="phone"
                        type="tel"
                        placeholder="+60 12-345 6789"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
            </div>

            {/* Password */}
            <div>
                <label
                    className="block text-sm font-semibold text-slate-700 mb-1.5"
                    htmlFor="password"
                >
                    Password
                </label>
                <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                        className="w-full pl-11 pr-11 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition"
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
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition"
                    >
                        {showPassword ? (
                            <EyeOff className="w-5 h-5" />
                        ) : (
                            <Eye className="w-5 h-5" />
                        )}
                    </button>
                </div>
                <p className="text-xs text-slate-500 mt-2">
                    Must be at least 8 characters with letters and numbers
                </p>
            </div>

            {/* Confirm Password */}
            <div>
                <label
                    className="block text-sm font-semibold text-slate-700 mb-1.5"
                    htmlFor="confirmPassword"
                >
                    Confirm Password
                </label>
                <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                        className="w-full pl-11 pr-11 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition"
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="••••••••"
                        required
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    <button
                        type="button"
                        onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition"
                    >
                        {showConfirmPassword ? (
                            <EyeOff className="w-5 h-5" />
                        ) : (
                            <Eye className="w-5 h-5" />
                        )}
                    </button>
                </div>
            </div>

            {/* Terms Agreement */}
            <div className="flex items-start gap-3">
                <input
                    className="mt-1 w-4 h-4 rounded text-blue-600 focus:ring-blue-600/20 border-slate-300 bg-white cursor-pointer"
                    id="agreeTerms"
                    type="checkbox"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    required
                />
                <label
                    className="text-xs text-slate-600 leading-tight cursor-pointer"
                    htmlFor="agreeTerms"
                >
                    I agree to the{" "}
                    <Link
                        href="/terms"
                        className="text-blue-700 font-semibold hover:underline"
                    >
                        Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                        href="/privacy"
                        className="text-blue-700 font-semibold hover:underline"
                    >
                        Privacy Policy
                    </Link>{" "}
                    including cookie use.
                </label>
            </div>

            {/* Submit Button */}
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-700 text-white py-3.5 px-4 rounded-xl text-base font-semibold shadow-lg shadow-blue-700/20 hover:bg-blue-800 transition mt-4"
                type="submit"
            >
                Create Account
            </motion.button>
        </form>
    );
};

export default RegisterForm;
