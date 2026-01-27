// src/pages/ExploreLocations.jsx
import React, { useState, useEffect } from "react";
import {
    MapPin,
    Filter,
    Search,
    Star,
    Users,
    DollarSign,
    Home,
    Navigation,
    TrendingUp,
    Heart,
    Share2,
} from "lucide-react";
import LocationMap from "../components/ExploreLocations/LocationMap";
import LocationCard from "../components/ExploreLocations/LocationCard";
import FilterSidebar from "../components/ExploreLocations/FilterSidebar";
import LocationDetailModal from "../components/ExploreLocations/LocationDetailModal";
import { Navbar } from "@/Components/Navbar";

// Mock data - replace with your API calls
const mockLocations = [
    {
        id: 1,
        name: "Downtown Core",
        coordinates: { lat: 1.2801, lng: 103.8509 },
        availableRooms: 24,
        averagePrice: 1800,
        popularity: 95,
        roommateRequests: 12,
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
        tags: ["Near MRT", "Shopping", "Restaurants"],
        description: "Vibrant city center with excellent transport links",
    },
    {
        id: 2,
        name: "University District",
        coordinates: { lat: 1.2966, lng: 103.7764 },
        availableRooms: 18,
        averagePrice: 1200,
        popularity: 88,
        roommateRequests: 8,
        image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=300&fit=crop",
        tags: ["Student Area", "Affordable", "Campus Proximity"],
        description: "Perfect for students with budget-friendly options",
    },
    {
        id: 3,
        name: "Lakeside Area",
        coordinates: { lat: 1.3329, lng: 103.72 },
        availableRooms: 15,
        averagePrice: 1600,
        popularity: 82,
        roommateRequests: 6,
        image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400&h=300&fit=crop",
        tags: ["Quiet", "Nature", "Family-Friendly"],
        description: "Peaceful suburban area with lake views",
    },
    {
        id: 4,
        name: "Tech Park Vicinity",
        coordinates: { lat: 1.3077, lng: 103.7904 },
        availableRooms: 32,
        averagePrice: 2000,
        popularity: 92,
        roommateRequests: 18,
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=300&fit=crop",
        tags: ["Professional", "Modern", "Business Hub"],
        description: "Popular among working professionals near tech parks",
    },
    {
        id: 5,
        name: "Historic Quarter",
        coordinates: { lat: 1.284, lng: 103.8423 },
        availableRooms: 9,
        averagePrice: 2200,
        popularity: 78,
        roommateRequests: 4,
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=300&fit=crop",
        tags: ["Cultural", "Heritage", "Charming"],
        description: "Character-filled area with heritage buildings",
    },
];

const trendingAreas = [
    { name: "East Coast", growth: "+24%", newListings: 12 },
    { name: "Northpoint", growth: "+18%", newListings: 8 },
    { name: "Westgate", growth: "+15%", newListings: 6 },
    { name: "Central South", growth: "+22%", newListings: 10 },
];

