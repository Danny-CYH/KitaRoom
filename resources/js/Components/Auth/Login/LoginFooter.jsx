import React from "react";
import { Link } from "@inertiajs/react";

const LoginFooter = () => {
    return (
        <div className="bg-gray-50 dark:bg-gray-800/50 py-4 px-8 border-t border-gray-100 dark:border-gray-800">
            <p className="text-xs text-center text-gray-400 dark:text-gray-500 leading-relaxed">
                By signing in, you agree to our{" "}
                <Link
                    to="/terms"
                    className="underline hover:text-primary transition-colors"
                >
                    Terms
                </Link>{" "}
                and{" "}
                <Link
                    to="/privacy"
                    className="underline hover:text-primary transition-colors"
                >
                    Privacy Policy
                </Link>
                .
            </p>
            <p className="text-xs text-center text-gray-400 dark:text-gray-500 mt-2">
                © {new Date().getFullYear()} KitaRoom Malaysia. All rights
                reserved.
            </p>
        </div>
    );
};

export default LoginFooter;
