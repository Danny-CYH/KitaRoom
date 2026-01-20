import React from "react";
import {
    Building2,
    Globe,
    Users,
    Heart,
    Facebook,
    Instagram,
    Twitter,
    Youtube,
} from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-white dark:bg-background-dark border-t border-gray-200 dark:border-gray-800 py-12 px-6 lg:px-10">
            <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                {/* Brand Column */}
                <div className="col-span-1 lg:col-span-2 flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-primary">
                        <div className="size-6 bg-primary rounded flex items-center justify-center text-white">
                            <Building2 className="w-4 h-4" />
                        </div>
                        <h2 className="text-lg font-black leading-tight tracking-tight dark:text-white">
                            KitaRoom
                        </h2>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md">
                        Malaysia's #1 community-driven rental and roommate
                        discovery platform. Connecting students and young
                        professionals with their perfect living space.
                    </p>
                    <div className="flex gap-4 mt-2">
                        <a
                            href="#"
                            className="text-gray-400 hover:text-primary transition-colors"
                        >
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-primary transition-colors"
                        >
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-primary transition-colors"
                        >
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-primary transition-colors"
                        >
                            <Youtube className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-bold mb-4 text-gray-900 dark:text-white">
                        Quick Links
                    </h4>
                    <ul className="text-sm text-gray-500 dark:text-gray-400 flex flex-col gap-3">
                        <li>
                            <a
                                className="hover:text-primary transition-colors flex items-center gap-2"
                                href="#"
                            >
                                <Globe className="w-4 h-4" />
                                Browse Rooms
                            </a>
                        </li>
                        <li>
                            <a
                                className="hover:text-primary transition-colors flex items-center gap-2"
                                href="#"
                            >
                                <Users className="w-4 h-4" />
                                Find Roommates
                            </a>
                        </li>
                        <li>
                            <a
                                className="hover:text-primary transition-colors flex items-center gap-2"
                                href="#"
                            >
                                <Building2 className="w-4 h-4" />
                                List Your Property
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h4 className="font-bold mb-4 text-gray-900 dark:text-white">
                        Company
                    </h4>
                    <ul className="text-sm text-gray-500 dark:text-gray-400 flex flex-col gap-3">
                        <li>
                            <a
                                className="hover:text-primary transition-colors"
                                href="#"
                            >
                                About Us
                            </a>
                        </li>
                        <li>
                            <a
                                className="hover:text-primary transition-colors"
                                href="#"
                            >
                                How it Works
                            </a>
                        </li>
                        <li>
                            <a
                                className="hover:text-primary transition-colors"
                                href="#"
                            >
                                Safety Center
                            </a>
                        </li>
                        <li>
                            <a
                                className="hover:text-primary transition-colors"
                                href="#"
                            >
                                Blog
                            </a>
                        </li>
                        <li>
                            <a
                                className="hover:text-primary transition-colors"
                                href="#"
                            >
                                Careers
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h4 className="font-bold mb-4 text-gray-900 dark:text-white">
                        Support
                    </h4>
                    <ul className="text-sm text-gray-500 dark:text-gray-400 flex flex-col gap-3">
                        <li>
                            <a
                                className="hover:text-primary transition-colors"
                                href="#"
                            >
                                Help Center
                            </a>
                        </li>
                        <li>
                            <a
                                className="hover:text-primary transition-colors"
                                href="#"
                            >
                                Terms of Service
                            </a>
                        </li>
                        <li>
                            <a
                                className="hover:text-primary transition-colors"
                                href="#"
                            >
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a
                                className="hover:text-primary transition-colors"
                                href="#"
                            >
                                Cookie Policy
                            </a>
                        </li>
                        <li>
                            <a
                                className="hover:text-primary transition-colors"
                                href="#"
                            >
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-[1280px] mx-auto mt-12 pt-8 border-t border-gray-100 dark:border-gray-800">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                        <p>
                            © 2026 KitaRoom Technologies. All rights reserved.
                        </p>
                    </div>
                    <div className="flex items-center gap-6 text-sm">
                        <a
                            href="#"
                            className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
                        >
                            Terms of Service
                        </a>
                        <a
                            href="#"
                            className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
                        >
                            Cookie Settings
                        </a>
                    </div>
                </div>
                <div className="mt-4 text-center text-xs text-gray-400 dark:text-gray-500 flex items-center justify-center gap-1">
                    <Heart className="w-3 h-3 text-red-500 fill-current" />
                    <span>Made by Danny CYH, Software Engineer</span>
                </div>
            </div>

            {/* App Store Badges (Optional) */}
            <div className="max-w-[1280px] mx-auto mt-8 flex justify-center gap-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M14.4 2.304c-1.2 0-2.7 1.2-3.6 1.2-.9 0-2.1-1.2-3.6-1.2-2.7 0-5.4 2.1-5.4 6.3 0 4.2 4.2 7.8 9 12.6.6.6 1.5.9 2.4.9s1.8-.3 2.4-.9c4.8-4.8 9-8.4 9-12.6 0-4.2-2.7-6.3-5.4-6.3z" />
                    </svg>
                    <span className="text-sm font-medium">
                        Available on the App Store
                    </span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M3 20.5V3.5C3 2.67 3.67 2 4.5 2h15c.83 0 1.5.67 1.5 1.5v17c0 .83-.67 1.5-1.5 1.5h-15C3.67 21 3 20.33 3 20.5zM8 19h8v-3H8v3z" />
                    </svg>
                    <span className="text-sm font-medium">
                        Get it on Google Play
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
