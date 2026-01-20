import React, { useState } from "react";
import {
    MapPin,
    Heart,
    Bed,
    Bath,
    CheckCircle,
    Wifi,
    Car,
    Users,
    Ruler,
} from "lucide-react";

const ListingCard = ({ listing }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const {
        image,
        type,
        price,
        title,
        location,
        tags,
        beds,
        baths,
        size,
        amenities = ["wifi", "parking"],
        rating = 4.8,
        reviews = 42,
    } = listing;

    return (
        <div className="group bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-2xl hover:border-blue-200 dark:hover:border-blue-800/50 transition-all duration-300">
            {/* Image Container */}
            <div className="relative aspect-[4/3] overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-bold rounded-lg backdrop-blur-sm">
                        {type}
                    </span>
                    <span className="px-3 py-1.5 bg-gradient-to-r from-emerald-500 to-green-600 text-white text-xs font-bold rounded-lg backdrop-blur-sm flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />
                        Verified
                    </span>
                </div>

                {/* Favorite Button */}
                <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full hover:scale-110 transition-all"
                >
                    <Heart
                        className={`w-5 h-5 ${isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"}`}
                    />
                </button>

                {/* Price */}
                <div className="absolute bottom-4 left-4">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2.5 rounded-xl font-bold shadow-xl">
                        <div className="flex items-baseline">
                            <span className="text-lg">
                                {price.split("/")[0]}
                            </span>
                            <span className="text-sm font-normal opacity-90 ml-1">
                                /month
                            </span>
                        </div>
                    </div>
                </div>

                {/* Rating */}
                <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <svg
                                key={i}
                                className={`w-3 h-3 ${i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                    <span className="text-xs font-medium text-white">
                        {rating} ({reviews})
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Title & Location */}
                <div className="mb-4">
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {location}
                    </p>
                </div>

                {/* Tags - Removed hover background */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg text-xs font-medium"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Details */}
                <div className="grid grid-cols-3 gap-4 py-4 border-y border-gray-100 dark:border-gray-700">
                    <div className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-1">
                            <Bed className="w-4 h-4 text-blue-600" />
                            <span className="font-semibold text-gray-900 dark:text-white">
                                {beds}
                            </span>
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                            Bedrooms
                        </span>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-1">
                            <Bath className="w-4 h-4 text-blue-600" />
                            <span className="font-semibold text-gray-900 dark:text-white">
                                {baths}
                            </span>
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                            Bathrooms
                        </span>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-1">
                            <Ruler className="w-4 h-4 text-blue-600" />
                            <span className="font-semibold text-gray-900 dark:text-white">
                                {size}
                            </span>
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                            Sq Ft
                        </span>
                    </div>
                </div>

                {/* Amenities & Action */}
                <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center gap-2">
                        {amenities.includes("wifi") && (
                            <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                <Wifi className="w-4 h-4 text-blue-600" />
                            </div>
                        )}
                        {amenities.includes("parking") && (
                            <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                <Car className="w-4 h-4 text-blue-600" />
                            </div>
                        )}
                        <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                            <Users className="w-4 h-4 text-blue-600" />
                        </div>
                    </div>
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-sm hover:shadow-md">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ListingCard;
