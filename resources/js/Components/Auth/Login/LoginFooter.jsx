// LoginFooter.jsx
import React from "react";
import { Link } from "@inertiajs/react";

const LoginFooter = () => {
    return (
        <div className="pt-6">
            <p className="text-xs text-center text-slate-500 leading-relaxed">
                By signing in, you agree to our{" "}
                <Link
                    href="/terms"
                    className="text-blue-700 hover:text-blue-600 underline transition"
                >
                    Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                    href="/privacy"
                    className="text-blue-700 hover:text-blue-600 underline transition"
                >
                    Privacy Policy
                </Link>
                .
            </p>
        </div>
    );
};

export default LoginFooter;
