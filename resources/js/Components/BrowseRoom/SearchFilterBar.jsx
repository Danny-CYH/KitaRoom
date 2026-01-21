import React from "react";
import {
    Search,
    MapPin,
    DollarSign,
    Calendar,
    Bed,
    ChevronDown,
} from "lucide-react";

const SearchFilterBar = ({ viewMode, setViewMode }) => {
    const filterButtons = [
        { icon: MapPin, label: "Location" },
        { icon: DollarSign, label: "Price Range" },
        { icon: Calendar, label: "Move-in Date" },
        { icon: Bed, label: "Room Type" },
    ];

    return (
        <div className="flex flex-col gap-4 bg-white dark:bg-gray-900 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
                {/* Search Input */}
                <div className="w-full lg:flex-1">
                    <label className="flex items-center w-full h-12 bg-background-light dark:bg-gray-800 rounded-lg px-4 gap-3 focus-within:ring-2 ring-primary/20">
                        <Search className="w-4 h-4 text-gray-400" />
                        <input
                            className="w-full bg-transparent border-none focus:ring-0 focus:outline-none text-sm placeholder:text-gray-500"
                            placeholder="Search by area, condo, or university (e.g. Sunway University, Bangsar)..."
                        />
                    </label>
                </div>

                {/* View Toggle Segmented Control */}
                <div className="w-full lg:w-auto flex h-12 p-1 bg-background-light dark:bg-gray-800 rounded-lg min-w-[300px]">
                    {["rooms", "roommates"].map((mode) => (
                        <label
                            key={mode}
                            className={`flex-1 flex cursor-pointer items-center justify-center rounded-md px-4 text-sm font-medium transition-all ${
                                viewMode === mode
                                    ? "bg-white dark:bg-gray-700 shadow-sm text-primary"
                                    : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                            }`}
                        >
                            <input
                                className="hidden"
                                type="radio"
                                name="view_mode"
                                value={mode}
                                checked={viewMode === mode}
                                onChange={(e) => setViewMode(e.target.value)}
                            />
                            {mode === "rooms" ? "Rooms for Rent" : "Roommates"}
                        </label>
                    ))}
                </div>
            </div>

            {/* Chips Filters */}
            <div className="flex flex-wrap gap-2">
                {filterButtons.map(({ icon: Icon, label }) => (
                    <button
                        key={label}
                        className="flex h-9 items-center gap-2 rounded-lg bg-background-light dark:bg-gray-800 px-4 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                        <Icon className="w-4 h-4" />
                        {label}
                        <ChevronDown className="w-4 h-4" />
                    </button>
                ))}

                <div className="ml-auto flex items-center gap-2">
                    <button className="text-sm font-medium text-primary px-3 py-1 hover:bg-primary/10 rounded-lg">
                        Clear All
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchFilterBar;
