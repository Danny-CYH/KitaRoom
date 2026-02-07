import React from "react";
import { Link } from "@inertiajs/react";

const AuthFooter = ({ text, linkText, linkHref }) => {
    return (
        <div className="pt-6">
            <div className="text-center">
                <p className="text-sm text-slate-600">
                    {text}{" "}
                    <Link
                        href={linkHref}
                        className="text-blue-700 font-semibold hover:underline transition"
                    >
                        {linkText}
                    </Link>
                </p>
                <p className="text-xs text-slate-500 mt-2">
                    By registering, you agree to our{" "}
                    <Link
                        href="/terms"
                        className="underline hover:text-blue-700 transition"
                    >
                        Terms
                    </Link>{" "}
                    and{" "}
                    <Link
                        href="/privacy"
                        className="underline hover:text-blue-700 transition"
                    >
                        Privacy Policy
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
};

export default AuthFooter;
