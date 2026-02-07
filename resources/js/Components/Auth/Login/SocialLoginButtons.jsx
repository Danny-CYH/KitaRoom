// SocialLoginButtons.jsx
import React from "react";
import { motion } from "framer-motion";

const SocialLoginButtons = () => {
    return (
        <div className="space-y-4 mb-8">
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-3 w-full rounded-xl border border-slate-200 h-12 px-4 bg-white text-slate-700 text-sm font-semibold hover:bg-slate-50 transition"
            >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                </svg>
                <span>Continue with Google</span>
            </motion.button>

            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-3 w-full rounded-xl border border-slate-200 h-12 px-4 bg-white text-slate-700 text-sm font-semibold hover:bg-slate-50 transition"
            >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M16.365 1.43c0 1.14-.42 2.21-1.19 3.13-.82.98-2.18 1.74-3.4 1.64-.16-1.13.45-2.34 1.22-3.25.82-.98 2.22-1.68 3.37-1.52zm3.66 17.19c-.32.73-.7 1.41-1.14 2.05-.6.88-1.22 1.67-2.07 1.7-.82.03-1.1-.52-2.3-.52-1.2 0-1.52.5-2.32.55-.83.04-1.47-.84-2.07-1.7-1.26-1.82-2.23-5.14-0.93-7.38.64-1.11 1.78-1.82 3.03-1.84.79-.01 1.53.55 2.3.55.75 0 1.35-.55 2.3-.55.79.01 1.63.42 2.27 1.15-2 1.1-1.67 4.05.93 4.99z" />
                </svg>
                <span>Continue with Apple</span>
            </motion.button>

            <div className="relative flex items-center">
                <div className="flex-grow border-t border-slate-200"></div>
                <span className="flex-shrink mx-4 text-xs uppercase tracking-widest text-slate-500 font-semibold">
                    Or
                </span>
                <div className="flex-grow border-t border-slate-200"></div>
            </div>
        </div>
    );
};

export default SocialLoginButtons;
