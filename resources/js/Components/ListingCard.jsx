import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import {
    MapPin,
    Heart,
    CheckCircle,
    Calendar,
    UserPlus,
    Users,
    Wifi,
    Coffee,
    Home,
    Clock,
    Droplet,
    Shield,
    Sparkles,
    Zap,
    Dumbbell,
    Waves,
    Trees,
    ShoppingBag,
    Lock,
    Utensils,
    Tv,
    Snowflake,
    DoorOpen,
    Bed,
    Bath,
    Sofa,
    Refrigerator,
    WashingMachine,
    Building2,
    School,
    Hospital,
    Store,
    Train,
    BusFront,
    ParkingCircle,
} from "lucide-react";

export default function ListingCard({ room_listing }) {
    const [isFavorite, setIsFavorite] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Get amenities list (room/property features like shared/private bathroom, bedroom type, etc.)
    const amenities = room_listing.room_amenities || [];
    const displayAmenities = amenities.slice(0, 4);

    // Get property benefits (location-based benefits like near shopping mall, MRT, etc.)
    const propertyBenefits = room_listing.property_benefits || [];

    // Separate amenities by type
    const roomFeatures = amenities.filter(
        (a) =>
            a.category === "room" ||
            a.name === "Private Bathroom" ||
            a.name === "Shared Bathroom" ||
            a.name === "Master Bedroom" ||
            a.name === "Single Room" ||
            a.name === "Double Room" ||
            a.name === "Attached Bathroom",
    );

    const propertyFacilities = amenities.filter(
        (a) =>
            a.category === "facility" ||
            a.name === "Swimming Pool" ||
            a.name === "Gym" ||
            a.name === "Parking" ||
            a.name === "Security" ||
            a.name === "Garden",
    );

    return (
        <div className="group bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-2xl hover:border-blue-200 dark:hover:border-blue-800/50 transition-all duration-300">
            {/* Image Container */}
            <div className="relative aspect-[4/3] overflow-hidden">
                {room_listing.room_image &&
                room_listing.room_image.length > 0 ? (
                    <img
                        key={
                            room_listing.room_image[currentImageIndex]
                                ?.room_id || room_listing.room_id
                        }
                        src={
                            import.meta.env.VITE_BASE_URL +
                            room_listing.room_image[currentImageIndex]
                                ?.image_path
                        }
                        alt={
                            room_listing.property?.property_name || "Room image"
                        }
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                        <Home className="w-12 h-12 text-gray-400" />
                    </div>
                )}

                {/* Image Navigation Dots */}
                {room_listing.room_image &&
                    room_listing.room_image.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                            {room_listing.room_image.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setCurrentImageIndex(idx);
                                    }}
                                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                                        currentImageIndex === idx
                                            ? "bg-white w-4"
                                            : "bg-white/50"
                                    }`}
                                />
                            ))}
                        </div>
                    )}

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-bold rounded-lg backdrop-blur-sm">
                        {room_listing.room_type || "Room"}
                    </span>
                    {room_listing.is_verified && (
                        <span className="px-3 py-1.5 bg-gradient-to-r from-emerald-500 to-green-600 text-white text-xs font-bold rounded-lg backdrop-blur-sm flex items-center gap-1">
                            <CheckCircle className="w-3 h-3" />
                            Verified
                        </span>
                    )}
                </div>

                {/* Favorite Button */}
                <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full hover:scale-110 transition-all z-10"
                >
                    <Heart
                        className={`w-5 h-5 ${isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"}`}
                    />
                </button>

                {/* Price */}
                <div className="absolute bottom-4 left-3">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-2.5 rounded-xl font-bold shadow-xl">
                        <div className="flex items-baseline">
                            <span className="text-sm">
                                RM {room_listing.room_price || "N/A"}
                            </span>
                            <span className="text-sm font-normal opacity-90 ml-1">
                                /month
                            </span>
                        </div>
                    </div>
                </div>

                {/* Rating */}
                {room_listing.total_ratings && (
                    <div className="absolute bottom-4 right-1 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    className={`w-3 h-3 ${i < Math.floor(room_listing.total_ratings) ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <span className="text-xs font-medium text-white">
                            {room_listing.total_ratings}
                        </span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-5">
                {/* Title & Location */}
                <div className="mb-3">
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1 line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {room_listing?.property?.property_name ||
                            "Property Name"}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {room_listing?.property?.locations ||
                            "Location not specified"}
                    </p>
                </div>

                {/* Key Details Grid */}
                <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="flex items-center gap-1.5 px-2 py-1.5 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <Calendar className="w-3.5 h-3.5 text-blue-600" />
                        <div>
                            <p className="text-[10px] text-gray-500 dark:text-gray-400">
                                Move-in
                            </p>
                            <p className="text-xs font-semibold text-gray-900 dark:text-white">
                                {room_listing.available_from || "Flexible"}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-1.5 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                        <UserPlus className="w-3.5 h-3.5 text-purple-600" />
                        <div>
                            <p className="text-[10px] text-gray-500 dark:text-gray-400">
                                Preferred
                            </p>
                            <p className="text-xs font-semibold text-gray-900 dark:text-white">
                                {room_listing.gender_preference || "Any"} |{" "}
                                {room_listing.race_preference || "All"}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Room Features (Bathroom, Bedroom, etc.) */}
                {roomFeatures.length > 0 && (
                    <div className="mb-3">
                        <div className="flex items-center gap-1.5 mb-2">
                            <DoorOpen className="w-3.5 h-3.5 text-blue-600" />
                            <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                                Room Features
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                            {roomFeatures.map((feature, index) => (
                                <span
                                    key={index}
                                    className="flex items-center gap-1 px-2 py-1 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-xs text-blue-700 dark:text-blue-300"
                                >
                                    {feature.name === "Private Bathroom" && (
                                        <Bath className="w-3 h-3" />
                                    )}
                                    {feature.name === "Shared Bathroom" && (
                                        <Shower className="w-3 h-3" />
                                    )}
                                    {feature.name === "Master Bedroom" && (
                                        <Bed className="w-3 h-3" />
                                    )}
                                    {feature.name === "Single Room" && (
                                        <DoorOpen className="w-3 h-3" />
                                    )}
                                    {feature.name === "Double Room" && (
                                        <Bed className="w-3 h-3" />
                                    )}
                                    {feature.name === "Attached Bathroom" && (
                                        <Bath className="w-3 h-3" />
                                    )}
                                    {!feature.name && (
                                        <CheckCircle className="w-3 h-3" />
                                    )}
                                    {feature.name}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Property Benefits - Location-Based (Near Shopping Mall, MRT, etc.) */}
                {propertyBenefits.length > 0 && (
                    <div className="mb-3">
                        <div className="flex items-center gap-1.5 mb-2">
                            <Building2 className="w-3.5 h-3.5 text-green-600" />
                            <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                                Nearby Locations & Transport
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                            {propertyBenefits.map((benefit, index) => (
                                <span
                                    key={index}
                                    className="flex items-center gap-1 px-2 py-1 bg-green-50 dark:bg-green-900/20 rounded-lg text-xs text-green-700 dark:text-green-300"
                                >
                                    {benefit.type === "shopping" && (
                                        <ShoppingBag className="w-3 h-3" />
                                    )}
                                    {benefit.type === "mrt" && (
                                        <Train className="w-3 h-3" />
                                    )}
                                    {benefit.type === "lrt" && (
                                        <Train className="w-3 h-3" />
                                    )}
                                    {benefit.type === "bus" && (
                                        <BusFront className="w-3 h-3" />
                                    )}
                                    {benefit.type === "university" && (
                                        <School className="w-3 h-3" />
                                    )}
                                    {benefit.type === "hospital" && (
                                        <Hospital className="w-3 h-3" />
                                    )}
                                    {benefit.type === "park" && (
                                        <Trees className="w-3 h-3" />
                                    )}
                                    {benefit.type === "mall" && (
                                        <Store className="w-3 h-3" />
                                    )}
                                    {benefit.type === "food" && (
                                        <Coffee className="w-3 h-3" />
                                    )}
                                    {!benefit.type && (
                                        <Sparkles className="w-3 h-3" />
                                    )}
                                    {benefit.name}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Property Facilities (Pool, Gym, Security, etc.) */}
                {propertyFacilities.length > 0 && (
                    <div className="mb-3">
                        <div className="flex items-center gap-1.5 mb-2">
                            <Building2 className="w-3.5 h-3.5 text-purple-600" />
                            <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                                Property Facilities
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                            {propertyFacilities.map((facility, index) => (
                                <span
                                    key={index}
                                    className="flex items-center gap-1 px-2 py-1 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-xs text-purple-700 dark:text-purple-300"
                                >
                                    {facility.name === "Swimming Pool" && (
                                        <Waves className="w-3 h-3" />
                                    )}
                                    {facility.name === "Gym" && (
                                        <Dumbbell className="w-3 h-3" />
                                    )}
                                    {facility.name === "Parking" && (
                                        <ParkingCircle className="w-3 h-3" />
                                    )}
                                    {facility.name === "Security" && (
                                        <Lock className="w-3 h-3" />
                                    )}
                                    {facility.name === "Garden" && (
                                        <Trees className="w-3 h-3" />
                                    )}
                                    {!facility.name && (
                                        <CheckCircle className="w-3 h-3" />
                                    )}
                                    {facility.name}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Perks & Inclusions */}
                <div className="mb-3">
                    <div className="flex items-center gap-1.5 mb-2">
                        <Zap className="w-3.5 h-3.5 text-yellow-600" />
                        <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                            Perks & Inclusions
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-1.5 text-xs">
                        {room_listing.utility_included && (
                            <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                                <Zap className="w-3 h-3 text-green-500" />
                                <span>Utilities included</span>
                            </div>
                        )}
                        {room_listing.wifi_included && (
                            <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                                <Wifi className="w-3 h-3 text-blue-500" />
                                <span>WiFi included</span>
                            </div>
                        )}
                        {room_listing.furnished && (
                            <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                                <Sofa className="w-3 h-3 text-purple-500" />
                                <span>Fully furnished</span>
                            </div>
                        )}
                        {room_listing.cleaning_service && (
                            <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                                <Sparkles className="w-3 h-3 text-blue-500" />
                                <span>Cleaning service</span>
                            </div>
                        )}
                        {room_listing.air_conditioning && (
                            <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                                <Snowflake className="w-3 h-3 text-cyan-500" />
                                <span>Air conditioning</span>
                            </div>
                        )}
                        {room_listing.water_heater && (
                            <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                                <Droplet className="w-3 h-3 text-blue-500" />
                                <span>Water heater</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Additional Amenities */}
                {displayAmenities.length > 0 &&
                    displayAmenities.filter(
                        (a) =>
                            !roomFeatures.includes(a) &&
                            !propertyFacilities.includes(a),
                    ).length > 0 && (
                        <div className="mb-3">
                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1.5">
                                Additional Amenities
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                                {displayAmenities
                                    .filter(
                                        (a) =>
                                            !roomFeatures.includes(a) &&
                                            !propertyFacilities.includes(a),
                                    )
                                    .map((amenity, index) => (
                                        <span
                                            key={index}
                                            className="flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg text-xs text-gray-700 dark:text-gray-300"
                                        >
                                            {amenity.name ===
                                                "Refrigerator" && (
                                                <Refrigerator className="w-3 h-3" />
                                            )}
                                            {amenity.name === "Microwave" && (
                                                <Microwaves className="w-3 h-3" />
                                            )}
                                            {amenity.name ===
                                                "Washing Machine" && (
                                                <WashingMachine className="w-3 h-3" />
                                            )}
                                            {amenity.name === "TV" && (
                                                <Tv className="w-3 h-3" />
                                            )}
                                            {amenity.name === "Kitchen" && (
                                                <Utensils className="w-3 h-3" />
                                            )}
                                            {!amenity.name && (
                                                <CheckCircle className="w-3 h-3" />
                                            )}
                                            {amenity.name}
                                        </span>
                                    ))}
                                {amenities.length > 4 && (
                                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg text-xs text-gray-600 dark:text-gray-400">
                                        +{amenities.length - 4}
                                    </span>
                                )}
                            </div>
                        </div>
                    )}

                {/* House Rules */}
                {(room_listing.smoking_preference ||
                    room_listing.pets_preference ||
                    room_listing.noise_level) && (
                    <div className="mb-3">
                        <div className="flex items-center gap-1.5 mb-1.5">
                            <Shield className="w-3.5 h-3.5 text-gray-600" />
                            <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                                House Rules
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                            {room_listing.smoking_preference && (
                                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg text-xs text-gray-600 dark:text-gray-400">
                                    🚭 {room_listing.smoking_preference}
                                </span>
                            )}
                            {room_listing.pets_preference && (
                                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg text-xs text-gray-600 dark:text-gray-400">
                                    🐾 {room_listing.pets_preference}
                                </span>
                            )}
                            {room_listing.noise_level && (
                                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg text-xs text-gray-600 dark:text-gray-400">
                                    🔇 {room_listing.noise_level}
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Financial & Location Benefits */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                    {room_listing.deposit_amount && (
                        <span className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-xs text-blue-700 dark:text-blue-300">
                            💰 Deposit: RM {room_listing.deposit_amount}
                        </span>
                    )}
                    {room_listing.near_public_transport && (
                        <span className="px-2 py-1 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg text-xs text-yellow-700 dark:text-yellow-300">
                            🚆 Near Public Transport
                        </span>
                    )}
                    {room_listing.near_university && (
                        <span className="px-2 py-1 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg text-xs text-indigo-700 dark:text-indigo-300">
                            🎓 Near University
                        </span>
                    )}
                </div>

                {/* Posted Time & Availability */}
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500 mb-3 pt-1 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>
                            Posted {room_listing.created_at || "recently"}
                        </span>
                    </div>
                    {room_listing.available_spots && (
                        <div className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            <span>
                                {room_listing.available_spots} spot(s) left
                            </span>
                        </div>
                    )}
                </div>

                {/* View Details Button */}
                <Link href={route("room-details", room_listing.room_id)}>
                    <button className="px-4 py-2.5 mt-2 w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-sm hover:shadow-md">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
}
