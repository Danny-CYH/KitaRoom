// src/components/LocationDetailModal.jsx
import React, { useState } from "react";
import {
    X,
    MapPin,
    Star,
    Users,
    DollarSign,
    Home,
    Calendar,
    Wifi,
    Car,
    Utensils,
    Wind,
    ChevronRight,
    Share2,
    Heart,
    Phone,
    MessageCircle,
} from "lucide-react";

const LocationDetailModal = ({ location, onClose, onBook, onFindRoommate }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    if (!location) return null;

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="sticky top-0 bg-white z-10 p-6 border-b flex justify-between items-center">
                    <h2 className="text-2xl font-bold">{location.name}</h2>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setIsFavorite(!isFavorite)}
                            className="p-2 hover:bg-gray-100 rounded-full"
                        >
                            <Heart
                                size={20}
                                className={
                                    isFavorite
                                        ? "fill-red-500 text-red-500"
                                        : "text-gray-600"
                                }
                            />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                            <Share2 size={20} className="text-gray-600" />
                        </button>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-gray-100 rounded-full"
                        >
                            <X size={20} />
                        </button>
                    </div>
                </div>

                <div className="p-6">
                    {/* Image Gallery */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="md:col-span-2">
                            <img
                                src={location.image}
                                alt={location.name}
                                className="w-full h-64 md:h-80 object-cover rounded-xl"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&h=200&fit=crop"
                                className="w-full h-32 object-cover rounded-xl"
                                alt="Location 1"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=200&fit=crop"
                                className="w-full h-32 object-cover rounded-xl"
                                alt="Location 2"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=200&fit=crop"
                                className="w-full h-32 object-cover rounded-xl"
                                alt="Location 3"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=200&fit=crop"
                                className="w-full h-32 object-cover rounded-xl"
                                alt="Location 4"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column - Details */}
                        <div className="lg:col-span-2">
                            {/* Stats */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                <div className="bg-blue-50 p-4 rounded-xl">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Home
                                            size={20}
                                            className="text-blue-600"
                                        />
                                        <span className="font-semibold">
                                            Available Rooms
                                        </span>
                                    </div>
                                    <p className="text-2xl font-bold">
                                        {location.availableRooms}
                                    </p>
                                </div>
                                <div className="bg-green-50 p-4 rounded-xl">
                                    <div className="flex items-center gap-2 mb-2">
                                        <DollarSign
                                            size={20}
                                            className="text-green-600"
                                        />
                                        <span className="font-semibold">
                                            Avg. Price
                                        </span>
                                    </div>
                                    <p className="text-2xl font-bold">
                                        ${location.averagePrice}
                                    </p>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-xl">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Users
                                            size={20}
                                            className="text-purple-600"
                                        />
                                        <span className="font-semibold">
                                            Roommates
                                        </span>
                                    </div>
                                    <p className="text-2xl font-bold">
                                        {location.roommateRequests}
                                    </p>
                                </div>
                                <div className="bg-yellow-50 p-4 rounded-xl">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Star
                                            size={20}
                                            className="text-yellow-600"
                                        />
                                        <span className="font-semibold">
                                            Popularity
                                        </span>
                                    </div>
                                    <p className="text-2xl font-bold">
                                        {location.popularity}%
                                    </p>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="mb-6">
                                <h3 className="text-xl font-semibold mb-3">
                                    About This Area
                                </h3>
                                <p className="text-gray-600">
                                    {location.description}
                                </p>
                            </div>

                            {/* Amenities */}
                            <div className="mb-6">
                                <h3 className="text-xl font-semibold mb-4">
                                    Area Amenities
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <div className="flex items-center gap-2">
                                        <Wifi
                                            size={18}
                                            className="text-blue-500"
                                        />
                                        <span>Free WiFi Zones</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Car
                                            size={18}
                                            className="text-green-500"
                                        />
                                        <span>Parking Available</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Utensils
                                            size={18}
                                            className="text-red-500"
                                        />
                                        <span>Food Courts</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Wind
                                            size={18}
                                            className="text-purple-500"
                                        />
                                        <span>Air-conditioned</span>
                                    </div>
                                </div>
                            </div>

                            {/* Available Rooms Preview */}
                            <div>
                                <h3 className="text-xl font-semibold mb-4">
                                    Available Rooms
                                </h3>
                                <div className="space-y-3">
                                    {[1, 2, 3].map((i) => (
                                        <div
                                            key={i}
                                            className="flex items-center justify-between p-4 border rounded-xl hover:border-blue-300 transition-colors"
                                        >
                                            <div>
                                                <h4 className="font-medium">
                                                    Studio Apartment #{i}
                                                </h4>
                                                <p className="text-sm text-gray-600">
                                                    Private room with ensuite
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <span className="font-bold">
                                                    $
                                                    {location.averagePrice -
                                                        100 +
                                                        i * 50}
                                                    /mo
                                                </span>
                                                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                                    Book Viewing
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Actions */}
                        <div>
                            <div className="sticky top-6">
                                {/* Quick Actions */}
                                <div className="bg-gradient-to-b from-blue-50 to-white rounded-xl p-6 mb-6">
                                    <h3 className="font-semibold mb-4">
                                        Quick Actions
                                    </h3>
                                    <div className="space-y-3">
                                        <button
                                            onClick={onBook}
                                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                                        >
                                            Browse All Rooms
                                            <ChevronRight size={18} />
                                        </button>
                                        <button
                                            onClick={onFindRoommate}
                                            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                                        >
                                            Find Roommates (
                                            {location.roommateRequests})
                                        </button>
                                        <button className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                                            Set Location Alert
                                        </button>
                                    </div>
                                </div>

                                {/* Contact Info */}
                                <div className="border rounded-xl p-6">
                                    <h3 className="font-semibold mb-4">
                                        Interested?
                                    </h3>
                                    <div className="space-y-3">
                                        <button className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                                            <Phone size={18} />
                                            Call Area Agent
                                        </button>
                                        <button className="w-full flex items-center justify-center gap-2 bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                                            <MessageCircle size={18} />
                                            Message for Details
                                        </button>
                                    </div>
                                </div>

                                {/* Tags */}
                                <div className="mt-6">
                                    <h4 className="font-medium mb-3">
                                        Popular Tags
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {location.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                        <span className="bg-green-100 text-green-600 text-sm px-3 py-1 rounded-full">
                                            Pet Friendly
                                        </span>
                                        <span className="bg-purple-100 text-purple-600 text-sm px-3 py-1 rounded-full">
                                            Gym Access
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocationDetailModal;
