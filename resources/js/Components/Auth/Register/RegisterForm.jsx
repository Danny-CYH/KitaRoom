import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Lock, Eye, EyeOff, Phone } from "lucide-react";
import { Link, useForm } from "@inertiajs/react";

const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const { data, setData, post, processing, errors, setError, clearErrors } =
        useForm({
            name: "",
            email: "",

            password: "",
            password_confirmation: "",
            agreeTerms: false,
            user_type: "student",
        });

    const handleSubmit = (e) => {
        e.preventDefault();
        clearErrors();

        if (!data.agreeTerms) {
            setError("agreeTerms", "You must agree to the terms.");
            return;
        }

        if (data.password !== data.password_confirmation) {
            setError("password_confirmation", "Passwords do not match.");
            return;
        }

        post(route("register"), {
            preserveScroll: true,
            onSuccess: () => {
                setData("password", "");
                setData("password_confirmation", "");
            },
        });
    };

    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;
        setData(id, type === "checkbox" ? checked : value);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5 mt-6">
            {/* Full Name */}
            <div>
                <label
                    className="block text-sm font-semibold text-slate-700 mb-1.5"
                    htmlFor="name"
                >
                    Full Name
                </label>
                <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition"
                        id="name"
                        type="text"
                        placeholder="e.g. Syed Ahmad"
                        autoComplete="off"
                        required
                        value={data.name}
                        onChange={handleChange}
                    />
                </div>
                {errors.name && (
                    <p className="mt-1 text-xs text-red-600">{errors.name}</p>
                )}
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
                        autoComplete="off"
                        required
                        value={data.email}
                        onChange={handleChange}
                    />
                </div>
                {errors.email && (
                    <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                )}
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
                        placeholder="��������"
                        required
                        value={data.password}
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
                {errors.password && (
                    <p className="mt-1 text-xs text-red-600">
                        {errors.password}
                    </p>
                )}
                <p className="text-xs text-slate-500 mt-2">
                    Must be at least 8 characters with letters and numbers
                </p>
            </div>

            {/* Confirm Password */}
            <div>
                <label
                    className="block text-sm font-semibold text-slate-700 mb-1.5"
                    htmlFor="password_confirmation"
                >
                    Confirm Password
                </label>
                <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                        className="w-full pl-11 pr-11 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition"
                        id="password_confirmation"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="��������"
                        required
                        value={data.password_confirmation}
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
                {errors.password_confirmation && (
                    <p className="mt-1 text-xs text-red-600">
                        {errors.password_confirmation}
                    </p>
                )}
            </div>

            {/* Terms Agreement */}
            <div>
                <div className="flex items-start gap-3">
                    <input
                        className="mt-1 w-4 h-4 rounded text-blue-600 focus:ring-blue-600/20 border-slate-300 bg-white cursor-pointer"
                        id="agreeTerms"
                        type="checkbox"
                        checked={data.agreeTerms}
                        onChange={handleChange}
                        required
                    />
                    <label
                        className="text-xs text-slate-600 leading-tight cursor-pointer mt-1"
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
                {errors.agreeTerms && (
                    <p className="mt-1 text-xs text-red-600">
                        {errors.agreeTerms}
                    </p>
                )}
            </div>

            {/* Submit Button */}
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={processing}
                className="w-full bg-blue-700 text-white py-3.5 px-4 rounded-xl text-base font-semibold shadow-lg shadow-blue-700/20 hover:bg-blue-800 transition mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                type="submit"
            >
                {processing ? "Creating account..." : "Create Account"}
            </motion.button>
        </form>
    );
};

export default RegisterForm;
