// src/components/FilterSidebar.jsx
import React from "react";
import { Filter, X } from "lucide-react";

const FilterSidebar = ({ filters, onFilterChange }) => {
    const priceOptions = [
        { label: "Under $800", range: [0, 800] },
        { label: "$800 - $1200", range: [800, 1200] },
        { label: "$1200 - $1800", range: [1200, 1800] },
        { label: "$1800 - $2500", range: [1800, 2500] },
        { label: "Above $2500", range: [2500, 5000] },
    ];

    const sortOptions = [
        { value: "popularity", label: "Most Popular" },
        { value: "price-low", label: "Price: Low to High" },
        { value: "price-high", label: "Price: High to Low" },
        { value: "availability", label: "Most Available" },
    ];

    const handlePriceSelect = (range) => {
        onFilterChange({ ...filters, priceRange: range });
    };

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <Filter size={20} className="text-blue-600" />
                    <h3 className="text-lg font-semibold">Filters</h3>
                </div>
                <button
                    onClick={() =>
                        onFilterChange({ ...filters, priceRange: [0, 5000] })
                    }
                    className="text-sm text-blue-600 hover:text-blue-700"
                >
                    Clear all
                </button>
            </div>

            {/* Price Range */}
            <div className="mb-8">
                <h4 className="font-medium mb-4">Price Range</h4>
                <div className="space-y-2">
                    {priceOptions.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handlePriceSelect(option.range)}
                            className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${filters.priceRange[0] === option.range[0] && filters.priceRange[1] === option.range[1] ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100"}`}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>

                <div className="mt-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>${filters.priceRange[0]}</span>
                        <span>${filters.priceRange[1]}</span>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="5000"
                        step="100"
                        value={filters.priceRange[1]}
                        onChange={(e) =>
                            onFilterChange({
                                ...filters,
                                priceRange: [
                                    filters.priceRange[0],
                                    parseInt(e.target.value),
                                ],
                            })
                        }
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-600"
                    />
                </div>
            </div>

            {/* Roommate Filter */}
            <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    <h4 className="font-medium">Roommate Availability</h4>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={filters.roommates}
                            onChange={(e) =>
                                onFilterChange({
                                    ...filters,
                                    roommates: e.target.checked,
                                })
                            }
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                </div>
                <p className="text-sm text-gray-600">
                    Show only areas with roommate requests
                </p>
            </div>

            {/* Availability Filter */}
            <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    <h4 className="font-medium">Available Now</h4>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={filters.availableNow}
                            onChange={(e) =>
                                onFilterChange({
                                    ...filters,
                                    availableNow: e.target.checked,
                                })
                            }
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                </div>
                <p className="text-sm text-gray-600">
                    Show only immediately available rooms
                </p>
            </div>

            {/* Sort By */}
            <div>
                <h4 className="font-medium mb-4">Sort By</h4>
                <div className="space-y-2">
                    {sortOptions.map((option) => (
                        <button
                            key={option.value}
                            onClick={() =>
                                onFilterChange({
                                    ...filters,
                                    sortBy: option.value,
                                })
                            }
                            className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${filters.sortBy === option.value ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100"}`}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FilterSidebar;
