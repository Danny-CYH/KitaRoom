import React from "react";
import { TrendingUp, Hash, MapPin, Users } from "lucide-react";

const Trending = () => {
    const trends = [
        {
            id: 1,
            tag: "#SunwayGeo",
            posts: 142,
            type: "location",
        },
        {
            id: 2,
            tag: "#StudentLife",
            posts: 256,
            type: "lifestyle",
        },
        {
            id: 3,
            tag: "#BudgetFriendly",
            posts: 189,
            type: "budget",
        },
        {
            id: 4,
            tag: "#PetFriendly",
            posts: 94,
            type: "amenity",
        },
        {
            id: 5,
            tag: "#MontKiara",
            posts: 76,
            type: "location",
        },
    ];

    const getIcon = (type) => {
        switch (type) {
            case "location":
                return MapPin;
            case "lifestyle":
                return Users;
            default:
                return Hash;
        }
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
            <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-gray-900 dark:text-white">
                    Trending Now
                </h3>
            </div>

            <div className="space-y-4">
                {trends.map((trend) => {
                    const Icon = getIcon(trend.type);
                    return (
                        <button
                            key={trend.id}
                            className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30">
                                    <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div className="text-left">
                                    <div className="font-bold text-gray-900 dark:text-white">
                                        {trend.tag}
                                    </div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">
                                        {trend.posts} posts
                                    </div>
                                </div>
                            </div>
                            <TrendingUp className="w-4 h-4 text-green-500" />
                        </button>
                    );
                })}
            </div>

            <button className="w-full mt-6 py-3 text-primary font-medium hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
                Show More
            </button>
        </div>
    );
};

export default Trending;
