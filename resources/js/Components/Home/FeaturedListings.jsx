import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ListingCard from "../ListingCard";
import {
    Building2,
    ChevronLeft,
    ChevronRight as RightIcon,
    Sparkles,
    ArrowRight,
} from "lucide-react";

export function FeaturedListings() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const carouselRef = useRef(null);
    const intervalRef = useRef(null);

    const listings = [
        {
            image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            type: "MASTER ROOM",
            price: "RM 850/mo",
            title: "Sunway Geo Residences",
            location: "Bandar Sunway, Selangor",
            tags: ["Quiet", "PetFriendly", "NonSmoker", "Wifi", "AC"],
            beds: "1",
            baths: "1 Bath",
            size: "650",
            amenities: ["wifi", "ac", "parking"],
            rating: 4.8,
            reviews: 24,
            distance: "1.2 km from Sunway University",
            availableFrom: "Jan 15, 2024",
            isVerified: true,
            isFeatured: true,
            isTrending: true,
            views: 245,
            saves: 42,
        },
        {
            image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            type: "SINGLE ROOM",
            price: "RM 600/mo",
            title: "Nadi Bangsar Service Residence",
            location: "Bangsar, Kuala Lumpur",
            tags: ["NearLRT", "Professional", "Gym", "Pool", "Security"],
            beds: "1",
            baths: "Shared",
            size: "450",
            amenities: ["wifi", "gym", "pool", "security"],
            rating: 4.6,
            reviews: 18,
            distance: "300m from Bangsar LRT",
            availableFrom: "Immediate",
            isVerified: true,
            isFeatured: true,
            isTrending: true,
            views: 189,
            saves: 31,
        },
        {
            image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            type: "MIDDLE ROOM",
            price: "RM 750/mo",
            title: "The Grand Subang SS15",
            location: "Subang Jaya, Selangor",
            tags: ["Student", "CookingAllowed", "Pool", "Study", "Furnished"],
            beds: "1",
            baths: "Shared",
            size: "550",
            amenities: ["wifi", "pool", "furnished", "study"],
            rating: 4.7,
            reviews: 32,
            distance: "500m from Taylor's University",
            availableFrom: "Feb 1, 2024",
            isVerified: true,
            isFeatured: true,
            isTrending: true,
            views: 312,
            saves: 56,
        },
        {
            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            type: "STUDIO",
            price: "RM 1,200/mo",
            title: "Mont Kiara Luxury Suites",
            location: "Mont Kiara, Kuala Lumpur",
            tags: ["Luxury", "FullyFurnished", "CityView", "Gym", "Pool"],
            beds: "1",
            baths: "1 Bath",
            size: "850",
            amenities: ["wifi", "gym", "pool", "furnished", "security"],
            rating: 4.9,
            reviews: 42,
            distance: "2.1 km from International Schools",
            availableFrom: "Immediate",
            isVerified: true,
            isFeatured: false,
            isTrending: false,
            views: 478,
            saves: 89,
        },
        {
            image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            type: "SHARED ROOM",
            price: "RM 450/mo",
            title: "University Garden Apartments",
            location: "Setapak, Kuala Lumpur",
            tags: ["Student", "Budget", "Shared", "Cooking", "Laundry"],
            beds: "1",
            baths: "Shared",
            size: "350",
            amenities: ["wifi", "laundry", "kitchen"],
            rating: 4.3,
            reviews: 15,
            distance: "Walking distance to TAR University",
            availableFrom: "Jan 20, 2024",
            isVerified: true,
            isFeatured: false,
            isTrending: true,
            views: 156,
            saves: 23,
        },
        {
            image: "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            type: "MASTER ROOM",
            price: "RM 950/mo",
            title: "KL Sentral Residences",
            location: "Brickfields, Kuala Lumpur",
            tags: ["CityCenter", "Transport", "Modern", "Security", "Balcony"],
            beds: "1",
            baths: "1 Bath",
            size: "700",
            amenities: ["wifi", "security", "balcony", "ac"],
            rating: 4.5,
            reviews: 28,
            distance: "Adjacent to KL Sentral Station",
            availableFrom: "Immediate",
            isVerified: true,
            isFeatured: true,
            isTrending: false,
            views: 321,
            saves: 67,
        },
    ];

    const slidesToShow = {
        base: 1,
        sm: 1,
        md: 2,
        lg: 3,
        xl: 3,
    };

    const getSlidesToShow = () => {
        if (typeof window === "undefined") return 3;
        const width = window.innerWidth;
        if (width >= 1280) return slidesToShow.xl;
        if (width >= 1024) return slidesToShow.lg;
        if (width >= 768) return slidesToShow.md;
        return slidesToShow.base;
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => {
            const maxIndex = listings.length - getSlidesToShow();
            return prevIndex >= maxIndex ? 0 : prevIndex + 1;
        });
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => {
            return prevIndex === 0
                ? listings.length - getSlidesToShow()
                : prevIndex - 1;
        });
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    // Auto-slide functionality
    useEffect(() => {
        if (!isHovered && !isDragging) {
            intervalRef.current = setInterval(() => {
                nextSlide();
            }, 4000);
        }
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isHovered, isDragging, currentIndex]);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
            },
        },
    };

    const floatingAnimation = {
        y: [0, -5, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
        },
    };

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="relative py-16 md:py-20 bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900/50 dark:to-gray-950 overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-100/30 dark:bg-indigo-900/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 md:mb-16">
                    <div className="flex-1">
                        <motion.div
                            variants={itemVariants}
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-100 dark:border-blue-800 rounded-full px-6 py-3 mb-6"
                        >
                            <div className="flex items-center gap-2">
                                <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                <span className="text-sm font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-wider">
                                    Featured Properties
                                </span>
                            </div>
                        </motion.div>

                        <motion.h2
                            variants={itemVariants}
                            className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mb-4"
                        >
                            Discover Top Rooms in
                            <motion.span
                                animate={floatingAnimation}
                                className="block mt-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 bg-clip-text text-transparent"
                                style={{
                                    backgroundSize: "200% auto",
                                }}
                            >
                                Malaysia's Best Locations
                            </motion.span>
                        </motion.h2>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mb-6"
                        >
                            Handpicked selection of premium rooms and apartments
                            in prime student and professional areas.
                        </motion.p>

                        {/* Stats and Navigation in one row */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            {/* Stats */}
                            <motion.div
                                variants={itemVariants}
                                className="flex flex-wrap items-center gap-4"
                            >
                                <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl">
                                    <Building2 className="w-4 h-4 text-blue-600" />
                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        {listings.length} Properties
                                    </span>
                                </div>

                                {/* "View All Rooms" Button */}
                                <motion.a
                                    href={route("browse-room")}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-sm hover:shadow-md"
                                >
                                    <span>View All Rooms</span>
                                    <ArrowRight className="w-4 h-4" />
                                </motion.a>
                            </motion.div>

                            {/* Navigation Buttons */}
                            <motion.div
                                variants={itemVariants}
                                className="flex items-center gap-2"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.05, x: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={prevSlide}
                                    className="p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
                                    disabled={currentIndex === 0}
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05, x: 2 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={nextSlide}
                                    className="p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
                                    disabled={
                                        currentIndex >=
                                        listings.length - getSlidesToShow()
                                    }
                                >
                                    <RightIcon className="w-5 h-5" />
                                </motion.button>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Carousel Container */}
                <div className="relative overflow-x-clip">
                    {/* Gradient Overlays */}
                    <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-gray-50/50 dark:from-gray-900/50 to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-gray-50/50 dark:from-gray-900/50 to-transparent z-10 pointer-events-none" />

                    {/* Carousel Track */}
                    <motion.div
                        ref={carouselRef}
                        className="flex cursor-grab active:cursor-grabbing"
                        animate={{
                            x: `-${currentIndex * (100 / getSlidesToShow())}%`,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                        }}
                        drag="x"
                        dragConstraints={{
                            left: -(
                                (listings.length - getSlidesToShow()) *
                                (100 / getSlidesToShow())
                            ),
                            right: 0,
                        }}
                        dragElastic={0.1}
                        onDragStart={() => setIsDragging(true)}
                        onDragEnd={(e, info) => {
                            setIsDragging(false);
                            const threshold = 50;
                            if (info.offset.x > threshold) {
                                prevSlide();
                            } else if (info.offset.x < -threshold) {
                                nextSlide();
                            }
                        }}
                    >
                        <AnimatePresence mode="wait">
                            {listings.map((listing, index) => (
                                <motion.div
                                    key={index}
                                    className="flex-shrink-0 px-3"
                                    style={{
                                        width: `${100 / getSlidesToShow()}%`,
                                    }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            delay: index * 0.05,
                                            type: "spring",
                                            stiffness: 100,
                                            damping: 15,
                                        },
                                    }}
                                    exit={{ opacity: 0, y: -20 }}
                                    whileHover={{
                                        scale: 1.02,
                                        transition: {
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 25,
                                        },
                                    }}
                                >
                                    {/* Card Container with Badges */}
                                    <div className="relative">
                                        {/* Your Existing ListingCard */}
                                        <ListingCard listing={listing} />
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}
