import React, { useState, useEffect, useRef } from "react";
import {
    Building2,
    Search,
    Menu,
    X,
    LogIn,
    UserPlus,
    Home,
    FileText,
    Users as UsersIcon,
    HelpCircle,
    ChevronLeft,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const menuButtonRef = useRef(null);
    const menuContainerRef = useRef(null);
    const searchInputRef = useRef(null);

    const navLinks = [
        { name: "Rent a Room", href: "#", icon: <Home className="w-4 h-4" /> },
        {
            name: "List a Room",
            href: "#",
            icon: <FileText className="w-4 h-4" />,
        },
        {
            name: "Find Roommates",
            href: "#",
            icon: <UsersIcon className="w-4 h-4" />,
        },
        {
            name: "How It Works",
            href: "#",
            icon: <HelpCircle className="w-4 h-4" />,
        },
    ];

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Focus search input when search is opened
    useEffect(() => {
        if (isSearchOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isSearchOpen]);

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Don't close if clicking on menu button
            if (
                menuButtonRef.current &&
                menuButtonRef.current.contains(event.target)
            ) {
                return;
            }

            // Don't close if clicking inside menu container
            if (
                menuContainerRef.current &&
                menuContainerRef.current.contains(event.target)
            ) {
                return;
            }

            // Close menu if clicking outside
            if (isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside, true);
        document.addEventListener("touchstart", handleClickOutside, true);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside, true);
            document.removeEventListener(
                "touchstart",
                handleClickOutside,
                true,
            );
        };
    }, [isMenuOpen]);

    // Toggle menu function
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsSearchOpen(false);
    };

    // Toggle search function
    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
        setIsMenuOpen(false);
    };

    // Close menu function
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Close search function
    const closeSearch = () => {
        setIsSearchOpen(false);
        setSearchQuery("");
    };

    // Handle search submit
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            console.log("Searching for:", searchQuery);
            // Add your search logic here
            closeSearch();
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                }}
                className={`sticky top-0 z-50 w-full backdrop-blur-xl border-b transition-all duration-300 ${
                    isScrolled
                        ? "bg-white/95 dark:bg-gray-900/95 border-gray-200/50 dark:border-gray-800/50 shadow-lg"
                        : "bg-white/90 dark:bg-gray-900/90 border-gray-100 dark:border-gray-800"
                }`}
            >
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-20">
                    {/* Mobile Search Bar (Full Width) */}
                    <AnimatePresence>
                        {isSearchOpen && (
                            <motion.div
                                key="mobile-search"
                                className="md:hidden"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="py-3">
                                    <form onSubmit={handleSearchSubmit}>
                                        <div className="relative">
                                            <button
                                                type="button"
                                                onClick={closeSearch}
                                                className="absolute left-3 top-1/2 transform -translate-y-1/2 p-1"
                                            >
                                                <ChevronLeft className="w-5 h-5 text-gray-500" />
                                            </button>
                                            <input
                                                ref={searchInputRef}
                                                type="text"
                                                value={searchQuery}
                                                onChange={(e) =>
                                                    setSearchQuery(
                                                        e.target.value,
                                                    )
                                                }
                                                placeholder="Search rooms, areas, or universities..."
                                                className="w-full pl-12 pr-12 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            />
                                            <button
                                                type="submit"
                                                className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1"
                                            >
                                                <Search className="w-5 h-5 text-blue-600" />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Main Navbar Content */}
                    <div
                        className={`flex justify-between items-center ${isSearchOpen ? "md:hidden" : "h-16"}`}
                    >
                        {/* Logo - Hidden when search is open on mobile */}
                        {!isSearchOpen && (
                            <motion.div
                                className="flex items-center space-x-8"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="flex items-center space-x-3">
                                    <motion.div
                                        className="p-2 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-lg"
                                        whileHover={{ rotate: 5, scale: 1.1 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                        }}
                                    >
                                        <Building2 className="w-6 h-6 text-white" />
                                    </motion.div>
                                    <div>
                                        <motion.h1
                                            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
                                            animate={{ opacity: 1 }}
                                            initial={{ opacity: 0 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            KitaRoom
                                        </motion.h1>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            Room Renting Platform
                                        </p>
                                    </div>
                                </div>

                                {/* Desktop Navigation */}
                                <div className="hidden lg:flex items-center space-x-6">
                                    {navLinks.map((link, index) => (
                                        <motion.a
                                            key={link.name}
                                            href={link.href}
                                            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center gap-2"
                                            initial={{ opacity: 0, y: -20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 * index }}
                                            whileHover={{ scale: 1.05, x: 5 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {link.icon}
                                            {link.name}
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Right Side - Hidden when search is open on mobile */}
                        {!isSearchOpen && (
                            <div className="flex items-center space-x-4">
                                {/* Desktop Search Bar */}
                                <motion.div
                                    className="hidden md:block relative"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <div className="relative">
                                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        <motion.input
                                            type="text"
                                            placeholder="Search rooms, areas, or universities..."
                                            className="pl-10 pr-4 py-2 w-64 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                            whileFocus={{
                                                scale: 1.02,
                                                boxShadow:
                                                    "0 0 0 2px rgba(37, 99, 235, 0.2)",
                                            }}
                                        />
                                    </div>
                                </motion.div>

                                {/* User Actions */}
                                <div className="flex items-center space-x-3">
                                    <motion.button
                                        className="hidden md:inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <LogIn className="w-4 h-4 mr-2" />
                                        Login
                                    </motion.button>

                                    <motion.button
                                        className="hidden md:inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold rounded-xl shadow-lg hover:shadow-blue-500/30 hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95, y: 0 }}
                                    >
                                        <UserPlus className="w-4 h-4 mr-2" />
                                        Sign Up
                                    </motion.button>

                                    {/* Mobile Search Button */}
                                    <motion.button
                                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                                        whileTap={{ scale: 0.9 }}
                                        onClick={toggleSearch}
                                        aria-label="Search"
                                    >
                                        <Search className="w-5 h-5" />
                                    </motion.button>

                                    {/* Mobile Menu Button */}
                                    <motion.button
                                        ref={menuButtonRef}
                                        onClick={toggleMenu}
                                        className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                                        whileTap={{ scale: 0.9 }}
                                        aria-label={
                                            isMenuOpen
                                                ? "Close menu"
                                                : "Open menu"
                                        }
                                    >
                                        {isMenuOpen ? (
                                            <X className="w-6 h-6" />
                                        ) : (
                                            <Menu className="w-6 h-6" />
                                        )}
                                    </motion.button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu with Framer Motion */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        key="mobile-menu"
                        ref={menuContainerRef}
                        className="lg:hidden fixed inset-0 z-40 pt-16"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                        <div
                            className="absolute inset-0 bg-black/50"
                            onClick={closeMenu}
                        />

                        <div className="absolute inset-x-0 top-0 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 shadow-xl max-h-[calc(100vh-4rem)] overflow-y-auto">
                            <div className="p-4 space-y-4">
                                {/* Search Bar in Mobile Menu */}
                                <motion.div
                                    className="mb-4"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <form onSubmit={handleSearchSubmit}>
                                        <div className="relative">
                                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                                            <input
                                                type="text"
                                                value={searchQuery}
                                                onChange={(e) =>
                                                    setSearchQuery(
                                                        e.target.value,
                                                    )
                                                }
                                                placeholder="Search rooms, areas, universities..."
                                                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                onClick={(e) =>
                                                    e.stopPropagation()
                                                }
                                            />
                                        </div>
                                    </form>
                                </motion.div>

                                {/* Navigation Links */}
                                <div className="space-y-1">
                                    {navLinks.map((link, index) => (
                                        <motion.a
                                            key={link.name}
                                            href={link.href}
                                            className="flex items-center gap-3 px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-colors"
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{
                                                delay: 0.05 * index + 0.2,
                                            }}
                                            whileHover={{ x: 5 }}
                                            onClick={closeMenu}
                                        >
                                            <span className="text-blue-600 dark:text-blue-400">
                                                {link.icon}
                                            </span>
                                            {link.name}
                                        </motion.a>
                                    ))}
                                </div>

                                {/* Divider */}
                                <motion.div
                                    className="my-4 border-t border-gray-100 dark:border-gray-800"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 0.4 }}
                                />

                                {/* Auth Buttons */}
                                <div className="space-y-3">
                                    <motion.button
                                        className="w-full flex items-center justify-center gap-2 px-4 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={closeMenu}
                                    >
                                        <LogIn className="w-5 h-5" />
                                        Login
                                    </motion.button>

                                    <motion.button
                                        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={closeMenu}
                                    >
                                        <UserPlus className="w-5 h-5" />
                                        Sign Up Free
                                    </motion.button>
                                </div>

                                {/* Quick Links */}
                                <motion.div
                                    className="pt-4 mt-4 border-t border-gray-100 dark:border-gray-800"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.7 }}
                                >
                                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 px-4">
                                        Quick Links
                                    </h4>
                                    <div className="grid grid-cols-2 gap-2">
                                        {[
                                            "FAQ",
                                            "Safety Tips",
                                            "Blog",
                                            "Contact",
                                        ].map((item, index) => (
                                            <motion.a
                                                key={item}
                                                href="#"
                                                className="px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg text-center"
                                                initial={{
                                                    opacity: 0,
                                                    scale: 0.9,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    scale: 1,
                                                }}
                                                transition={{
                                                    delay: 0.1 * index + 0.8,
                                                }}
                                                whileHover={{ scale: 1.05 }}
                                                onClick={closeMenu}
                                            >
                                                {item}
                                            </motion.a>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
