import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useSpring } from "framer-motion";
import ListingCard from "./ListingCard";
import {
    MapPin,
    Building2,
    ChevronLeft,
    ChevronRight as RightIcon,
} from "lucide-react";

export function FeaturedListings() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [dragStartX, setDragStartX] = useState(0);
    const [dragOffset, setDragOffset] = useState(0);
    const carouselRef = useRef(null);

    // Spring animation for smooth dragging
    const dragSpring = useSpring(0, {
        stiffness: 300,
        damping: 30,
    });

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
        },
    ];

    const slidesToShow = {
        base: 1,
        md: 2,
        lg: 3,
    };

    const getSlidesToShow = () => {
        if (typeof window === "undefined") return 3;
        if (window.innerWidth >= 1024) return slidesToShow.lg;
        if (window.innerWidth >= 768) return slidesToShow.md;
        return slidesToShow.base;
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex >= listings.length - getSlidesToShow()
                ? 0
                : prevIndex + 1,
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0
                ? listings.length - getSlidesToShow()
                : prevIndex - 1,
        );
    };

    const handleDragStart = (e) => {
        setIsDragging(true);
        const clientX = e.type === "mousedown" ? e.pageX : e.touches[0].pageX;
        setDragStartX(clientX);
        setDragOffset(0);
    };

    const handleDragMove = (e) => {
        if (!isDragging) return;
        const clientX = e.type === "mousemove" ? e.pageX : e.touches[0].pageX;
        const diff = dragStartX - clientX;
        setDragOffset(diff);
        dragSpring.set(-diff); // Update spring animation
    };

    const handleDragEnd = () => {
        if (!isDragging) return;
        setIsDragging(false);

        const threshold = 100;
        if (dragOffset > threshold) {
            nextSlide();
        } else if (dragOffset < -threshold) {
            prevSlide();
        }

        // Smoothly return to position
        dragSpring.set(0);
        setDragOffset(0);
    };

    useEffect(() => {
        const handleResize = () => {
            if (currentIndex > listings.length - getSlidesToShow()) {
                setCurrentIndex(
                    Math.max(0, listings.length - getSlidesToShow()),
                );
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [currentIndex, listings.length]);

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

    const buttonVariants = {
        rest: { scale: 1 },
        hover: {
            scale: 1.05,
            backgroundColor: "rgba(59, 130, 246, 0.1)",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 25,
            },
        },
        tap: { scale: 0.95 },
    };

    return (
        <motion.section
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="py-4 md:py-16 lg:py-14 bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900/50 dark:to-gray-950"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div variants={itemVariants} className="mb-6">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
                        <div>
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ type: "spring", delay: 0.2 }}
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-100 dark:border-blue-800 rounded-full px-6 py-3 mb-4"
                            >
                                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                <span className="text-sm font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-wider">
                                    Featured Properties
                                </span>
                            </motion.div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                                Discover Top Rooms in
                                <motion.span
                                    initial={{ backgroundPosition: "100% 50%" }}
                                    animate={{ backgroundPosition: "0% 50%" }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                    }}
                                    style={{
                                        backgroundSize: "200% auto",
                                    }}
                                    className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
                                >
                                    Malaysia's Best Locations
                                </motion.span>
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
                                Handpicked selection of premium rooms and
                                apartments in prime student and professional
                                areas.
                            </p>
                        </div>

                        {/* Navigation & Stats */}
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <div className="flex items-center gap-4">
                                <motion.div
                                    variants={itemVariants}
                                    className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl"
                                >
                                    <Building2 className="w-4 h-4 text-blue-600" />
                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        {listings.length} Properties
                                    </span>
                                </motion.div>
                            </div>

                            <div className="flex items-center gap-2">
                                <motion.button
                                    variants={buttonVariants}
                                    initial="rest"
                                    whileHover="hover"
                                    whileTap="tap"
                                    onClick={prevSlide}
                                    className="p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    disabled={currentIndex === 0}
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </motion.button>
                                <motion.button
                                    variants={buttonVariants}
                                    initial="rest"
                                    whileHover="hover"
                                    whileTap="tap"
                                    onClick={nextSlide}
                                    className="p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    disabled={
                                        currentIndex >=
                                        listings.length - getSlidesToShow()
                                    }
                                >
                                    <RightIcon className="w-5 h-5" />
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Carousel Container */}
                <motion.div
                    variants={itemVariants}
                    className="relative overflow-hidden mb-0 md:mb-12"
                >
                    {/* Carousel Track */}
                    <motion.div
                        ref={carouselRef}
                        className="flex flex-row cursor-grab active:cursor-grabbing"
                        style={{
                            transform: `translateX(calc(-${currentIndex * (100 / getSlidesToShow())}%))`,
                        }}
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
                        dragElastic={0.2}
                        onDragStart={(e, info) => {
                            setIsDragging(true);
                        }}
                        onDragEnd={(e, info) => {
                            setIsDragging(false);
                            const threshold = 100;
                            if (info.offset.x > threshold) {
                                prevSlide();
                            } else if (info.offset.x < -threshold) {
                                nextSlide();
                            }
                        }}
                        onMouseDown={handleDragStart}
                        onMouseMove={handleDragMove}
                        onMouseUp={handleDragEnd}
                        onMouseLeave={handleDragEnd}
                        onTouchStart={handleDragStart}
                        onTouchMove={handleDragMove}
                        onTouchEnd={handleDragEnd}
                    >
                        <AnimatePresence mode="wait">
                            {listings.map((listing, index) => (
                                <motion.div
                                    key={index}
                                    className="flex-shrink-0 px-3 mb-3"
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
                                    <ListingCard listing={listing} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* Gradient Overlays */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-gray-50/50 dark:from-gray-900/50 to-transparent"
                    ></motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-gray-50/50 dark:from-gray-900/50 to-transparent"
                    ></motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
}
