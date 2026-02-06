// LoginFooter.jsx
import React from "react";
import { Link } from "@inertiajs/react";

const LoginFooter = () => {
    return (
        <div className="bg-gray-50 dark:bg-gray-800/50 py-5 px-8 border-t border-gray-100 dark:border-gray-800">
            <p className="text-xs text-center text-gray-500 dark:text-gray-400 leading-relaxed mb-2">
                By signing in, you agree to our{" "}
                <Link
                    href="/terms"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline transition-colors"
                >
                    Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                    href="/privacy"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline transition-colors"
                >
                    Privacy Policy
                </Link>
                .
            </p>
            <p className="text-xs text-center text-gray-400 dark:text-gray-500">
                © {new Date().getFullYear()} KitaRoom Malaysia. All rights
                reserved.
            </p>
        </div>
    );
};

export default LoginFooter;
