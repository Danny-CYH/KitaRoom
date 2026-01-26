import React from "react";
import { Link } from "@inertiajs/react";

const AuthFooter = ({ text, linkText, linkHref }) => {
    return (
        <div className="bg-gray-50 dark:bg-gray-800/50 py-5 px-8 border-t border-gray-100 dark:border-gray-800">
            <div className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    {text}{" "}
                    <Link
                        to={linkHref}
                        className="text-primary font-bold hover:underline transition-colors"
                    >
                        {linkText}
                    </Link>
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                    By registering, you agree to our{" "}
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
                </p>
            </div>
        </div>
    );
};

export default AuthFooter;