const ExploreLocations = () => {
    const [locations, setLocations] = useState(mockLocations);
    const [filteredLocations, setFilteredLocations] = useState(mockLocations);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [showFilters, setShowFilters] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [viewMode, setViewMode] = useState("map"); // 'map' or 'list'
    const [filters, setFilters] = useState({
        priceRange: [500, 3000],
        roommates: false,
        availableNow: true,
        sortBy: "popularity",
    });

    // Handle search
    useEffect(() => {
        const filtered = locations.filter(
            (location) =>
                location.name
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                location.tags.some((tag) =>
                    tag.toLowerCase().includes(searchQuery.toLowerCase()),
                ),
        );
        setFilteredLocations(filtered);
    }, [searchQuery, locations]);

    // Handle filter changes
    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
        let filtered = [...mockLocations];

        // Apply filters
        filtered = filtered.filter(
            (loc) =>
                loc.averagePrice >= newFilters.priceRange[0] &&
                loc.averagePrice <= newFilters.priceRange[1],
        );

        if (newFilters.roommates) {
            filtered = filtered.filter((loc) => loc.roommateRequests > 0);
        }

        // Sort
        switch (newFilters.sortBy) {
            case "price-low":
                filtered.sort((a, b) => a.averagePrice - b.averagePrice);
                break;
            case "price-high":
                filtered.sort((a, b) => b.averagePrice - a.averagePrice);
                break;
            case "popularity":
            default:
                filtered.sort((a, b) => b.popularity - a.popularity);
                break;
        }

        setFilteredLocations(filtered);
    };

    // Handle location click
    const handleLocationClick = (location) => {
        setSelectedLocation(location);
    };

    // Quick actions
    const handleQuickBook = (locationId) => {
        // Navigate to booking page
        console.log("Quick book:", locationId);
    };

    const handleFindRoommate = (locationId) => {
        // Navigate to roommate finder with location filter
        console.log("Find roommate in location:", locationId);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">
                        Explore Locations
                    </h1>
                    <p className="text-blue-100">
                        Find available rooms and potential roommates in your
                        preferred areas
                    </p>

                    {/* Search Bar */}
                    <div className="mt-6 max-w-2xl">
                        <div className="relative">
                            <Search
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                size={20}
                            />
                            <input
                                type="text"
                                placeholder="Search locations, neighborhoods, or landmarks..."
                                className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-6">
                {/* Stats and Controls */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${showFilters ? "bg-blue-100 text-blue-600" : "bg-white text-gray-700 hover:bg-gray-100"}`}
                        >
                            <Filter size={18} />
                            Filters
                        </button>

                        <div className="flex bg-white rounded-lg p-1">
                            <button
                                onClick={() => setViewMode("map")}
                                className={`px-4 py-2 rounded transition-colors ${viewMode === "map" ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"}`}
                            >
                                Map View
                            </button>
                            <button
                                onClick={() => setViewMode("list")}
                                className={`px-4 py-2 rounded transition-colors ${viewMode === "list" ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"}`}
                            >
                                List View
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin size={16} />
                        <span>{filteredLocations.length} locations found</span>
                    </div>
                </div>

                {/* Trending Areas */}
                <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                        <TrendingUp size={20} className="text-green-500" />
                        <h2 className="text-xl font-semibold">
                            Trending Areas
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {trendingAreas.map((area, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg p-4 border hover:border-blue-300 transition-colors"
                            >
                                <div className="flex justify-between items-start">
                                    <h3 className="font-medium">{area.name}</h3>
                                    <span className="text-green-500 text-sm font-medium">
                                        {area.growth}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500 mt-1">
                                    {area.newListings} new listings
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Filter Sidebar */}
                    {showFilters && (
                        <div className="lg:w-1/4">
                            <FilterSidebar
                                filters={filters}
                                onFilterChange={handleFilterChange}
                            />
                        </div>
                    )}

                    {/* Main Content */}
                    <div className={`${showFilters ? "lg:w-3/4" : "w-full"}`}>
                        {viewMode === "map" ? (
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                                <LocationMap
                                    locations={filteredLocations}
                                    onLocationClick={handleLocationClick}
                                    height="500px"
                                />
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredLocations.map((location) => (
                                    <LocationCard
                                        key={location.id}
                                        location={location}
                                        onSelect={handleLocationClick}
                                        onQuickBook={handleQuickBook}
                                        onFindRoommate={handleFindRoommate}
                                    />
                                ))}
                            </div>
                        )}

                        {/* No Results */}
                        {filteredLocations.length === 0 && (
                            <div className="text-center py-12">
                                <MapPin
                                    size={48}
                                    className="mx-auto text-gray-300 mb-4"
                                />
                                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                                    No locations found
                                </h3>
                                <p className="text-gray-500">
                                    Try adjusting your filters or search terms
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white text-center">
                    <h2 className="text-2xl font-bold mb-3">
                        Can't find your perfect location?
                    </h2>
                    <p className="mb-6 max-w-2xl mx-auto">
                        Create a location request and get notified when new
                        rooms become available in your preferred area.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                            Set Up Location Alerts
                        </button>
                        <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                            Create Roommate Request
                        </button>
                    </div>
                </div>
            </div>

            {/* Location Detail Modal */}
            {selectedLocation && (
                <LocationDetailModal
                    location={selectedLocation}
                    onClose={() => setSelectedLocation(null)}
                    onBook={() => handleQuickBook(selectedLocation.id)}
                    onFindRoommate={() =>
                        handleFindRoommate(selectedLocation.id)
                    }
                />
            )}
        </div>
    );
};

export default ExploreLocations;
