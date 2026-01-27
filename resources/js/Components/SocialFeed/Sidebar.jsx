import React from "react";
import {
    Home,
    Users,
    MapPin,
    Bookmark,
    MessageSquare,
    Bell,
    Settings,
    HelpCircle,
    LogOut,
} from "lucide-react";

const Sidebar = () => {
    const menuItems = [
        { icon: Home, label: "Feed", active: true },
        { icon: Users, label: "My Network", count: 42 },
        { icon: MapPin, label: "Nearby", count: 8 },
        { icon: Bookmark, label: "Saved", count: 12 },
        { icon: MessageSquare, label: "Messages", count: 3 },
        { icon: Bell, label: "Notifications", count: 7 },
    ];

    const settingsItems = [
        { icon: Settings, label: "Settings" },
        { icon: HelpCircle, label: "Help & Support" },
        { icon: LogOut, label: "Logout" },
    ];

    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
            {/* User Profile */}
            <div className="flex items-center gap-3 mb-8">
                <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xl">
                        Y
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white dark:border-gray-800" />
                </div>
                <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">
                        Your Name
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Verified Member
                    </p>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                    <div className="text-xl font-bold text-gray-900 dark:text-white">
                        24
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                        Posts
                    </div>
                </div>
                <div className="text-center">
                    <div className="text-xl font-bold text-gray-900 dark:text-white">
                        156
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                        Followers
                    </div>
                </div>
                <div className="text-center">
                    <div className="text-xl font-bold text-gray-900 dark:text-white">
                        89
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                        Following
                    </div>
                </div>
            </div>

            {/* Menu */}
            <div className="space-y-2 mb-8">
                {menuItems.map((item, index) => (
                    <button
                        key={index}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-colors ${
                            item.active
                                ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                                : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                        }`}
                    >
                        <div className="flex items-center gap-3">
                            <item.icon className="w-5 h-5" />
                            <span className="font-medium">{item.label}</span>
                        </div>
                        {item.count && (
                            <span className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                                {item.count}
                            </span>
                        )}
                    </button>
                ))}
            </div>

            {/* Settings */}
            <div className="pt-6 border-t border-gray-100 dark:border-gray-700">
                <div className="space-y-2">
                    {settingsItems.map((item, index) => (
                        <button
                            key={index}
                            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        >
                            <item.icon className="w-5 h-5" />
                            <span className="font-medium">{item.label}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
