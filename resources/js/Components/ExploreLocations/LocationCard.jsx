// src/components/LocationCard.jsx
import React, { useState } from "react";
import {
    MapPin,
    Star,
    Users,
    DollarSign,
    Heart,
    Share2,
    ChevronRight,
    Home,
} from "lucide-react";

const LocationCard = ({ location, onSelect, onQuickBook, onFindRoommate }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer">
            {/* Image Section */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Badges */}
                <div className="absolute top-3 left-3">
                    <div className="flex gap-2">
                        <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                            {location.availableRooms} rooms
                        </span>
                        {location.roommateRequests > 0 && (
                            <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                                <Users size={12} />
                                {location.roommateRequests} roommates
                            </span>
                        )}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="absolute top-3 right-3 flex gap-2">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsFavorite(!isFavorite);
                        }}
                        className="bg-white/90 hover:bg-white p-2 rounded-full transition-colors"
                    >
                        <Heart
                            size={18}
                            className={
                                isFavorite
                                    ? "fill-red-500 text-red-500"
                                    : "text-gray-600"
                            }
                        />
                    </button>
                    <button className="bg-white/90 hover:bg-white p-2 rounded-full transition-colors">
                        <Share2 size={18} className="text-gray-600" />
                    </button>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-5" onClick={() => onSelect(location)}>
                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {location.name}
                    </h3>
                    <div className="flex items-center gap-1">
                        <Star
                            size={16}
                            className="fill-yellow-400 text-yellow-400"
                        />
                        <span className="font-semibold">
                            {location.popularity}%
                        </span>
                    </div>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">
                    {location.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {location.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                        <DollarSign size={18} className="text-green-500" />
                        <div>
                            <p className="text-sm text-gray-500">Avg. Price</p>
                            <p className="font-semibold">
                                ${location.averagePrice}/mo
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Home size={18} className="text-blue-500" />
                        <div>
                            <p className="text-sm text-gray-500">Available</p>
                            <p className="font-semibold">
                                {location.availableRooms} Rooms
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Users size={18} className="text-purple-500" />
                        <div>
                            <p className="text-sm text-gray-500">Roommates</p>
                            <p className="font-semibold">
                                {location.roommateRequests} Seeking
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin size={18} className="text-red-500" />
                        <div>
                            <p className="text-sm text-gray-500">Popularity</p>
                            <p className="font-semibold">
                                {location.popularity}%
                            </p>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onQuickBook(location.id);
                        }}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                    >
                        View Rooms
                        <ChevronRight size={18} />
                    </button>
                    {location.roommateRequests > 0 && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onFindRoommate(location.id);
                            }}
                            className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors"
                        >
                            Find Roommates
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LocationCard;
